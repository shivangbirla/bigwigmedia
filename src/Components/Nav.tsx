
import { useEffect } from "react";
import logo from "../assets/Logo.png";

const Nav = () => {
  
  
  
 
  return (
    <nav className="sticky top-0 z-50 backnavdrop">
      <div className="h-10vh flex justify-between z-50 text-black lg:py-5   px-24 mx-auto py-4  border-b ">
        <div className="flex items-center gap-4 cursor-pointer">
          <img src={logo} alt="" />
          <span className="text-gray-900  font-outfit text-2xl font-semibold">
            BigWigMedia.ai
          </span>
        </div>
        <div className="flex lg: gap-4 items center justify-end front-normal ">
          <div className="flex justify-center">
            <button className="">Select Language</button>
          </div>
          <button className="text-gray-900 font-outfit text-base font-semibold hover:text-gray-700 hover:drop-shadow-2xl ">
            Login
          </button>
          <button className="flex px-4 py-2 justify-center items-center text-white font-outfit text-base font-semibold gap-2 rounded-3xl hover:bg-gray-800 bg-gray-900 shadow-md ">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
