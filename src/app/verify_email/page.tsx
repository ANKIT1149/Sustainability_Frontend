"use client"
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

const VerifyEmail_Page = () => {
  const [verify, setVerify] = useState({
    email: "",
    code: "",
  });
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const fetchEmail = localStorage.getItem("email");
    if (fetchEmail) {
      setVerify((prev) => ({ ...prev, email: fetchEmail }));
    }
  }, []);

  const handleVerification = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/verify",
        verify
      );
      if (response.status === 200) {
        setLoading(false);
        setVerified(true);
        toast.success("Email Verified Successfully");
        localStorage.removeItem("email");
        setTimeout(() => {
          return router.push("/upload");
        }, 4000);
      }

      if (response.status === 400) {
        setLoading(false);
        setVerified(false);
        toast.error("OTP Expires PLease Register Again");
        return;
      }

      if (response.status === 404) {
        setLoading(false);
        setVerified(false);
        toast.error("OTP Code Does not match. PLease Try Again");
        return;
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Verification failed",
      });
      setLoading(false);
      setVerified(false);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen overflow-hidden mt-10">
      <form
        onSubmit={handleVerification}
        className="border-2 w-[400px] rounded-3xl h-auto border-black bg-black text-white flex justify-center items-center flex-col"
      >
        <h1 className="text-4xl mt-4 font-serif font-bold border-b-4 border-b-red-900 mb-10">
          Verify OTP
        </h1>
        <div className="mx-auto mb-8 flex flex-col">
          <label htmlFor="email" className="mb-2 font-serif italic text-2xl">
            Email
          </label>
          <input
            type="email"
            value={verify.email}
            onChange={(e) => setVerify({ ...verify, email: e.target.value })}
            disabled
            name="email"
            id="email"
            placeholder="Enter your email address"
            className="w-[300px] p-2 outline-none border-2 border-gray-800 bg-gray-800 rounded-2xl font-serif font-semibold hover:border-red-900 hover:bg-transparent "
            required
          />
        </div>

        <div className="mx-auto mb-8 flex flex-col">
          <label htmlFor="email" className="mb-2 font-serif italic text-2xl">
            OTP
          </label>
          <input
            type="text"
            value={verify.code}
            onChange={(e) => setVerify({ ...verify, code: e.target.value })}
            maxLength={6}
            className="w-[300px] p-2 outline-none border-2 border-gray-800 bg-gray-800 rounded-2xl font-serif font-semibold hover:border-red-900 hover:bg-transparent "
            placeholder="Enter OTP"
          />
        </div>
        <button className="mt-4 mb-4 rounded-xl p-3 text-lg w-[300px]">
          {loading ? "Verifying Code ...." : "Verify Code"}
        </button>
      </form>
    </div>
  );
};

export default VerifyEmail_Page;
