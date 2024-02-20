import Nav from "@/components/Nav";
import React from "react";
import { loadStripe } from '@stripe/stripe-js';
import axios from "axios";
import { BASE_URL2 } from "@/utils/funcitons";

type Props = {};

const Plan = (props: Props) => {
  const arr = [
    { duration: "Weekly TRIAL", price: 5, creadits: "50" },
    { duration: "Monthly  PREMIUM PLAN", price: 20, creadits: "200" },
    { duration: "Yearly PREMIUM PLAN", price: 200, creadits: "2550" },
  ];

  const buyPlan = async (index:any) => {
    try {
      console.log('buy plan')
      const obj = arr[index]
      const stripe = await loadStripe(
        "pk_test_51NgPpPSIcJ4vSbovspO4fUbLjduW9tGNuZ4JbqXprlZD5DtqRWTLfedFUIBGi4l5qXj3QcQipkbOjBClKB3xQ83100tMI7cvRE"
      );
  
      const resp = await axios.post(
        `${BASE_URL2}/payment/create-checkout-session`, {
        product: {
          name: obj.creadits+" credit",
          price: obj.price,
          quantity: 1
        }
      }
      );
      stripe?.redirectToCheckout({
        sessionId: resp.data.id,
  
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Nav />
      <div className=" dark:!text-white flex flex-col min-w-screen min-h-[calc(100vh-90px)] w-full h-full justify-center items-center px-5">
        <div className="w-full h-full flex flex-row gap-3 justify-center items-center  max-w-[867px] ">
          {arr.map((ite, index) => (
            <div
              className="flex border-gradient-2 dark:bg-[#262626
] z-10 w-[298px] h-[388px] flex-col justify-between p-[23px] gap-[10px] shrink-0 border-2 "
            >
              <div className="text-black dark:text-white font-Outfit text-lg font-semibold leading-normal">
                <span className="capitalize">{ite.duration}</span> 
              </div>
              <div className="text-black dark:text-white font-Outfit text-sm font-medium leading-normal">
                <div className="w-full flex flex-col gap-3">
                  <div className="text-black dark:text-white font-Outfit text-5xl font-medium leading-normal text-center">
                    ${ite.price}
                  </div>
                  <div className="text-black dark:text-white font-Outfit text-3xl font-medium leading-normal text-center">
                    {ite.creadits} Credits
                  </div>
                </div>
              </div>
              <button className=" z-50 w-full h-[40px] inline-flex p-[2px] items-center justify-center gap-[4px] rounded-[32px] bt-gradient text-white font-Outfit text-sm font-medium leading-normal cursor-pointer" onClick={() => buyPlan(index)}>
                Buy Premium
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
