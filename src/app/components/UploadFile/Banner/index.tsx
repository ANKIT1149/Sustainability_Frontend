/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "../../../globals.css";
import Button from "../../Button/Button";
import Image from "next/image";

import image from "../../../../assests/upload.webp";
import ParticleAnimation from "../../ParticleBackground/PersistentBlob";
import Navbar from "../Navbar";

interface Button {
  scrollDown: any;
}
const BannerPage: React.FC<Button> = ({ scrollDown }) => {
  return (
    <div className="banner_background w-[100%] h-[100vh] overflow-hidden">
      <ParticleAnimation />
      <Navbar />
      <div className="flex items-center justify-center w-[100%] h-[100vh] gap-10">
        <div className="p-2 mr-32">
          <h1 className="text-3xl font-serif font-bold leading-normal italic text-green-900 capitalize">
            Wanna To Save The Nature By One Scan <br /> and contributte to this
            wonderful nature
          </h1>
          <p className="max-w-lg mt-3 italic">
            Upload an image of your waste, and let our AI analyze it instantly!
            Get accurate waste classification and expert recycling instructions
            to help you make eco-friendly choices.Give your some minutes so
            world can live for milliion years
          </p>
          <button
            onClick={scrollDown}
            className=" bg-emerald-800 mt-5 w-[300px] border-2 border-blue-800 z-[2] p-3 rounded-xl text-xl font-serif font-bold text-white text-container hover:bg-transparent transition-all"
          >
            Let&apos;s Start
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

export default BannerPage;
