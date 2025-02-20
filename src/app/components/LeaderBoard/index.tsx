"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../globals.css"
import Image from "next/image";

import ecopoints from "../../../assests/image5.webp";

interface Userdetail  {
    username: string;
    ecopoints: string
}
const LeaderBoardComponent = () => {
  const [response, setResponse] = useState<Userdetail[]>([]);

  useEffect(() => {
    const leaderBoardData = async () => {
      try {
        const token = localStorage.getItem("token");
        const data = await axios.get("http://127.0.0.1:8000/leaderboard_data", {
          headers: { Authorization: `Bearer ${token}` },
        });

          setResponse(data.data.leaderboard)
          console.log(data.data)
      } catch (error) {
        console.log(error);
      }
    };

    leaderBoardData();
  }, []);
  return (
    <div className="flex justify-center items-center flex-col gap-10 w-[50%] h-[auto] mt-[70px] mx-auto bg-red-900 rounded-3xl border-2 border-red-900">
      <h1 className="text-4xl mt-8 font-serif font-semibold uppercase italic border-b-2 border-b-blue-700">
        LeaderBoard
      </h1>
      <div className="flex justify-between items-center w-[80%] mt-5">
        <h1 className="text-3xl font-serif font-semibold italic border-b-2 border-b-green-800">
          Username
        </h1>
        <h1 className="text-3xl font-serif font-semibold italic border-b-2 border-b-green-800">
          Ecopoints
        </h1>
      </div>
      <div className="w-[80%] flex justify-center items-center flex-col mb-10">
        {response.map((item, index) => (
          <div
            key={index}
            className="w-[600px] h-auto p-4 leader_bg flex justify-between mt-8 items-center rounded-3xl hover:shadow-inner hover:shadow-gray-500 hover:border-2 border-cyan-900"
          >
            <h1 className="font-serif font-bold text-2xl text-black italic">{item.username}</h1>
            <div className="flex justify-center items-center gap-5">
              <h3 className="font-serif text-4xl text-stone-300">{item.ecopoints}</h3>
              <Image
                src={ecopoints}
                alt="Ecopoints"
                width="60"
                height="50"
                className="rounded-full animate-bounce hover:animate-pulse"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderBoardComponent;
