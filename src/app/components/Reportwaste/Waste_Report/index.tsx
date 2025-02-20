import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaFile, FaFileUpload } from "react-icons/fa";

import ecopoints from "../../../../assests/image5.webp";
import Image from "next/image";
import "../../../globals.css";
import { motion } from "framer-motion";

const Waste_Report = () => {
  const [report, setReport] = useState<{
    title: string;
    description: string;
    location: string;
    files: File | null;
  }>({
    title: "",
    description: "",
    location: "",
    files: null,
  });
  const [loading, setLoading] = useState(false);
  const [animateCoin, setAnimateCoin] = useState(false);
  const handlePicker = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setReport({ ...report, files: event.target.files[0] });
    }
  };

  const handleReport = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setLoading(true);
    try {
      const token = localStorage.getItem("token");

      const formdata = new FormData();

      formdata.append("description", report.description);
      formdata.append("title", report.title);
      formdata.append("location", report.location);

      if (report.files) {
        formdata.append("file", report.files);
      }

      const response = await axios.post(
        "http://127.0.0.1:8000/waste_report",
        formdata,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      report.title = "";
      report.description = "";
      report.location = "";
      report.files = null;
      setAnimateCoin(true);
      console.log(response.data);
      toast.success("Waste_report Submitted Successfully.Thanks For Contributing You earn ecopoint check in profile section");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setAnimateCoin(false);
    } finally {
      setTimeout(() => {
        setAnimateCoin(false)
      }, 5000);
    }
  };

  return (
    <div className="flex items-center justify-center h-auto aibot bg-gray-900 p-4 flex-col">
      <h5 className="text-white mt-5 p-2 text-3xl font-serif font-light  shadow-inner shadow-black capitalize  rounded-lg">
        Report Waste Problem Near You
      </h5>
      <form
        action=""
        className="w-[900px]  form h-auto border-2 mt-10 mb-10 rounded-2xl flex justify-center items-center flex-col border-gray-600 bg-gray-600"
      >
        <h3 className="text-4xl font-serif font-bold text-white italic  mt-4">
          Waste Report Form
        </h3>
        <hr className="w-[70%] bg-red-800 border-2 border-red-800 mb-8" />
        <div className="flex flex-col mt-8">
          <div className="w-[500px] h-[200px] border-2 file flex justify-center items-center flex-col rounded-xl bg-black">
            <input
              type="file"
              name="file"
              id="file"
              onChange={handlePicker}
              className="hidden"
            />
            {report.files ? (
              <div>
                <FaFile className="text-[100px]" />
              </div>
            ) : (
              <label htmlFor="file">
                <FaFileUpload className="text-[100px]" />
              </label>
            )}
            {report.files ? (
              <h1 className="text-2xl mt-4 font-serif italic text-slate-200">
                {report.files.name}
              </h1>
            ) : (
              <h1 className="text-2xl mt-4 font-serif italic text-slate-200">
                Upload Your Waste Image
              </h1>
            )}
          </div>
        </div>
        <div className="flex flex-col mt-8">
          <label
            htmlFor="title"
            className="text-2xl font-serif font-semibold capitalize"
          >
            Waste_Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={report.title}
            onChange={(e) => setReport({ ...report, title: e.target.value })}
            placeholder="Enter Waste_Type or Waste_Title"
            className="w-[500px] h-auto p-3 mt-2 outline-none border-2 border-black font-serif font-bold italic text-white bg-black rounded-2xl hover:bg-transparent shadow-inner shadow-gray-400"
          />
        </div>
        <div className="flex flex-col mt-8">
          <label
            htmlFor="description"
            className="text-2xl font-serif font-semibold capitalize"
          >
            Waste Description
          </label>
          <textarea
            rows={5}
            name="description"
            id="description"
            value={report.description}
            onChange={(e) =>
              setReport({ ...report, description: e.target.value })
            }
            placeholder="Describe Briefly about waste"
            className="w-[500px] h-auto p-3 mt-2 outline-none border-2 border-black font-serif font-bold italic text-white bg-black rounded-2xl hover:bg-transparent shadow-inner shadow-gray-400"
          />
        </div>
        <div className="flex flex-col mt-8">
          <label
            htmlFor="location"
            className="text-2xl font-serif font-semibold capitalize"
          >
            waste Location
          </label>
          <input
            type="text"
            name="location"
            id="location"
            value={report.location}
            onChange={(e) => setReport({ ...report, location: e.target.value })}
            placeholder="Enter Location of waste"
            className="w-[500px] h-auto p-3 mt-2 outline-none border-2 border-black font-serif font-bold italic text-white bg-black rounded-2xl hover:bg-transparent shadow-inner shadow-gray-400"
          />
        </div>
        <button
          onClick={handleReport}
          disabled={loading === true}
          className=" bg-emerald-800 mt-10 mb-16 w-[500px] border-2 border-blue-800 z-[2] p-3 rounded-xl text-xl font-serif font-bold text-white text-container hover:bg-transparent transition-all"
        >
          {loading ? "Submitting...." : " Submit & Earn Ecopoints"}
        </button>
        {animateCoin && (
          <motion.div
            key={animateCoin}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: -100 }}
            exit={{ opacity: 0, y: -150 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="relative bottom-[100px] left-[20%] transform -translate-x-1/2 z-[50]" // Removed opacity-0
          >
            <Image
              src={ecopoints}
              alt="Ecopoints"
              width={70}
              height={50}
              className="rounded-full"
            />
          </motion.div>
        )}
      </form>
    </div>
  );
};

export default Waste_Report;
