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
// import Profile from "@/components/Profile";

// type Props = {};


export interface Card {
 _id: String,
  name: String,
  description: String,
  logo: string

}

const Landing = () => {
  const [buttons, setButtons] = useState<String[]>([]);
  const [selectedButton, setSelectedButton] =
    useState<String>("Article Creator");
  const [cards, setCards] = useState<Card[]>([]);
  const [search, setSearch] = useState("")

  const getButtons = async () => {
    // const
    const res = await axios.get(`${BASE_URL}/templates/labels`);
    setButtons(res.data.data);
    setSelectedButton(res.data.data[0]);
  };

  useEffect(() => {
    getButtons();
  }, []);

  const getTemplates = async () => {
    const res = await axios.get(
      `${BASE_URL}/templates/label/${selectedButton}`
    );
    setCards(res.data.data);
  };
  useEffect(() => {
    if(buttons.length===0) return ;
    getTemplates();
  }, [selectedButton]);

  const handleSearch = async()=>{
    const res = await axios.get(`${BASE_URL}/templates/search?search=${search}`);
    console.log(res.data.data)
    setCards(res.data.data);
  }

  return (
    <div className="bg-white dark:bg-[#1E1E1E]">
      <Nav />
      <div className="px-5 min-h-screen">
        <Hero search={search} setSearch={setSearch} onClick={handleSearch} />

        <div className="hidden md:block">
          <Menu
            buttons={buttons}
            selectedButton={selectedButton}
            setSelectedButton={setSelectedButton}
          />
          <Cards cards={cards} />
        </div>
        <div className="md:hidden">
          <MenuMobile
            buttons={buttons}
            selectedButton={selectedButton}
            setSelectedButton={setSelectedButton}
            cards={cards}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
