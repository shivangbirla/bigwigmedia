import { useState } from "react";
import logo from "../assets/Logo.png";
import { ModeToggle } from "./ui/mode-toggle";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
// import { ModeToggle } from "./ui/mode-toggle";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  SignOutButton,
  // SignInButton,
  SignIn,
  useAuth,
  SignedOut,
} from "@clerk/clerk-react";
import Logo from "../assets/Logo.png";
import Ellipse51 from "../assets/Ellipse51.png";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { getToken, isLoaded, isSignedIn, userId } = useAuth();
  console.log(isSignedIn, "isSignedIn");

  return (
    <div className=" h-screen max-h-screen">
      <nav className="sticky top-0 h-fit z-50 backnavdrop">
        <div className=" flex justify-between z-50 text-black dark:text-white lg:py-5 px-9 md:px-14  lg:px-24 mx-auto py-4  border-b ">
          <div className="flex items-center gap-4 cursor-pointer">
            <img src={logo} alt="" />
            <span className="text-gray-900 hidden md:block dark:text-white font-outfit text-2xl font-semibold">
              BigWigMedia.ai
            </span>
          </div>
          <div className="flex flex-row items-center">
            <div className="hidden md:flex lg: gap-4 items center justify-end front-normal ">
              <div className="flex justify-center">
                <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                  <DropdownMenuTrigger className="bg-transparent text-gray-900 dark:text-white border border-gray-900 dark:border-white px-2 rounded-full py-1 flex flex-row font-bold justify-center items-center gap-3">
                    Select Language
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 shrink-0 transition-transform duration-200",
                        isOpen && "rotate-180"
                      )}
                    />
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

              {!isSignedIn ? (
                <button
                  className="flex px-4 py-2 justify-center items-center text-white font-outfit text-base font-semibold gap-2 rounded-3xl hover:bg-gray-800 bg-gray-900 shadow-md "
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </button>
              ) : (
                <button className="flex px-4 py-2 justify-center items-center text-white font-outfit text-base font-semibold gap-2 rounded-3xl hover:bg-gray-800 bg-gray-900 shadow-md ">
                  <SignOutButton />
                </button>
              )}
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
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Sign In
                  </DropdownMenuItem>
                  {/* <DropdownMenuItem>Sign Up</DropdownMenuItem> */}
                  <DropdownMenuItem></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="ml-4">
              <ModeToggle />
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-col w-full h-[calc(100%-85px)] justify-center items-center ">
        <div className="flex flex-col w-[897px] gap-[10px]">
          <div className="text-black font-Outfit text-2xl  font-semibold">
            Your Profile
          </div>
          <div className="inline-flex items-start w-full h-full max-h-[498px] gap-[14px]">
            <div className="flex flex-row gap-[14px] ">
              <div className="flex flex-col w-[325px] h-[497px] justify-center items-center rounded-md bg-white shadow-md">
                <div className="w-[146px] h-[146px] rounded-full  bg-center bg-cover bg-lightgray">
                  <img src={Ellipse51} alt="" />
                </div>
                <div className="text-black font-Outfit text-xl font-semibold leading-normal">
                  Noel Alvarez
                </div>
                <div className="flex felx-row justify-between gap-[12px]">
                  <div className="text-black font-Outfit text-base font-semibold leading-normal">
                    Email:
                  </div>
                  <div className="text-black font-Outfit text-base font-normal leading-normal">
                    noelalverez@gmail.com
                  </div>
                </div>
                <div className="flex w-[298px] h-[188px] flex-col p-[23px] gap-[10px] shrink-0 rounded-md border-2 border-var(--gradient, #FFC700) bg-white shadow-md">
                  <div className="text-black font-Outfit text-lg font-semibold leading-normal">
                    PREMIUIM PLAN
                  </div>
                  <div className="text-black font-Outfit text-sm font-medium leading-normal">
                    Get unlimited access to all the BigWig Media’s AI Tools
                  </div>
                  <button className="w-[154px] h-[40px] inline-flex p-[2px] items-center justify-center gap-[4px] rounded-[32px] bt-gradient">
                    <span className="text-white font-Outfit text-sm font-medium leading-normal">
                      Buy Premium
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-start gap-[14px] w-[full] h-full max-h-[497px] shrink-0">
                <div className="flex flex-col p-[17px] shrink-0 w-[528px] rounded-10 bg-white shadow-md">
                  <div className="flex flex-row justify-between  w-full max-w-[498.7px] h-full max-h-[49px] my-[4px] p-[10px]">
                    <div className=" text-black font-Outfit text-23 font-semibold  max-h-[29px]">
                      Your Bookmark
                    </div>

                    <div className="flex flex-row h-[20px] text-black font-Outfit text-14.236 font-medium">
                      View All{" "}
                      <div className="w-[20px] h-[20px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                        >
                          <path
                            d="M8.66626 5.5L13.6663 10.5L8.66626 15.5"
                            stroke="black"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap h-full  items-start gap-[14px] shrink-0 my-[5.5px]">
                    <div className=" flex flex-col w-[224px] h-full rounded-lg gap-[10px] shadow-accordian p-3">
                      <div className="flex flex-row items-center justify-start gap-[1.03px]">
                        <div className="inline-flex p-[7.721px] items-start gap-[7.721px] rounded-3.86">
                          <div className="w-[25.686px] h-[26.25px] text-black">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="26"
                              height="28"
                              viewBox="0 0 26 28"
                              fill="none"
                            >
                              <path
                                d="M15.3974 11.9599L24.9596 0.844421H22.6934L14.3909 10.4956L7.75934 0.844421H0.110596L10.1387 15.4389L0.110596 27.0949H2.37675L11.1448 16.903L18.148 27.0949H25.7967L15.3968 11.9599H15.3974ZM12.2937 15.5673L11.2775 14.114L3.19318 2.55029H6.67384L13.1977 11.8828L14.2137 13.336L22.6944 25.4666H19.2142L12.2937 15.5679V15.5673Z"
                                fill="black"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="w-[119.586PX] text-black font-Outfit text-15.818 font-medium">
                          AI X(Twitter) Bio Generator
                        </div>
                      </div>
                      <div className="flex flex-row justify-start items-center gap-[3px]">
                        <div className="flex w-[171.47px] px-50.619 py-6.327 justify-center items-center gap-[6.327px] rounded-full bg-gray-900">
                          <div className="text-white font-Outfit text-11.389 font-medium py-[6.3px]">
                            Generate
                          </div>
                        </div>
                        <div className="flex w-7 h-7 justify-center items-center   rounded-full border border-gray-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="self-center w-4 h-4"
                            viewBox="0 0 17 16"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.83362 3.48541C2.83362 2.961 3.04194 2.45807 3.41275 2.08725C3.78357 1.71644 4.2865 1.50812 4.81091 1.50812H11.4019C11.9263 1.50812 12.4292 1.71644 12.8 2.08725C13.1708 2.45807 13.3792 2.961 13.3792 3.48541V14.0494C13.3792 14.8535 12.4696 15.3215 11.8158 14.8542L8.10639 12.2046L4.39699 14.8542C3.74251 15.3221 2.83362 14.8541 2.83362 14.0501V3.48541Z"
                              fill="#1E1E1E"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className=" flex flex-col w-[224px] h-full rounded-lg gap-[10px] shadow-accordian p-3">
                      <div className="flex flex-row items-center justify-start gap-[1.03px]">
                        <div className="inline-flex p-[7.721px] items-start gap-[7.721px] rounded-3.86">
                          <div className="w-[25.686px] h-[26.25px] text-black">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="26"
                              height="28"
                              viewBox="0 0 26 28"
                              fill="none"
                            >
                              <path
                                d="M15.3974 11.9599L24.9596 0.844421H22.6934L14.3909 10.4956L7.75934 0.844421H0.110596L10.1387 15.4389L0.110596 27.0949H2.37675L11.1448 16.903L18.148 27.0949H25.7967L15.3968 11.9599H15.3974ZM12.2937 15.5673L11.2775 14.114L3.19318 2.55029H6.67384L13.1977 11.8828L14.2137 13.336L22.6944 25.4666H19.2142L12.2937 15.5679V15.5673Z"
                                fill="black"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="w-[119.586PX] text-black font-Outfit text-15.818 font-medium">
                          AI X(Twitter) Bio Generator
                        </div>
                      </div>
                      <div className="flex flex-row justify-start items-center gap-[3px]">
                        <div className="flex w-[171.47px] px-50.619 py-6.327 justify-center items-center gap-[6.327px] rounded-full bg-gray-900">
                          <div className="text-white font-Outfit text-11.389 font-medium py-[6.3px]">
                            Generate
                          </div>
                        </div>
                        <div className="flex w-7 h-7 justify-center items-center   rounded-full border border-gray-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="self-center w-4 h-4"
                            viewBox="0 0 17 16"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.83362 3.48541C2.83362 2.961 3.04194 2.45807 3.41275 2.08725C3.78357 1.71644 4.2865 1.50812 4.81091 1.50812H11.4019C11.9263 1.50812 12.4292 1.71644 12.8 2.08725C13.1708 2.45807 13.3792 2.961 13.3792 3.48541V14.0494C13.3792 14.8535 12.4696 15.3215 11.8158 14.8542L8.10639 12.2046L4.39699 14.8542C3.74251 15.3221 2.83362 14.8541 2.83362 14.0501V3.48541Z"
                              fill="#1E1E1E"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap h-full  items-start gap-[14px] shrink-0 my-[5.5px]">
                    <div className=" flex flex-col w-[224px] h-full rounded-lg gap-[10px] shadow-accordian p-3">
                      <div className="flex flex-row items-center justify-start gap-[1.03px]">
                        <div className="inline-flex p-[7.721px] items-start gap-[7.721px] rounded-3.86">
                          <div className="w-[25.686px] h-[26.25px] text-black">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="26"
                              height="28"
                              viewBox="0 0 26 28"
                              fill="none"
                            >
                              <path
                                d="M15.3974 11.9599L24.9596 0.844421H22.6934L14.3909 10.4956L7.75934 0.844421H0.110596L10.1387 15.4389L0.110596 27.0949H2.37675L11.1448 16.903L18.148 27.0949H25.7967L15.3968 11.9599H15.3974ZM12.2937 15.5673L11.2775 14.114L3.19318 2.55029H6.67384L13.1977 11.8828L14.2137 13.336L22.6944 25.4666H19.2142L12.2937 15.5679V15.5673Z"
                                fill="black"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="w-[119.586PX] text-black font-Outfit text-15.818 font-medium">
                          AI X(Twitter) Bio Generator
                        </div>
                      </div>
                      <div className="flex flex-row justify-start items-center gap-[3px]">
                        <div className="flex w-[171.47px] px-50.619 py-6.327 justify-center items-center gap-[6.327px] rounded-full bg-gray-900">
                          <div className="text-white font-Outfit text-11.389 font-medium py-[6.3px]">
                            Generate
                          </div>
                        </div>
                        <div className="flex w-7 h-7 justify-center items-center   rounded-full border border-gray-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="self-center w-4 h-4"
                            viewBox="0 0 17 16"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.83362 3.48541C2.83362 2.961 3.04194 2.45807 3.41275 2.08725C3.78357 1.71644 4.2865 1.50812 4.81091 1.50812H11.4019C11.9263 1.50812 12.4292 1.71644 12.8 2.08725C13.1708 2.45807 13.3792 2.961 13.3792 3.48541V14.0494C13.3792 14.8535 12.4696 15.3215 11.8158 14.8542L8.10639 12.2046L4.39699 14.8542C3.74251 15.3221 2.83362 14.8541 2.83362 14.0501V3.48541Z"
                              fill="#1E1E1E"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className=" flex flex-col w-[224px] h-full rounded-lg gap-[10px] shadow-accordian p-3">
                      <div className="flex flex-row items-center justify-start gap-[1.03px]">
                        <div className="inline-flex p-[7.721px] items-start gap-[7.721px] rounded-3.86">
                          <div className="w-[25.686px] h-[26.25px] text-black">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="26"
                              height="28"
                              viewBox="0 0 26 28"
                              fill="none"
                            >
                              <path
                                d="M15.3974 11.9599L24.9596 0.844421H22.6934L14.3909 10.4956L7.75934 0.844421H0.110596L10.1387 15.4389L0.110596 27.0949H2.37675L11.1448 16.903L18.148 27.0949H25.7967L15.3968 11.9599H15.3974ZM12.2937 15.5673L11.2775 14.114L3.19318 2.55029H6.67384L13.1977 11.8828L14.2137 13.336L22.6944 25.4666H19.2142L12.2937 15.5679V15.5673Z"
                                fill="black"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="w-[119.586PX] text-black font-Outfit text-15.818 font-medium">
                          AI X(Twitter) Bio Generator
                        </div>
                      </div>
                      <div className="flex flex-row justify-start items-center gap-[3px]">
                        <div className="flex w-[171.47px] px-50.619 py-6.327 justify-center items-center gap-[6.327px] rounded-full bg-gray-900">
                          <div className="text-white font-Outfit text-11.389 font-medium py-[6.3px]">
                            Generate
                          </div>
                        </div>
                        <div className="flex w-7 h-7 justify-center items-center   rounded-full border border-gray-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="self-center w-4 h-4"
                            viewBox="0 0 17 16"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.83362 3.48541C2.83362 2.961 3.04194 2.45807 3.41275 2.08725C3.78357 1.71644 4.2865 1.50812 4.81091 1.50812H11.4019C11.9263 1.50812 12.4292 1.71644 12.8 2.08725C13.1708 2.45807 13.3792 2.961 13.3792 3.48541V14.0494C13.3792 14.8535 12.4696 15.3215 11.8158 14.8542L8.10639 12.2046L4.39699 14.8542C3.74251 15.3221 2.83362 14.8541 2.83362 14.0501V3.48541Z"
                              fill="#1E1E1E"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex shrink-0 w-[528px] h-[124px] rounded-10 bg-white shadow-md">
                  B
                </div>
                <div className="flex flex-row items-end shrink-0 w-[528px] h-[55px] gap-[10px] rounded-10 bg-white shadow-md p-[10px]">
                  <div className="w-[34px] h-[34px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                    >
                      <path
                        d="M7.08333 29.75C6.30417 29.75 5.63739 29.4728 5.083 28.9184C4.52861 28.364 4.25094 27.6968 4.25 26.9167V7.08333C4.25 6.30417 4.52767 5.63739 5.083 5.083C5.63833 4.52861 6.30511 4.25094 7.08333 4.25H17V7.08333H7.08333V26.9167H17V29.75H7.08333ZM22.6667 24.0833L20.7188 22.0292L24.3312 18.4167H12.75V15.5833H24.3312L20.7188 11.9708L22.6667 9.91667L29.75 17L22.6667 24.0833Z"
                        fill="#FF0000"
                      />
                    </svg>
                  </div>
                  <div className="w-[72px] h-[29px] text-red-500 font-Outfit text-23 font-normal">
                    Logout
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
