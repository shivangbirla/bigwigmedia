// AboutUs.tsx

import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white dark:bg-[#1E1E1E]">
      <Nav />
      <div className="p-10 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4">
          Welcome to BigWigMedia.ai – your go-to hub for comprehensive AI
          solutions. We offer a range of cutting-edge tools designed to elevate
          efficiency and productivity across industries. At BigWigMedia.ai,
          we're committed to simplifying your AI integration journey, ensuring
          you stay ahead in the rapidly evolving digital landscape. Join us in
          transforming possibilities into realities.
        </p>
        <p className="text-lg">
          At BigWigMedia.ai, we're committed to simplifying your AI integration
          journey, ensuring you stay ahead in the rapidly evolving digital
          landscape. Join us in transforming possibilities into realities.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
