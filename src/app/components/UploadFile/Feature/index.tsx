import React from "react";
import featuresData from "@/utils/feature.json";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface Feature {
  title: string;
  description: string;
  redirects: string;
  buttomtitle: string;
}

interface FeatureData {
  features: Feature[];
}

const Feature: React.FC<FeatureData> = () => {
  return (
    <div className=" w-[100%] bg-slate-200 h-auto">
      <h2 className="text-red-700 mt-10  p-2 text-3xl font-serif font-bold max-w-[500px]   shadow-inner shadow-black  rounded-lg">
        Our AI-Powered Features
      </h2>
      <div className="mt-10  grid grid-cols-3 p-3 gap-10">
        {featuresData.features.map((data) => (
          <div
            key={data.title}
            className="flex justify-center items-center flex-col"
          >
            <div className="w-[400px] h-[300px] feature_section flex justify-center items-center flex-col ">
              <h1 className="text-red-800 font-serif font-bold text-xl italic">
                {data.title}
              </h1>
              <p className="text-slate-800 p-2 text-center mt-2 font-serif font-[500] text-lg">
                {data.description}
              </p>

              <Link
                href={data.redirects}
                className="w-[300px] flex justify-center items-center h-auto p-2 border-2 border-teal-700 bg-teal-700 mx-auto text-center mt-4 rounded-2xl font-serif font-bold hover:bg-transparent hover:text-black z-[20] text-xl"
              >
                {data.buttontitle} <FaArrowRight className="ml-3 " />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
