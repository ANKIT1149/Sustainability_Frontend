/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "../../../globals.css";
import Button from "../../Button/Button";
import Image from "next/image";

import image from "../../../../assests/image3.webp";
import ParticleAnimation from "../../ParticleBackground/PersistentBlob";
import Navbar from "../../UploadFile/Navbar";

//@typescript-eslint/no-explicit-any
interface Button {
  scrollDown: any;
}
const Waste_Banner: React.FC<Button> = ({ scrollDown }) => {
  return (
    <div className="banner_background w-[100%] h-[100vh] overflow-hidden">
      <ParticleAnimation />
      <Navbar />
      <div className="flex items-center justify-center w-[100%] h-[100vh] gap-10">
        <div className="p-2 mr-10">
          <h1 className="text-3xl font-serif font-bold leading-normal italic text-green-900 capitalize">
            Explore Waste Reporting Technology with AI and <br />
            contribute your valuable time to keeping your <br /> surroundings clean.
          </h1>
          <p className="max-w-lg text-justify  mt-3 italic">
            Our cutting-edge AI technology is designed to make recycling
            effortless and efficient. Help us create a cleaner and greener
            environment by reporting waste in your area. Simply upload an image,
            select the waste type, and provide the location details. Your report
            helps authorities and communities take action against improper waste
            disposal.
          </p>
          <button
            onClick={scrollDown}
            className=" bg-emerald-800 mt-5 w-[300px] border-2 border-blue-800 z-[2] p-3 rounded-xl text-xl font-serif font-bold text-white text-container hover:bg-transparent transition-all"
          >
            Report Waste Location
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

export default Waste_Banner;
