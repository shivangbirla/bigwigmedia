// import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Cards from "../components/Cards";
import MenuMobile from "@/components/MenuMobile";
import { useEffect, useState } from "react";
import { BASE_URL } from "@/utils/funcitons";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
import { toast } from "sonner";
// import Profile from "@/components/Profile";

// type Props = {};

export interface Card {
  _id: String;
  name: String;
  description: String;
  logo: string;
  isBookmarked: Boolean;
  labels: string[];
  // setChange: Function;
}

const Landing = () => {
  const [buttons, setButtons] = useState<String[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user, isSignedIn, isLoaded } = useUser();
  const [change, setChange] = useState(0);

  const [selectedButton, setSelectedButton] =
    useState<String>("Article Creator");
  const [cards, setCards] = useState<Card[]>([]);
  const [cardsBookmark, setCardsBookmark] = useState<Card[]>([]);
  const [search, setSearch] = useState("");

  const getButtons = async () => {
    // const
    const res = await axios.get(`${BASE_URL}/templates/labels`);
    const bookmarked = [...res.data.data];
    if (isSignedIn) bookmarked.splice(1, 0, "My Tools");
    setButtons(bookmarked);
    setSelectedButton(res.data.data[0]);
  };

  useEffect(() => {
    getButtons();
    isSignedIn && getBookMarks();
  }, [isLoaded, isSignedIn]);

  const getBookMarks = async (bool = false) => {
    if (!isSignedIn) {
      setCards([]);
      toast.error("Please sign in to view your bookmarks");
      return;
    }
    const res = await axios.get(`${BASE_URL}/bookmarks?clerkId=${user.id}`);
    const cards = res.data.data.map((card: Card) => ({
      ...card,
      isBookmarked: true,
    }));
    // setCards(cards);
    setCardsBookmark(cards);
    if (bool) setCards(cards);
    setIsLoading(false);
  };

  const getTemplates = async () => {
    let url = `${BASE_URL}/templates/label/${selectedButton}`;

    if (isSignedIn)
      url = `${BASE_URL}/templates/label/${selectedButton}?clerkId=${user.id}`;
    const res = await axios.get(url);
    setCards(res.data.data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (buttons.length === 0) return;
    if(!isLoaded) return;
    setIsLoading(true);
    if (selectedButton !== "My Tools") {
      getTemplates();
    } else if (isSignedIn) getBookMarks(true);
  }, [selectedButton, isLoaded]);
  useEffect(() => {
    if (buttons.length === 0) return;
    if (selectedButton !== "My Tools") {
      // getTemplates();
    } else if (isSignedIn) {
      setIsLoading(true);

      getBookMarks(true);
    }
  }, [isLoaded, change]);

  const handleSearch = async () => {
    const res = await axios.get(
      `${BASE_URL}/templates/search?search=${search}`
    );
    setCards(res.data.data);
  };

  return (
    <div className="bg-white dark:bg-[#1E1E1E]">
      <Nav />
      <div className="px-5 min-h-screen">
        <Hero search={search} setSearch={setSearch} onClick={handleSearch} />

        <div className="hidden md:block mt-10">
          {buttons.length > 0 && (
            <Menu
              buttons={buttons}
              selectedButton={selectedButton}
              setSelectedButton={setSelectedButton}
            />
          )}
          <Cards cards={cards} isLoading={isLoading} setChange={setChange} />
        </div>

        <div className="md:hidden">
          <MenuMobile
            buttons={buttons}
            selectedButton={selectedButton}
            setSelectedButton={setSelectedButton}
            cards={cards}
            isLoading={isLoading}
            setChange={setChange}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
