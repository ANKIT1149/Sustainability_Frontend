/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import CentreLoccation from "../UploadFile/Centre_location";
import Alternattive from "../UploadFile/GetAlternative";

type locate = {
  lat: number;
  lon: number;
} | null;

const Recyclable_centre = () => {
  const [location, setLocation] = useState<locate>(null);
  const [recyclingCentre, setRecyclingCentre] = useState(null);
  const [answerbuttonDisabled, setanswerButtonDisabled] = useState(false);
  const [answerLoading, setAnswerLoading] = useState(false);
  const [error, setError] = useState("");
  const [centre, setAnswer] = useState(1);

  const getNearestCentre = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!navigator.geolocation) {
      setError("Location not found");
      return;
    }

    setanswerButtonDisabled(true);
    setAnswerLoading(true);
    setError("");

    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      setLocation({ lat, lon });
      setAnswer(1);
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/nearest-recycling?lat=${lat}&lon=${lon}`
        );

        const data = response.data;

        setRecyclingCentre(data);
        console.log(data);
        toast.success("Recycle centre found");
        setanswerButtonDisabled(false);
        setAnswerLoading(false);
        setAnswer(2);
        return;
      } catch (error) {
        toast.error("Get recyclable center failed");
        console.log(error);
        setanswerButtonDisabled(false);
        setAnswerLoading(false);
        return;
      } finally {
        setanswerButtonDisabled(false);
        setAnswerLoading(false);
        setAnswer(2);
      }
    });
  };
  return (
    <div className="mt-10 flex justify-center items-center flex-col">
      <h5 className="text-white mt-3 p-2 text-3xl font-serif font-light  shadow-inner shadow-black capitalize  rounded-lg">
        If you Want our AI can detect nearest recyclable centre Near You
      </h5>
      <button
        className={`mt-8 text-xl z-[1] ${
          answerbuttonDisabled ? "z-[0]" : "z-[5]"
        }  hover:bg-transparent hover:text-2xl transition-all font-serif font-bold text-white border-2 rounded-lg border-green-800 bg-green-800 hover:shadow-inner hover:shadow-black p-2`}
        onClick={getNearestCentre}
      >
        {answerLoading
          ? "Finding Nearest Recycle_centre ..."
          : "Nearest Centre"}
      </button>
      <CentreLoccation recyclingCentre={recyclingCentre} centre={centre} />
      <Alternattive />
    </div>
  );
};

export default Recyclable_centre;
