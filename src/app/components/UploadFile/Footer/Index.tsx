// import React from 'react'
import { BsHeartFill } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import Logo from "../../../../assests/logo.webp";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <div className="w-[100%] h-[50vh] max-sm:h-auto mt-4 max-sm:mt-4  border-none outline-none footer_bg">
        {/* Copyright Section */}
        <div className="flex max-sm:p-5 p-5 justify-center max-sm:flex-col max-sm:gap-4 gap-8 items-center mt-8">
          <div className="mr-3 max-sm:mr-0 font-serif flex-1 ">
            <p className="flex text-base max-sm:text-xs font-bold capitalize text-gray-700">
              Copyright 2025 <BsHeartFill color="red" /> made by @Aryansh
              Estate.pvt.ltd
            </p>
          </div>
          <div className="flex justify-center items-center gap-6 mr-8 max-sm:mr-0 max-sm:gap-3">
            <div className="flex justify-center items-center z-[5] w-[40px] h-[40px] border-2 rounded-lg bg-black hover:translate-y-4 cursor-pointer hover:bg-transparent transition-all">
              <a href="www.facebook.com" target="_blank">
                {" "}
                <BsFacebook />
              </a>
            </div>
            <div className="flex justify-center items-center w-[40px] z-[5] h-[40px] border-2 rounded-lg bg-black  hover:translate-y-4 cursor-pointer hover:bg-transparent transition-all">
              <a href="www.instagram.com" target="_blank">
                <BsInstagram />
              </a>
            </div>
            <div className="flex justify-center items-center w-[40px] z-[5] h-[40px] border-2 rounded-lg bg-black hover:translate-y-4 cursor-pointer hover:bg-transparent transition-all">
              <a href="www.youtube.com" target="_blank">
                {" "}
                <BsYoutube />
              </a>
            </div>
            <div className="flex justify-center items-center w-[40px] z-[5] h-[40px] border-2 rounded-lg bg-black hover:translate-y-4 cursor-pointer hover:bg-transparent transition-all">
              <a href="www.twitter.com" target="_blank">
                {" "}
                <BsTwitter />
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="mt-4 p-0 flex justify-center items-center gap-4 max-sm:grid-cols-1">
          <div className="flex justify-center items-center flex-col">
            <Image
              src={Logo}
              alt=""
              width={230}
              height={200}
              className=" mix-blend-multiply drop-shadow-2xl shadow-slate-700 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
