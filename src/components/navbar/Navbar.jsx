import React from "react";
import { Link } from "react-router";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineContactPhone } from "react-icons/md";
import { GoFileMedia } from "react-icons/go";
import { FaUserGraduate, FaProjectDiagram } from "react-icons/fa";
import { RiUser3Line } from "react-icons/ri";

const navLinks = [
  { to: "/", label: "Home", icon: <IoHomeOutline className="text-xl" /> },
  { to: "#about", label: "About", icon: <RiUser3Line className="text-xl" /> },
  {
    to: "#skills",
    label: "Skills",
    icon: <FaUserGraduate className="text-xl" />,
  },
  {
    to: "#projects",
    label: "Projects",
    icon: <FaProjectDiagram className="text-xl" />,
  },
  {
    to: "#education",
    label: "Education",
    icon: <FaUserGraduate className="text-xl" />,
  },
  {
    to: "#contact",
    label: "Contact",
    icon: <MdOutlineContactPhone className="text-xl" />,
  },
  { to: "#resume", label: "Resume", icon: <GoFileMedia className="text-xl" /> },
];

const Navbar = () => {
  return (
    <nav className="fixed shadow-2xl border border-[#00DFD8] top-4 left-1/2 transform -translate-x-1/2 z-50 px-0 bg-gradient-to-br from-[#03363D] via-[#0F172A] to-[#007CF0] text-white w-[98vw] max-w-[98vw] md:max-w-[900px] rounded-2xl flex items-center justify-center md:px-4 md:py-4 lg:py-2  overflow-x-auto">
      {/* Mobile Nav */}
      <div className="md:hidden flex justify-center items-center gap-x-1 py-3 w-full overflow-x-auto">
        {navLinks.map((link, idx) => (
          <a
            key={link.label}
            href={link.to}
            className="flex flex-col items-center px-2 py-1 rounded-full hover:bg-[#00DFD8] transition text-xs font-semibold whitespace-nowrap"
          >
            {link.icon}
            <span className="mt-1">{link.label}</span>
          </a>
        ))}
      </div>
      {/* Desktop Nav */}
      <div className="hidden md:flex justify-center items-center gap-x-6 lg:gap-x-12 py-2 w-full">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            className="flex items-center gap-2 hover:text-[#00DFD8] transition-colors font-semibold whitespace-nowrap"
            to={link.to}
          >
            {link.icon} {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
