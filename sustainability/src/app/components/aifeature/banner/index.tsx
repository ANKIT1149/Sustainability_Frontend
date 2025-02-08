/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "../../../globals.css";
import Button from "../../Button/Button";
import Image from "next/image";

import image from "../../../../assests/aipage.webp";
import ParticleAnimation from "../../ParticleBackground/PersistentBlob";
import Navbar from "../../UploadFile/Navbar";

//@typescript-eslint/no-explicit-any
interface Button {
  scrollDown: any;
}
const AiBanner: React.FC<Button> = ({ scrollDown }) => {
  return (
    <div className="banner_background w-[100%] h-[100vh] overflow-hidden">
      <ParticleAnimation />
      <Navbar />
      <div className="flex items-center justify-center w-[100%] h-[100vh] gap-10">
        <div className="p-2 mr-32">
          <h1 className="text-3xl font-serif font-bold leading-normal italic text-green-900 capitalize">
            Explore our Technology with our AI and <br />
            give your precious time to get knowledge
          </h1>
          <p className="max-w-lg text-justify  mt-3 italic">
            Our cutting-edge AI technology is designed to make recycling
            effortless and efficient. With intelligent waste identification,
            personalized eco-friendly recommendations, and real-time recycling
            center locators, we empower users to make sustainable choices with
            ease. Join us in creating a cleaner, greener future—one smart
            decision at a time!
          </p>
          <button
            onClick={scrollDown}
            className=" bg-emerald-800 mt-5 w-[300px] border-2 border-blue-800 z-[2] p-3 rounded-xl text-xl font-serif font-bold text-white text-container hover:bg-transparent transition-all"
          >
            Chat With AI
          </button>
        </div>
        <div className="ml-8 mb-5">
          <Image
            src={image}
            alt="upload_banner"
            width={500}
            height={500}
            className="rounded-xl image_css"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default AiBanner;
