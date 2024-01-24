import { useEffect, useState } from "react";
import logo from "../assets/Logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { ModeToggle } from "./ui/mode-toggle";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="sticky top-0 z-50 backnavdrop">
      <div className="h-10vh flex justify-between z-50 text-black dark:text-white lg:py-5 px-9 md:px-14  lg:px-24 mx-auto py-4  border-b ">
        <div className="flex items-center gap-4 cursor-pointer">
          <img src={logo} alt="" />
          <span className="text-gray-900 hidden md:block dark:text-white font-outfit text-2xl font-semibold">
            BigWigMedia.ai
          </span>
        </div>
        <div className="hidden md:flex lg: gap-4 items center justify-end front-normal ">
          <div className="flex justify-center">
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
              <DropdownMenuTrigger className="bg-transparent text-gray-900 dark:text-white border border-gray-900 dark:border-white px-2 rounded-full py-1 flex flex-row font-bold justify-center items-center gap-3">
                Select Language
                <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform duration-200",isOpen&&"rotate-180")} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Languages</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Hindi</DropdownMenuItem>
                <DropdownMenuItem>Telugu</DropdownMenuItem>
                <DropdownMenuItem></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <button
            className="text-gray-900 font-outfit text-base font-semibold dark:text-gray-200 hover:text-gray-700 hover:drop-shadow-2xl "
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
          <button className="flex px-4 py-2 justify-center items-center text-white font-outfit text-base font-semibold gap-2 rounded-3xl hover:bg-gray-800 bg-gray-900 shadow-md ">
            Sign Up
          </button>
        </div>

        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button className="p-0 bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  className="dark:invert"
                >
                  <path
                    d="M7.79199 25.5416H28.2087M7.79199 18.25H28.2087M7.79199 10.9583H28.2087"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem onClick={()=>{
                navigate("/login")
              }}>Sign In</DropdownMenuItem>
              <DropdownMenuItem>Sign Up</DropdownMenuItem>
              <DropdownMenuItem></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
