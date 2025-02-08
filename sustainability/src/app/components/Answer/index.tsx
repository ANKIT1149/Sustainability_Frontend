/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import Recyclable_centre from "../Recyclable_Centre";

interface Answer {
  answerLoading: boolean;
  answerbuttonDisabled: boolean;
  upload: any;
  getAnswer: any;
  answer: any;
  message: string;
  step: number;
}

const AnswerWaste: React.FC<Answer> = ({
  upload,
  step,
  answer,
  getAnswer,
  answerLoading,
  answerbuttonDisabled,
}) => {
  const instruction = answer?.instruction;
  console.log(answer);
  return (
    <div className="flex justify-center items-center flex-col">
      <h2 className="mt-8 p-2 text-red-700 text-3xl font-serif font-bold text-center capitalize shadow-inner shadow-black italic rounded-lg">
        Want To Know How You Decompose Your Waste Material :{" "}
        {upload.data.waste_type}. <br /> ask our AI
      </h2>

      {step === 1 && (
        <button
          className={`mt-8 text-xl z-[5] ${
            answerbuttonDisabled ? "z-[0]" : "z-[5]"
          } hover:bg-transparent hover:text-2xl transition-all font-serif font-bold text-white border-2 rounded-lg border-green-800 bg-green-800 hover:shadow-inner hover:shadow-black p-2`}
          onClick={getAnswer}
        >
          {answerLoading ? "Finding Answer ..." : "Decompose Instruction"}
        </button>
      )}

      {step === 2 && instruction && (
        <div>
          <h1 className="mt-8 p-2 text-white text-2xl font-serif font-normal capitalize shadow-inner shadow-black italic rounded-lg text-left">
            Recyclable Instruction:
          </h1>
          <span className=" leading-relaxed relative  top-8 font-serif font-light text-xl text-black">
            {instruction}
          </span>
        </div>
      )}

      {step === 2 && !instruction && (
        <div>
          <h1 className="mt-8 p-2 text-white text-2xl font-serif font-normal capitalize shadow-inner shadow-black italic rounded-lg text-left">
            No instruction available yet.
          </h1>
        </div>
      )}
      <Recyclable_centre />
    </div>
  );
};

export default AnswerWaste;
