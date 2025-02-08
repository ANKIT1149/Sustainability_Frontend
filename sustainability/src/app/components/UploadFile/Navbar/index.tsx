import Link from "next/link";
import React from "react";
import "../../../globals.css";

const Navbar = () => {
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
        </ul>
        <div className="navbar-toggle">&#9776;</div>
      </nav>
    </div>
  );
};

export default Navbar;
