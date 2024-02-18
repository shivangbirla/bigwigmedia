// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";
import Ellipse51 from "../assets/Ellipse51.png";
import Nav from "./Nav";

const Profile = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const navigate = useNavigate()
  return (
    <>
      <Nav />
      <div className=" dark:!text-white flex flex-col min-w-screen min-h-[calc(100vh-90px)] w-full h-full justify-center items-center px-5">
        <div className="w-full h-full flex flex-col justify-center items-center  max-w-[867px] ">
          <div className="text-black dark:text-white text-left self-start font-Outfit text-lg font-semibold leading-normal">
            Your Profile
          </div>
          <div className="flex flex-col md:flex-row justify-center item-center gap-[14px] ">
            <div className="flex flex-col w-[325px] h-[497px] justify-center items-center rounded-md bg-white dark:bg-[#262626] shadow-accordian">
              <div className="w-[146px] h-[146px] rounded-full  bg-center bg-cover bg-lightgray">
                <img src={Ellipse51} alt="" />
              </div>
              <div className="text-black dark:text-white font-Outfit text-xl font-semibold leading-normal">
                Noel Alvarez
              </div>
              <div className="flex felx-row justify-between gap-[12px]">
                <div className="text-black dark:text-white font-Outfit text-base font-semibold leading-normal">
                  Email:
                </div>
                <div className="text-black dark:text-white font-Outfit text-base font-normal leading-normal">
                  noelalverez@gmail.com
                </div>
              </div>
              <div
                className=" relative  flex border-gradient-2 dark:bg-[#262626
] z-10 w-[298px] h-[188px] flex-col p-[23px] gap-[10px] shrink-0 border-2 "
              >
                <div className="text-black dark:text-white font-Outfit text-lg font-semibold leading-normal">
                  PREMIUIM PLAN
                </div>
                <div className="text-black dark:text-white font-Outfit text-sm font-medium leading-normal">
                  Get unlimited access to all the BigWig Media’s AI Tools
                </div>
                <button className="w-[154px] h-[40px] inline-flex p-[2px] items-center justify-center gap-[4px] rounded-[32px] bt-gradient">
                  <span className="text-white font-Outfit text-sm font-medium leading-normal">
                    Buy Premium
                  </span>
                </button>
                <div className="absolute w-full h-full rounded-[13px]  background-gradient  -z-10 top-1 left-1"></div>
                <div className="absolute w-full h-full rounded-[13px] dark:bg-[#262626] bg-white -z-[5] top-0 left-0"></div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-[14px] shadow-accordian  dark:bg-[#262626] bg-white">
              <div className="flex flex-row w-full justify-between rounded-md   p-3">
                <div className="text-black dark:text-white font-Outfit text-xl font-semibold leading-normal">
                  Your Bookmarks
                </div>
                <button className=" flex items-center text-black dark:text-white font-Outfit text-base  leading-normal cursor-pointer font-bold">
                  View All
                  <svg
                    width="7"
                    height="13"
                    viewBox="0 0 7 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="dark:invert my-auto ml-3"
                  >
                    <path
                      d="M0.66626 1.5L5.66626 6.5L0.66626 11.5"
                      stroke="black"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="w-full h-fit flex  gap-5 flex-row justify-center flex-wrap">
                {[1, 2, 3, 4].map((p) => (
                  <div className="flex w-[calc(45%)] flex-col  gap-5 px-3 py-4 text-gray-700 shadow-accordian rounded-xl  max-w-80 max-h-[227px] dark:bg-[#262626] bg-white  ">
                    <div className="flex flex-row gap-5 justify-center items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="37"
                        height="38"
                        viewBox="0 0 37 38"
                        fill="none"
                        className=""
                      >
                        <path
                          d="M22.1409 16.3738L35.8019 0.493652H32.5643L20.7029 14.2818L11.2287 0.493652H0.301323L14.628 21.3441L0.301323 37.9965H3.53887L16.0654 23.4357L26.0705 37.9965H36.9979L22.14 16.3738H22.1409ZM17.7068 21.5275L16.255 19.4514L4.70527 2.93075H9.67792L18.9983 16.2636L20.4497 18.3397L32.5658 35.6702H27.5937L17.7068 21.5284V21.5275Z"
                          fill="black"
                        />
                      </svg>

                      <div className=" flex items-center text-xl text-black dark:text-white font-outfit  font-semibold">
                        AI X(Twitter) Bio Generator
                      </div>
                    </div>

                    <div className="flex items-start justify-center  pt-0 gap-5">
                      <button className="flex w-full p-1 md:p-2 justify-center my-auto gap-2.26 rounded-full bg-gray-900  text-white font-outfit text-base font-medium px-10 mx-auto">
                        Generate
                      </button>
                      <button className="flex w-[40px] h-[40px] gap-2 rounded-full border-2 border-gray-800 p-1 justify-end">
                        <span className="w-22.599 h-22.599 flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="23"
                            height="24"
                            viewBox="0 0 23 24"
                            fill="none"
                            className="w-6 h-6 text-gray-700 dark:text-gray-300"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.77765 5.56119C3.77765 4.81199 4.07527 4.09347 4.60503 3.56371C5.13479 3.03395 5.85331 2.73633 6.60251 2.73633H16.0187C16.7679 2.73633 17.4864 3.03395 18.0162 3.56371C18.5459 4.09347 18.8436 4.81199 18.8436 5.56119V20.6535C18.8436 21.8022 17.5441 22.4708 16.61 21.8032L11.3106 18.0179L6.01117 21.8032C5.07614 22.4717 3.77765 21.8032 3.77765 20.6544V5.56119ZM6.60251 4.61957C6.35277 4.61957 6.11327 4.71877 5.93668 4.89536C5.76009 5.07195 5.66089 5.31145 5.66089 5.56119V19.7392L10.4895 16.29C10.7291 16.1188 11.0162 16.0268 11.3106 16.0268C11.605 16.0268 11.8921 16.1188 12.1317 16.29L16.9603 19.7392V5.56119C16.9603 5.31145 16.8611 5.07195 16.6845 4.89536C16.5079 4.71877 16.2684 4.61957 16.0187 4.61957H6.60251Z"
                              fill="#1E1E1E"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className=" px-5 w-full  flex shrink-0 flex-col">
                <div className="w-[79px] h-[28px] flex shrink-0 text-black dark:text-white font-Outfit text-xl font-semibold leading-normal">
                  Credits
                </div>
                <div> </div>
                <div className="w-[93px] h-[28px] flex shrink-0 text-black dark:text-white font-Outfit text-base font-medium leading-normal ">
                  22 of 30 left
                </div>
              </div>

              <div className="  flex-row justify-start w-[calc(100%-16px)] px-5 mb-2 py-2 rounded-lg flex shrink-0 mx-2 bg-white dark:bg-[#262626] shadow-accordian">
                <div className="w-[34px] h-[34px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 34 34"
                    fill="none"
                    className="text-red-500"
                  >
                    <path
                      d="M7.08333 29.75C6.30417 29.75 5.63739 29.4728 5.083 28.9184C4.52861 28.364 4.25094 27.6968 4.25 26.9167V7.08333C4.25 6.30417 4.52767 5.63739 5.083 5.083C5.63833 4.52861 6.30511 4.25094 7.08333 4.25H17V7.08333H7.08333V26.9167H17V29.75H7.08333ZM22.6667 24.0833L20.7188 22.0292L24.3312 18.4167H12.75V15.5833H24.3312L20.7188 11.9708L22.6667 9.91667L29.75 17L22.6667 24.0833Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="text-red-500 font-Outfit text-xl font-normal leading-normal">
                  Logout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
