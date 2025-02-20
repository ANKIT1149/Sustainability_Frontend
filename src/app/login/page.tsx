/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";

const Login_Page = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const router = useRouter();

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const response = await axios.post("http://127.0.0.1:8000/login", user);
      if (response.status === 200) {
        setLoading(false);
        setError(false);
        console.log("User login successfully");
        toast.success("User Login Successfully");
      }
      localStorage.setItem("token", response.data.access_token);
      const expiryTime = new Date().getTime() + 24 * 60 * 60 * 1000;
      localStorage.setItem("expiryTime", expiryTime.toString());
      setTimeout(() => {
        router.push("/upload");
      }, 3000);
      setLoading(false)
      setError(false)
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen overflow-hidden">
      <form className="border-2 w-[400px] rounded-3xl h-[450px] border-black bg-black text-white flex justify-center items-center flex-col">
        <h1 className="text-4xl font-serif font-bold border-b-4 border-b-red-900 mb-10">
          Login
        </h1>
        <div className="mx-auto mb-8 flex flex-col">
          <label htmlFor="email" className="mb-2 font-serif italic text-2xl">
            Email
          </label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            name="email"
            id="email"
            placeholder="Enter your email address"
            className="w-[300px] p-2 outline-none border-2 border-gray-800 bg-gray-800 rounded-2xl font-serif font-semibold hover:border-red-900 hover:bg-transparent "
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="mb-2 font-serif italic text-2xl">
            Password
          </label>
          <input
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            name="password"
            id="password"
            className="w-[300px] p-2 outline-none border-2 border-gray-800 bg-gray-800 rounded-2xl font-serif font-semibold hover:border-red-900 hover:bg-transparent "
            placeholder="Enter your Password"
            required
          />

          <button
            className="mt-8 rounded-xl p-2 bg-destructive text-destructive-foreground text-lg"
            onClick={handleLogin}
          >
            {loading ? "Login...." : "Login"}
          </button>
        </div>
        <div className="mt-5">
          <h3 className=" font-serif font-semibold">
            Do not have an Account?{" "}
            <Link
              href="/register"
              className="text-red-700 border-b-2 border-b-zinc-300 text-xl"
            >
              Register
            </Link>
          </h3>
        </div>
      </form>
    </div>
  );
};

export default Login_Page;
