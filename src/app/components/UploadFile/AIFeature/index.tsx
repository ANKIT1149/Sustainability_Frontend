import Link from "next/link";
import React from "react";

const Aifeature = () => {
  return (
    <div className="w-[100%] bg-slate-200 h-[60vh] mt-5">
      <h1 className="text-red-700 mt-10  p-2 text-3xl font-serif font-bold max-w-[300px]  shadow-inner shadow-black  rounded-lg">
        Our AI Chatbot
      </h1>
      <div className="flex justify-center items-center">
        <div className="w-[80%] h-[40vh] ai_section mt-5 flex justify-between items-center">
          <div className="overflow-hidden p-5">
            <h2 className="text-3xl font-serif font-semibold max-w-[800px] italic">
              <span className="text-red-900 text-3xl">
                Introducing eCOSCAN AI:
              </span>{" "}
              <br /> Revolutionizing Waste Management with AI
            </h2>
            <p className="max-w-4xl mt-4">
              In a world increasingly aware of environmental challenges,
              managing waste effectively has never been more critical. Enter
              eCOSCAN, a groundbreaking solution that leverages Artificial
              Intelligence (AI) to transform the way we handle waste. With just
              a simple image upload, eCOSCAN analyzes the material type—whether
              plastic, paper, metal, or organic—and provides clear, actionable
              recycling instructions.
            </p>
          </div>
          <div className="mr-16 button_ai">
            <Link
              href="/ai_feature"
              className=" hover:bg-transparent hover:text-black z-[10] font-serif font-bold text-2xl border-2 w-[500px] p-2 rounded-xl bg-red-900 border-red-900"
            >
              Chat With AI
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aifeature;
