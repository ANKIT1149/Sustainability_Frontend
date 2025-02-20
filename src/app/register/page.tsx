"use client"
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";
import "../../app/globals.css"

const Registeration_Page = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const router = useRouter();

  // signup funcation
  const handleRegister = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const response = await axios.post("http://127.0.0.1:8000/register", user);

      if (response.status === 200) {
        toast.success("User registered successfully.PLease verify your email to log in");
        localStorage.setItem("email", user.email);

        setLoading(false);
        setError(false);

        setTimeout(() => {
          router.push("/verify_email");
        }, 4000);
      }

      if (response.status === 400) {
        setLoading(false);
        setError(true);
        toast.error("User exsist in databse");
      }

      setLoading(false);
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center register_bg h-screen overflow-hidden">
      <form
        className="border-2 w-[400px] rounded-3xl h-[550px] border-black bg-black text-white flex justify-center items-center flex-col"
        onSubmit={handleRegister}
      >
        <h1 className="text-4xl font-serif font-bold border-b-4 border-b-red-900 mb-4">
          Register
        </h1>
        <div className="mx-auto mb-8 flex flex-col">
          <label htmlFor="username" className="mb-2 font-serif italic text-2xl">
            Username
          </label>
          <input
            type="text"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            name="username"
            id="username"
            placeholder="Enter your Username"
            className="w-[300px] p-2 outline-none border-2 border-gray-800 bg-gray-800 rounded-2xl font-serif font-semibold hover:border-red-900 hover:bg-transparent "
            required
          />
        </div>
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
        <div className="mx-auto mb-8 flex flex-col">
          <label htmlFor="password" className="mb-2 font-serif italic text-2xl">
            Password
          </label>
          <input
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            name="email"
            id="email"
            className="w-[300px] p-2 outline-none border-2 border-gray-800 bg-gray-800 rounded-2xl font-serif font-semibold hover:border-red-900 hover:bg-transparent "
            placeholder="Enter your Password"
            required
          />
        </div>
        <button className="mt-2 rounded-xl p-3 text-lg w-[300px]">
          {loading ? "Registering User...." : "Register"}
        </button>
        <div className="mt-4">
          <h3 className="relative ml-16 font-serif font-semibold">
            Already have an Account?{" "}
            <Link
              href="/login"
              className="text-red-700 border-b-2 border-b-zinc-300 text-xl"
            >
              Login
            </Link>
          </h3>
        </div>
      </form>
      {error && toast.error("Registration failed")}
    </div>
  );
};

export default Registeration_Page;
