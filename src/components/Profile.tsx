import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";
import Ellipse51 from "../assets/Ellipse51.png";



const Profile =()=>{
       
            const [isOpen, setIsOpen] = useState(false);
            const navigate = useNavigate()
            return (
                <div>
              <nav className="sticky top-0 z-50 backnavdrop">
                <div className="h-10vh flex justify-between z-50 text-black lg:py-5 px-9 md:px-14  lg:px-24 mx-auto py-4  border-b ">
                  <div className="flex items-center gap-4 cursor-pointer">
                    <img src={logo} alt="" />
                    <span className="text-gray-900 hidden md:block  font-outfit text-2xl font-semibold">
                      BigWigMedia.ai
                    </span>
                  </div>
                  <div className="hidden md:flex lg: gap-4 items center justify-end front-normal ">
                    <div className="flex justify-center">
                      <button className="text-black font-Outfit text-base font-semibold leading-normal">Select Language</button>
                    </div>
                    <div className="w-[56px] h-[56px] rounded-full  bg-center bg-cover bg-lightgray">
                        <img src={Ellipse51} alt=""/>
                    </div>
                    {/* <button className="text-gray-900 font-outfit text-base font-semibold hover:text-gray-700 hover:drop-shadow-2xl " onClick={()=>{
                      navigate("/login")
                    }}>
                      Login
                    </button> */}
                    
                   
                  </div>
                  </div>
                  </nav>
                  <div className="flex flex-col w-full h-full items-center my-[10px]">
                    <div className="flex flex-col w-[867px] h-[498px] justify-start  gap-[10px] ">
                    <div className="text-black font-Outfit text-lg font-semibold leading-normal">Your Profile</div>
                    <div className="flex flex-row gap-[14px] ">
                        <div className="flex flex-col w-[325px] h-[497px] justify-center items-center rounded-md bg-white shadow-md">
                            <div className="w-[146px] h-[146px] rounded-full  bg-center bg-cover bg-lightgray">
                                <img src={Ellipse51} alt=""/>
                            </div>
                            <div className="text-black font-Outfit text-xl font-semibold leading-normal">Noel Alvarez</div>
                            <div className="flex felx-row justify-between gap-[12px]">
                                <div className="text-black font-Outfit text-base font-semibold leading-normal">Email:</div>
                                <div className="text-black font-Outfit text-base font-normal leading-normal">noelalverez@gmail.com</div>
                            </div>
                            <div className="flex w-[298px] h-[188px] flex-col p-[23px] gap-[10px] shrink-0 rounded-md border-2 border-var(--gradient, #FFC700) bg-white shadow-md">
                                <div className="text-black font-Outfit text-lg font-semibold leading-normal">PREMIUIM PLAN</div>
                                <div className="text-black font-Outfit text-sm font-medium leading-normal">Get unlimited access to all the BigWig Media’s AI Tools</div>
                                <button className="w-[154px] h-[40px] inline-flex p-[2px] items-center justify-center gap-[4px] rounded-[32px] bt-gradient">
                                    <span className="text-white font-Outfit text-sm font-medium leading-normal">
                                        Buy Premium
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-[14px]">
                            <div className="flex flex-row w-[528px] justify-between gap-[239px] rounded-md bg-white shadow-md">
                                <div className="text-black font-Outfit text-xl font-semibold leading-normal">Your Bookmarks</div>
                                <div className=" flex items-center text-black font-Outfit text-xs font-medium leading-normal ">View All</div>
                            </div>
                            <div className="flex flex-row"><div className="flex flex-col gap-5 px-3 py-4 text-gray-700 shadow-xl rounded-xl  max-w-80 max-h-[227px] bg-white  w-full">
        <div className="flex flex-row gap-8 w-[224px] h-[103px] justify-center items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="38"
            viewBox="0 0 37 38"
            fill="none"
            className="m-3"
          >
            <path
              d="M22.1409 16.3738L35.8019 0.493652H32.5643L20.7029 14.2818L11.2287 0.493652H0.301323L14.628 21.3441L0.301323 37.9965H3.53887L16.0654 23.4357L26.0705 37.9965H36.9979L22.14 16.3738H22.1409ZM17.7068 21.5275L16.255 19.4514L4.70527 2.93075H9.67792L18.9983 16.2636L20.4497 18.3397L32.5658 35.6702H27.5937L17.7068 21.5284V21.5275Z"
              fill="black"
            />
          </svg>

          <div className=" flex items-center text-xl text-black font-outfit  font-semibold">
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.77765 5.56119C3.77765 4.81199 4.07527 4.09347 4.60503 3.56371C5.13479 3.03395 5.85331 2.73633 6.60251 2.73633H16.0187C16.7679 2.73633 17.4864 3.03395 18.0162 3.56371C18.5459 4.09347 18.8436 4.81199 18.8436 5.56119V20.6535C18.8436 21.8022 17.5441 22.4708 16.61 21.8032L11.3106 18.0179L6.01117 21.8032C5.07614 22.4717 3.77765 21.8032 3.77765 20.6544V5.56119ZM6.60251 4.61957C6.35277 4.61957 6.11327 4.71877 5.93668 4.89536C5.76009 5.07195 5.66089 5.31145 5.66089 5.56119V19.7392L10.4895 16.29C10.7291 16.1188 11.0162 16.0268 11.3106 16.0268C11.605 16.0268 11.8921 16.1188 12.1317 16.29L16.9603 19.7392V5.56119C16.9603 5.31145 16.8611 5.07195 16.6845 4.89536C16.5079 4.71877 16.2684 4.61957 16.0187 4.61957H6.60251Z"
                  fill="#1E1E1E"
                />
              </svg>
            </span>
          </button>
        </div>
      </div> <div className="flex flex-col gap-5 px-3 py-4 text-gray-700 shadow-xl rounded-xl  max-w-80 max-h-[227px] bg-white  w-full">
        <div className="flex flex-row gap-8  justify-center items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="53"
            height="53"
            viewBox="0 0 53 53"
            fill="none"
          >
            <g clip-path="url(#clip0_0_83)">
              <path
                d="M52.4 26.5C52.4 12.0855 40.7145 0.399994 26.3 0.399994C11.8854 0.399994 0.199951 12.0855 0.199951 26.5C0.199951 39.5272 9.7444 50.325 22.2218 52.2829V34.0445H15.5949V26.5H22.2218V20.7498C22.2218 14.2085 26.1185 10.5953 32.0803 10.5953C34.9358 10.5953 37.9226 11.1051 37.9226 11.1051V17.5281H34.6316C31.3892 17.5281 30.3781 19.5401 30.3781 21.6042V26.5H37.6167L36.4596 34.0445H30.3781V52.2829C42.8555 50.325 52.4 39.5274 52.4 26.5Z"
                fill="#1877F2"
              />
              <path
                d="M36.4596 34.0446L37.6168 26.5H30.3781V21.6042C30.3781 19.5399 31.3893 17.5281 34.6316 17.5281H37.9226V11.1051C37.9226 11.1051 34.9358 10.5953 32.0801 10.5953C26.1185 10.5953 22.2218 14.2086 22.2218 20.7499V26.5H15.5949V34.0446H22.2218V52.283C23.5709 52.4944 24.9344 52.6004 26.3 52.6C27.6655 52.6004 29.029 52.4944 30.3781 52.283V34.0446H36.4596Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_0_83">
                <rect
                  width="52.2"
                  height="52.2"
                  fill="white"
                  transform="translate(0.199951 0.399994)"
                />
              </clipPath>
            </defs>
          </svg>

          <div className=" flex items-center text-xl text-black font-outfit  font-semibold">
            AI Facebook Bio Generator{" "}
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.77765 5.56119C3.77765 4.81199 4.07527 4.09347 4.60503 3.56371C5.13479 3.03395 5.85331 2.73633 6.60251 2.73633H16.0187C16.7679 2.73633 17.4864 3.03395 18.0162 3.56371C18.5459 4.09347 18.8436 4.81199 18.8436 5.56119V20.6535C18.8436 21.8022 17.5441 22.4708 16.61 21.8032L11.3106 18.0179L6.01117 21.8032C5.07614 22.4717 3.77765 21.8032 3.77765 20.6544V5.56119ZM6.60251 4.61957C6.35277 4.61957 6.11327 4.71877 5.93668 4.89536C5.76009 5.07195 5.66089 5.31145 5.66089 5.56119V19.7392L10.4895 16.29C10.7291 16.1188 11.0162 16.0268 11.3106 16.0268C11.605 16.0268 11.8921 16.1188 12.1317 16.29L16.9603 19.7392V5.56119C16.9603 5.31145 16.8611 5.07195 16.6845 4.89536C16.5079 4.71877 16.2684 4.61957 16.0187 4.61957H6.60251Z"
                  fill="#1E1E1E"
                />
              </svg>
            </span>
          </button>
        </div>
      </div></div>
                            <div className="flex flex-row"><div className="flex flex-col gap-5 px-3 py-4 text-gray-700 shadow-xl rounded-xl  max-w-80 max-h-[227px] bg-white  w-full">
        <div className="flex flex-row gap-8  justify-center items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="53"
            height="53"
            viewBox="0 0 53 53"
            fill="none"
          >
            <g clip-path="url(#clip0_0_97)">
              <path
                d="M40.7657 0.399994H13.0344C6.27757 0.399994 0.800049 5.87751 0.800049 12.6344V40.3656C0.800049 47.1225 6.27757 52.6 13.0344 52.6H40.7657C47.5225 52.6 53 47.1225 53 40.3656V12.6344C53 5.87751 47.5225 0.399994 40.7657 0.399994Z"
                fill="url(#paint0_radial_0_97)"
              />
              <path
                d="M40.7657 0.399994H13.0344C6.27757 0.399994 0.800049 5.87751 0.800049 12.6344V40.3656C0.800049 47.1225 6.27757 52.6 13.0344 52.6H40.7657C47.5225 52.6 53 47.1225 53 40.3656V12.6344C53 5.87751 47.5225 0.399994 40.7657 0.399994Z"
                fill="url(#paint1_radial_0_97)"
              />
              <path
                d="M26.9018 6.10941C21.3641 6.10941 20.669 6.13367 18.4941 6.23256C16.3233 6.33207 14.8416 6.67565 13.5451 7.17991C12.2038 7.70069 11.0662 8.39744 9.93292 9.53116C8.79859 10.6647 8.10185 11.8023 7.57944 13.1429C7.07375 14.4398 6.72976 15.9222 6.63209 18.092C6.53483 20.267 6.50934 20.9623 6.50934 26.5002C6.50934 32.0381 6.53381 32.731 6.6325 34.9059C6.73241 37.0766 7.07599 38.5584 7.57985 39.8549C8.10103 41.1962 8.79778 42.3338 9.9315 43.4671C11.0646 44.6014 12.2022 45.2998 13.5425 45.8206C14.8399 46.3248 16.3219 46.6684 18.4923 46.7679C20.6674 46.8668 21.3619 46.8911 26.8994 46.8911C32.4377 46.8911 33.1305 46.8668 35.3054 46.7679C37.4762 46.6684 38.9596 46.3248 40.257 45.8206C41.5977 45.2998 42.7337 44.6014 43.8666 43.4671C45.0009 42.3338 45.6975 41.1962 46.2201 39.8555C46.7213 38.5584 47.0655 37.0762 47.1674 34.9063C47.2651 32.7314 47.2906 32.0381 47.2906 26.5002C47.2906 20.9623 47.2651 20.2674 47.1674 18.0924C47.0655 15.9216 46.7213 14.44 46.2201 13.1436C45.6975 11.8023 45.0009 10.6647 43.8666 9.53116C42.7325 8.39703 41.5981 7.70028 40.2558 7.18012C38.9559 6.67565 37.4733 6.33187 35.3025 6.23256C33.1275 6.13367 32.435 6.10941 26.8955 6.10941H26.9018ZM25.0726 9.784C25.6156 9.78318 26.2214 9.784 26.9018 9.784C32.3463 9.784 32.9915 9.80358 35.1414 9.90125C37.1295 9.99219 38.2086 10.3244 38.9274 10.6035C39.879 10.973 40.5574 11.4148 41.2707 12.1287C41.9843 12.8424 42.426 13.522 42.7965 14.4736C43.0756 15.1914 43.4082 16.2705 43.4987 18.2585C43.5964 20.4081 43.6176 21.0537 43.6176 26.4955C43.6176 31.9374 43.5964 32.5832 43.4987 34.7325C43.4078 36.7206 43.0756 37.7997 42.7965 38.5177C42.427 39.4693 41.9843 40.1469 41.2707 40.8601C40.557 41.5738 39.8794 42.0155 38.9274 42.3851C38.2094 42.6655 37.1295 42.9969 35.1414 43.0878C32.9919 43.1855 32.3463 43.2067 26.9018 43.2067C21.4571 43.2067 20.8117 43.1855 18.6624 43.0878C16.6743 42.996 15.5952 42.6639 14.8758 42.3847C13.9244 42.0151 13.2446 41.5734 12.5309 40.8597C11.8172 40.146 11.3756 39.4681 11.0051 38.516C10.7259 37.7981 10.3933 36.719 10.3028 34.7309C10.2051 32.5813 10.1856 31.9358 10.1856 26.4904C10.1856 21.0453 10.2051 20.403 10.3028 18.2535C10.3938 16.2654 10.7259 15.1863 11.0051 14.4675C11.3747 13.5159 11.8172 12.8363 12.5311 12.1226C13.2448 11.4089 13.9244 10.9671 14.876 10.5968C15.5948 10.3164 16.6743 9.98505 18.6624 9.8937C20.5434 9.80867 21.2724 9.78318 25.0726 9.7789V9.784ZM37.7863 13.1697C36.4354 13.1697 35.3394 14.2646 35.3394 15.6157C35.3394 16.9666 36.4354 18.0626 37.7863 18.0626C39.1372 18.0626 40.2332 16.9666 40.2332 15.6157C40.2332 14.2648 39.1372 13.1688 37.7863 13.1688V13.1697ZM26.9018 16.0286C21.119 16.0286 16.4304 20.7173 16.4304 26.5002C16.4304 32.2832 21.119 36.9696 26.9018 36.9696C32.6848 36.9696 37.3718 32.2832 37.3718 26.5002C37.3718 20.7175 32.6844 16.0286 26.9014 16.0286H26.9018ZM26.9018 19.7032C30.6555 19.7032 33.6988 22.7461 33.6988 26.5002C33.6988 30.2539 30.6555 33.2972 26.9018 33.2972C23.1479 33.2972 20.105 30.2539 20.105 26.5002C20.105 22.7461 23.1479 19.7032 26.9018 19.7032Z"
                fill="white"
              />
            </g>
            <defs>
              <radialGradient
                id="paint0_radial_0_97"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(14.6657 56.6204) rotate(-90) scale(51.7341 48.1168)"
              >
                <stop stop-color="#FFDD55" />
                <stop offset="0.1" stop-color="#FFDD55" />
                <stop offset="0.5" stop-color="#FF543E" />
                <stop offset="1" stop-color="#C837AB" />
              </radialGradient>
              <radialGradient
                id="paint1_radial_0_97"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(-7.94366 4.16023) rotate(78.681) scale(23.1254 95.3237)"
              >
                <stop stop-color="#3771C8" />
                <stop offset="0.128" stop-color="#3771C8" />
                <stop offset="1" stop-color="#6600FF" stop-opacity="0" />
              </radialGradient>
              <clipPath id="clip0_0_97">
                <rect
                  width="52.2"
                  height="52.2"
                  fill="white"
                  transform="translate(0.800049 0.399994)"
                />
              </clipPath>
            </defs>
          </svg>

          <div className=" flex items-center text-xl text-black font-outfit  font-semibold">
            AI Instagram Bio Generator{" "}
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.77765 5.56119C3.77765 4.81199 4.07527 4.09347 4.60503 3.56371C5.13479 3.03395 5.85331 2.73633 6.60251 2.73633H16.0187C16.7679 2.73633 17.4864 3.03395 18.0162 3.56371C18.5459 4.09347 18.8436 4.81199 18.8436 5.56119V20.6535C18.8436 21.8022 17.5441 22.4708 16.61 21.8032L11.3106 18.0179L6.01117 21.8032C5.07614 22.4717 3.77765 21.8032 3.77765 20.6544V5.56119ZM6.60251 4.61957C6.35277 4.61957 6.11327 4.71877 5.93668 4.89536C5.76009 5.07195 5.66089 5.31145 5.66089 5.56119V19.7392L10.4895 16.29C10.7291 16.1188 11.0162 16.0268 11.3106 16.0268C11.605 16.0268 11.8921 16.1188 12.1317 16.29L16.9603 19.7392V5.56119C16.9603 5.31145 16.8611 5.07195 16.6845 4.89536C16.5079 4.71877 16.2684 4.61957 16.0187 4.61957H6.60251Z"
                  fill="#1E1E1E"
                />
              </svg>
            </span>
          </button>
        </div>
      </div><div className="flex flex-col gap-5 px-3 py-4 text-gray-700 shadow-xl rounded-xl  max-w-80 max-h-[227px] bg-white  w-full">
        <div className="flex flex-row gap-8  justify-center items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="51"
            height="57"
            viewBox="0 0 51 57"
            fill="none"
          >
            <g clip-path="url(#clip0_0_114)">
              <path
                d="M37.3547 20.5241C41.0028 23.1471 45.4719 24.6904 50.2987 24.6904V15.3483C49.3851 15.3485 48.4741 15.2526 47.5803 15.0621V22.4157C42.7539 22.4157 38.2854 20.8726 34.6366 18.2498V37.3145C34.6366 46.8518 26.9499 54.5826 17.4686 54.5826C13.9309 54.5826 10.6426 53.5069 7.91118 51.6618C11.0288 54.8682 15.3764 56.8571 20.1862 56.8571C29.6682 56.8571 37.3551 49.1263 37.3551 39.5887V20.5241H37.3547ZM40.7082 11.0991C38.8438 9.05041 37.6196 6.40286 37.3547 3.47581V2.27429H34.7788C35.4272 5.99443 37.6391 9.17267 40.7082 11.0991ZM13.9081 44.3434C12.8664 42.9698 12.3034 41.2892 12.3059 39.5613C12.3059 35.1995 15.8217 31.6627 20.1594 31.6627C20.9677 31.6623 21.7712 31.7871 22.5416 32.0328V22.4818C21.6413 22.3577 20.7327 22.3049 19.8245 22.3243V29.7583C19.0536 29.5124 18.2497 29.3877 17.4411 29.3884C13.1036 29.3884 9.58794 32.9248 9.58794 37.2872C9.58794 40.3719 11.3452 43.0425 13.9081 44.3434Z"
                fill="#FF004F"
              />
              <path
                d="M34.6366 18.2496C38.2856 20.8724 42.7538 22.4155 47.5803 22.4155V15.0619C44.8862 14.4847 42.5012 13.0687 40.7081 11.0991C37.6387 9.17247 35.4272 5.99423 34.7788 2.27429H28.0126V39.5883C27.9971 43.9383 24.4874 47.4606 20.159 47.4606C17.6086 47.4606 15.3426 46.2378 13.9077 44.3432C11.3452 43.0425 9.58775 40.3717 9.58775 37.2874C9.58775 32.9254 13.1034 29.3886 17.4409 29.3886C18.2719 29.3886 19.0729 29.5187 19.8243 29.7585V22.3245C10.5094 22.5181 3.01822 30.1734 3.01822 39.5885C3.01822 44.2884 4.88365 48.5491 7.91138 51.6622C10.6428 53.5069 13.9309 54.583 17.4688 54.583C26.9503 54.583 34.6368 46.8516 34.6368 37.3145L34.6366 18.2496Z"
                fill="black"
              />
              <path
                d="M47.5803 15.0618V13.0738C45.1508 13.0775 42.7693 12.3932 40.7081 11.0991C42.5327 13.1083 44.9353 14.4938 47.5803 15.0622M34.7786 2.2741C34.7168 1.91866 34.6693 1.56084 34.6364 1.20152V0H25.2938V37.3144C25.279 41.6641 21.7692 45.1863 17.4407 45.1863C16.2136 45.1881 15.0033 44.8994 13.9075 44.3436C15.3424 46.2378 17.6084 47.4604 20.1588 47.4604C24.487 47.4604 27.9971 43.9385 28.0124 39.5885V2.2743L34.7786 2.2741ZM19.8247 22.3243V20.2077C19.044 20.1003 18.2569 20.0466 17.469 20.0469C7.98657 20.0469 0.300049 27.7781 0.300049 37.3144C0.300049 43.2933 3.32095 48.5624 7.91157 51.6619C4.88384 48.5489 3.01841 44.288 3.01841 39.5883C3.01841 30.1734 10.5094 22.5179 19.8247 22.3243Z"
                fill="#00F2EA"
              />
            </g>
            <defs>
              <clipPath id="clip0_0_114">
                <rect
                  width="50"
                  height="57"
                  fill="white"
                  transform="translate(0.300049)"
                />
              </clipPath>
            </defs>
          </svg>

          <div className=" flex items-center text-xl text-black font-outfit  font-semibold">
            AI TikTok Bio Generator{" "}
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.77765 5.56119C3.77765 4.81199 4.07527 4.09347 4.60503 3.56371C5.13479 3.03395 5.85331 2.73633 6.60251 2.73633H16.0187C16.7679 2.73633 17.4864 3.03395 18.0162 3.56371C18.5459 4.09347 18.8436 4.81199 18.8436 5.56119V20.6535C18.8436 21.8022 17.5441 22.4708 16.61 21.8032L11.3106 18.0179L6.01117 21.8032C5.07614 22.4717 3.77765 21.8032 3.77765 20.6544V5.56119ZM6.60251 4.61957C6.35277 4.61957 6.11327 4.71877 5.93668 4.89536C5.76009 5.07195 5.66089 5.31145 5.66089 5.56119V19.7392L10.4895 16.29C10.7291 16.1188 11.0162 16.0268 11.3106 16.0268C11.605 16.0268 11.8921 16.1188 12.1317 16.29L16.9603 19.7392V5.56119C16.9603 5.31145 16.8611 5.07195 16.6845 4.89536C16.5079 4.71877 16.2684 4.61957 16.0187 4.61957H6.60251Z"
                  fill="#1E1E1E"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      </div>
                            <div className="w-[528px] h-[124px] flex shrink-0 flex-col">
                                <div className="w-[79px] h-[28px] flex shrink-0 text-black font-Outfit text-xl font-semibold leading-normal">Credits</div>
                                <div> </div>
                                <div className="w-[93px] h-[28px] flex shrink-0 text-black font-Outfit text-base font-medium leading-normal ">22 of 30 left</div>
                            </div>

                            <div className=" flex flex-row justify-start w-[528px] h-[55px] flex shrink-0 rounded-md bg-white shadow-md ">
                                <div className="w-[34px] h-[34px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 34 34" fill="none" className="text-red-500">
                                <path d="M7.08333 29.75C6.30417 29.75 5.63739 29.4728 5.083 28.9184C4.52861 28.364 4.25094 27.6968 4.25 26.9167V7.08333C4.25 6.30417 4.52767 5.63739 5.083 5.083C5.63833 4.52861 6.30511 4.25094 7.08333 4.25H17V7.08333H7.08333V26.9167H17V29.75H7.08333ZM22.6667 24.0833L20.7188 22.0292L24.3312 18.4167H12.75V15.5833H24.3312L20.7188 11.9708L22.6667 9.91667L29.75 17L22.6667 24.0833Z" fill="currentColor"/>
                                </svg>
                                </div>
                                <div className="text-red-500 font-Outfit text-xl font-normal leading-normal">Logout</div>
                            </div>
                        </div>
                    </div>
                    </div>
                  </div>
                  </div>
                  

    );
};

export default Profile;