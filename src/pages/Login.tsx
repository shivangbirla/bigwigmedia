import React, { useState } from "react";
import SideImg from "../assets/image 7.png";
import One from "../assets/image 5.png";
import Two from "../assets/image 6.png";
import logo from "../assets/Logo.png";
import { Button, Input, Modal, ModalContent } from "@nextui-org/react";
import {
  SignOutButton,
  SignInButton,
  SignIn,
  SignedOut,
} from "@clerk/clerk-react";
import { useAuth } from "@clerk/clerk-react";

type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { getToken, isLoaded, isSignedIn, userId } = useAuth();
  console.log("userId", userId);
  return (
    <div className="flex  gap-2 w-screen h-screen bg-black">
      <img
        src={SideImg}
        alt="sideImg"
        className=" object-cover lg:flex w-screen h-screen drop-shadow-lg"
      />
      <img
        src={One}
        alt="sideImg"
        className="absolute hidden lg:flex left-0 bottom-0 "
      />
      <img
        src={Two}
        alt="sideImg"
        className="absolute hidden lg:flex right-0 top-0"
      />
      {/* <div className="w-1/2 h-screen relative  hidden md:flex items-center justify-">
        <div className="flex absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 items-center gap-4 cursor-pointer">
          <img src={logo} alt="" />
          <span className="text-white  font-outfit text-3xl font-semibold">
            BigWigMedia.ai
          </span>
        </div>
      </div> */}
      <div className="absolute bg-white rounded-lg top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 items-center gap-4 cursor-pointer">
        <SignIn />
      </div>
    </div>
  );
};

export default Login;
