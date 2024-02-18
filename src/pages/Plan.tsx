import Nav from "@/components/Nav";
import React from "react";

type Props = {};

const Plan = (props: Props) => {
  const arr = [
    { duration: "Weekly", price: "$5", creadits: "50" },
    { duration: "Monthly", price: "$20", creadits: "200" },
    { duration: "Yearly", price: "$200", creadits: "2550" },
  ];
  return (
    <>
      <Nav />
      <div className=" dark:!text-white flex flex-col min-w-screen min-h-[calc(100vh-90px)] w-full h-full justify-center items-center px-5">
        <div className="w-full h-full flex flex-row gap-3 justify-center items-center  max-w-[867px] ">
          {arr.map((ite, index) => (
            <div
              className=" relative  flex border-gradient-2 dark:bg-[#262626
] z-10 w-[298px] h-[388px] flex-col justify-between p-[23px] gap-[10px] shrink-0 border-2 "
            >
              <div className="text-black dark:text-white font-Outfit text-lg font-semibold leading-normal">
                <span className="capitalize">{ite.duration}</span> PREMIUIM PLAN
              </div>
              <div className="text-black dark:text-white font-Outfit text-sm font-medium leading-normal">
                <div className="w-full flex flex-col gap-3">
                  <div className="text-black dark:text-white font-Outfit text-5xl font-medium leading-normal text-center">
                    {ite.price}
                  </div>
                  <div className="text-black dark:text-white font-Outfit text-3xl font-medium leading-normal text-center">
                    {ite.creadits} Credits
                  </div>
                </div>
              </div>
              <button className="w-full h-[40px] inline-flex p-[2px] items-center justify-center gap-[4px] rounded-[32px] bt-gradient">
                <span className="text-white font-Outfit text-sm font-medium leading-normal">
                  Buy Premium
                </span>
              </button>
              <div className="absolute w-full h-full rounded-[13px]  background-gradient  -z-10 top-1 left-1"></div>
              <div className="absolute w-full h-full rounded-[13px] dark:bg-[#262626] bg-white -z-[5] top-0 left-0"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Plan;
