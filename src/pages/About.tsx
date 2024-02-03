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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          sem vitae nunc eleifend, eu gravida mi vestibulum. Nullam congue
          auctor quam a iaculis.
        </p>
        <p className="text-lg">
          Vestibulum sit amet eros viverra, suscipit massa ut, facilisis nisi.
          Cras pharetra tincidunt arcu, ac posuere sapien dignissim at.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
