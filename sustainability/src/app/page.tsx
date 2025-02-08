"use client";
import { useState } from "react";
import Button from "./components/Button/Button";
import "./globals.css";
import ParticleAnimation from "./components/ParticleBackground/PersistentBlob";

export default function Home() {
  const [title, setTitle] = useState("AI-Powered Waste Detection");
  const fetchTitle = () => {
    if (title === "AI-Powered Waste Detection") {
      setTimeout(() => {
        setTitle("Modern AI Technology Waste Detection");
      }, 3000);
    } else if (title === "Modern AI Technology Waste Detection") {
      setTimeout(() => {
        setTitle("AI-Powered Waste Detection");
      }, 3000);
    }
  };

  fetchTitle();
  return (
    <div className=" overflow-hidden  home_page flex justify-center items-center  w-[100%] h-screen flex-col">
      <div className="overlay"></div>
      <ParticleAnimation />
      <h1 className="text-[42px] font-serif italic font-bold capitalize text-container">
        Welcome To <span className="text-green-300">{title}!</span>
      </h1>
      <h3 className="mt-4 text-white font-serif font-[900] text-2xl capitalize z-[2]">
        Detect waste materials with smart AI technology.
      </h3>
      <hr className="w-[90%] h-auto border-amber-800 rounded-2xl border-2" />
      <p className="max-w-4xl text-center mt-4 leading-relaxed font-normal font-mono z-[2]">
        Welcome to our AI-powered waste detection platform, where technology
        meets sustainability! Our advanced AI system quickly analyzes and
        identifies different types of waste materials, helping you make
        eco-friendly disposal decisions. Whether its recyclable, organic, or
        hazardous waste, our intelligent solution ensures proper categorization,
        promoting responsible waste management. Join us in creating a cleaner
        and greener future—one scan at a time!
      </p>
      <div className="flex justify-center items-center gap-10">
        <Button title="Get Started" />
        <Button title="How it Works" />
      </div>
    </div>
  );
}
