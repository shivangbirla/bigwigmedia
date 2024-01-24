

import React from "react";
import Footer from '../components/Footer';
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Cards from "../components/Cards";
import MenuMobile from "@/components/MenuMobile";
import Profile from "@/components/Profile";


type Props = {};

const Landing = (props: Props) => {
  return (
    <div className="bg-white dark:bg-[#1E1E1E]">
      <Nav />
      <div className="px-5 min-h-screen">
        <Hero />

        <div className="hidden md:block">
          <Menu />
          <Cards />
        </div>
        <div className="md:hidden">
          <MenuMobile />
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Landing;
