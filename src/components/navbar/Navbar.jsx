import React from "react";
import { Link } from "react-router";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineContactPhone } from "react-icons/md";
import { GoFileMedia } from "react-icons/go";

const Navbar = () => {
  return (
    <div className="fixed shadow-2xl border-1 border-gray-50 top-4 left-1/2 transform -translate-x-1/2 z-50 bg-[#111827] text-white lg:w-[900px] md:w-[600px] rounded-4xl md:h-[60px] md:flex md:items-center md:justify-center px-4">


      <div className="md:hidden flex justify-center items-center gap-x-10   py-4">
        <button className="px-2 py-1 bg-green-200 rounded-[20px]">
          <IoHomeOutline />
        </button>
        <button className="px-2 py-1 bg-white-200 rounded-[20px]">
          <IoHomeOutline />
        </button>
        <button className="px-2 py-1 bg-green-200 rounded-[20px]">
          <IoHomeOutline />
        </button>
        <button className="px-2 py-1 bg-green-200 rounded-[20px]">
          <GoFileMedia />
        </button>
        <button className="px-2 py-1 bg-green-200 rounded-[20px]">
          <MdOutlineContactPhone />
        </button>
      </div>
      <div className="hidden md:flex  justify-center items-center lg:gap-x-20 md:gap-x-10 py-2">
        {" "}
        <Link className="flex justify-center items-center gap-3">
          <IoHomeOutline /> Home
        </Link>{" "}
        <Link className="flex justify-center items-center gap-3">
          <IoHomeOutline /> Skills
        </Link>{" "}
        <Link className="flex justify-center items-center gap-3">
          <IoHomeOutline /> Projects
        </Link>{" "}
        <Link className="flex justify-center items-center gap-3">
          <MdOutlineContactPhone /> Contact
        </Link>{" "}
        <Link className="flex justify-center items-center gap-3">
          <GoFileMedia /> Resume
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
