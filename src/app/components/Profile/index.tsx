"use client";
import React, { useEffect, useState } from "react";
import "../../globals.css";
import { IoIosLogOut } from "react-icons/io";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import Image from "next/image";

import ecopoints from "../../../assests/image5.webp";

interface Userdetail {
  username: string;
  email: string;
  password: string;
}

interface Points {
  ecopoints: string;
}
const ProfilePage: React.FC = () => {
  const [data, setResponse] = useState<Userdetail>({
    username: "",
    email: "",
    password: "",
  });
  const [points, setPoints] = useState<Points>();
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const userDetail = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://127.0.0.1:8000/user_Detail", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.status === 200) {
          setResponse({
            username: response.data.username || "",
            email: response.data.email || "",
            password: response.data.password || "",
          });
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const getEcoPoints = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://127.0.0.1:8000/ecopoints", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status === 200) {
          setPoints(response.data);
          console.log(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    userDetail();
    getEcoPoints();
  });

  const handleLogout = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("expiryTime");
    toast.success("User logged out successfully");
    return router.push("/login");
  };

  const handleUpdate = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    const updatedData: Partial<Userdetail> = {};

    if (data.username) updatedData.username = data.username;
    if (data.email) updatedData.email = data.email;
    if (data.password.trim()) updatedData.password = data.password;

    console.log("Sending update request:", updatedData);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.patch(
        "http://127.0.0.1:8000/update_detail",
        updatedData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.status === 200) {
        toast.success("Updated successfully");
        setLoading(false);
        setResponse(response.data.user);
        console.log(response.data.user);
        return;
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete("http://127.0.0.1:8000/delete_user", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response.data);
      toast.success("User deleted successfully");
      localStorage.removeItem("token");
      router.push("/login");
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Error deleting");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="profile-page_bg w-[100%] h-screen flex items-center justify-center flex-col">
        <div className="ml-[90px] ">
          <h1 className="text-4xl font-serif font-bold capitalize italic text-white border-b-2 border-b-red-700">
            Profile
          </h1>
          <form
            action=""
            className="border-2 mt-10 w-[400px] rounded-3xl h-[450px] border-black bg-black text-white flex justify-center items-center flex-col"
          >
            <div className="flex flex-col">
              <label
                htmlFor="username"
                className="mb-2 font-serif italic text-2xl"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                value={data.username}
                onChange={(e) =>
                  setResponse({ ...data, username: e.target.value })
                }
                id="username"
                placeholder="Enter your Username"
                className="w-[300px] p-2 outline-none border-2 border-gray-800 bg-gray-800 rounded-2xl font-serif font-semibold hover:border-red-900 hover:bg-transparent "
                required
              />
            </div>
            <div className="flex flex-col mt-4">
              <label
                htmlFor="email"
                className="mb-2 font-serif italic text-2xl"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={(e) =>
                  setResponse({ ...data, email: e.target.value })
                }
                id="email"
                placeholder="Enter your email address"
                className="w-[300px] p-2 outline-none border-2 border-gray-800 bg-gray-800 rounded-2xl font-serif font-semibold hover:border-red-900 hover:bg-transparent "
                required
              />
            </div>
            <div className="flex flex-col mt-4">
              <label
                htmlFor="password"
                className="mb-2 font-serif italic text-2xl"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={data.password}
                onChange={(e) =>
                  setResponse({ ...data, password: e.target.value })
                }
                className="w-[300px] p-2 outline-none border-2 border-gray-800 bg-gray-800 rounded-2xl font-serif font-semibold hover:border-red-900 hover:bg-transparent "
                placeholder="Enter your Password"
                required
              />
            </div>

            <button
              onClick={handleUpdate}
              className="mt-8 rounded-xl p-2 bg-destructive text-destructive-foreground text-lg w-[300px]"
            >
              {loading ? "Updating..." : "Update Detail"}
            </button>
          </form>
        </div>
        <div className="absolute top-[100px] right-7 w-[70px] cursor-pointer hover:bg-transparent flex justify-center items-center h-[70px] border-2 bg-black rounded-full">
          <IoIosLogOut fontSize={50} title="Logout" onClick={handleLogout} />
        </div>
        <div
          className="flex justify-center gap-10 items-center w-[300px] p-3 absolute hover:bg-transparent transition-all cursor-pointer
               top-[100px] left-6 border-2 rounded-2xl bg-amber-800 border-amber-700"
        >
          <Image
            src={ecopoints}
            alt="Ecopoints"
            width="70"
            height="50"
            className="rounded-full animate-bounce hover:animate-pulse"
          />
          <h1 className="text-4xl font-serif font-bold text-green-700">
            {points?.ecopoints ? points.ecopoints : "0"}
          </h1>
        </div>
        <div className="absolute bottom-[30px] w-[300px] right-8">
          <button
            disabled={loading === true}
            className="w-[400px] font-serif font-bold text-3xl text-red-900"
            onClick={handleDelete}
          >
            {loading ? "Deleting Account ..." : "Delete Account"}
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
