import React from "react";

const EmailNewslater = () => {
  return (
    <div className="w-[100%] bg-slate-200">
      <h1 className="text-red-700 mt-10  p-2 text-3xl font-serif font-bold max-w-[300]  shadow-inner shadow-black  rounded-lg">
        NewLetter
      </h1>
      <div className="w-[90%] max-sm:w-[100%] h-auto max-sm:h-[40vh] mt-10 mx-auto newslater_section p-5 border-none outline-none rounded-xl">
        <div className="flex max-sm:flex-col justify-center items-center mt-0">
          <div className="mx-auto flex-1">
            <h1 className=" font-bold font-serif text-black capitalize text-4xl mt-3 mb-3">
              Subscribe Our NewsLetter
            </h1>
            <p className=" max-w-lg text-xl max-sm:text-justify italic  text-gray-700">
              Subscribe now to get the latest update about our technologie,
              upcoming event,ad update on our AI technology
            </p>
          </div>
          <div className=" mr-24 mt-8 max-sm:relative max-sm:right-[50px] max-sm:mt-8 flex justify-center items-center">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter Your Email"
              className="w-[500px] relative h-auto p-3 z-[5] border-cyan-800 border-2 outline-none rounded-2xl bg-transparent font-bold font-serif text-black hover:bg-cyan-800 hover:text-white"
            />
            <button className="absolute right-[190px] font-serif font-bold hover:bg-transparent hover:text-black hover:text-xl p-3 z-[10] rounded-2xl border-2 border-red-800 bg-red-800 w-[250px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailNewslater;
