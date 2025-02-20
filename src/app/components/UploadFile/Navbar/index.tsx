"use client"
import Link from "next/link";
import React, { useEffect } from "react";
import "../../../globals.css";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("token")
    const expiryTime = localStorage.getItem("expiryTime")
    
    const checkExpiry = () => {
      if (expiryTime && Date.now() > Number(expiryTime)) {
        localStorage.removeItem("token")
        localStorage.removeItem("expiryTime")
      }

      if (!token || !expiryTime) {
        return router.push("/login")
      }
    }
    
    checkExpiry()
    const interval = setInterval(checkExpiry, 5000)
    return () => clearInterval(interval)

  }, [])
  return (
    <div className="flex justify-center items-center w-[100%] h-auto p-3 border-2 rounded-3xl">
      <nav className="navbar z-[2] shadow-inner shadow-black">
        <Link
          href="#"
          className="text-[24px] font-bold text-white decoration-none"
        >
          eCOSCAN
        </Link>
        <ul className="flex list-none gap-[20px] navbar-menu">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/upload">Upload</Link>
          </li>
          <li>
            <Link href="/contact_us">Contact Us</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/report">Report Waste</Link>
          </li>
          <li>
            <Link href="/leaderboard">Leaderboard</Link>
          </li>
        </ul>
        <div className="navbar-toggle">&#9776;</div>
      </nav>
    </div>
  );
};

export default Navbar;
