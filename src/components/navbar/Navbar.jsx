import React, { useState, useEffect } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineContactPhone } from "react-icons/md";
import { GoFileMedia } from "react-icons/go";
import { FaUserGraduate, FaProjectDiagram } from "react-icons/fa";
import { RiUser3Line } from "react-icons/ri";

const navLinks = [
  { to: "home", label: "Home", icon: <IoHomeOutline className="text-xl" /> },
  { to: "about", label: "About", icon: <RiUser3Line className="text-xl" /> },
  {
    to: "skills",
    label: "Skills",
    icon: <FaUserGraduate className="text-xl" />,
  },
  {
    to: "projects",
    label: "Projects",
    icon: <FaProjectDiagram className="text-xl" />,
  },
  {
    to: "education",
    label: "Education",
    icon: <FaUserGraduate className="text-xl" />,
  },
  {
    to: "contact",
    label: "Contact",
    icon: <MdOutlineContactPhone className="text-xl" />,
  },
];

const Navbar = () => {
  const [active, setActive] = useState("home");

  // Smooth scroll to section
  const handleScroll = (id) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Update active nav on scroll
  useEffect(() => {
    const handleScrollActive = () => {
      const offsets = navLinks.map((link) => {
        const el = document.getElementById(link.to);
        if (!el) return { id: link.to, offset: 0 };
        return { id: link.to, offset: el.getBoundingClientRect().top };
      });
      const current = offsets.find(
        (o) => o.offset > 0 && o.offset < window.innerHeight / 2
      );
      if (current) setActive(current.id);
      else if (window.scrollY < 100) setActive("home");
    };
    window.addEventListener("scroll", handleScrollActive);
    return () => window.removeEventListener("scroll", handleScrollActive);
  }, []);

  return (
    <nav className="fixed shadow-2xl border border-[#00DFD8] top-4 left-1/2 transform -translate-x-1/2 z-50 px-0 bg-gradient-to-br from-[#03363D] via-[#0F172A] to-[#007CF0] text-white w-[98vw] max-w-[98vw] md:max-w-[900px] rounded-2xl flex items-center justify-center md:px-4 md:py-4 lg:py-2  overflow-x-auto">
      {/* Mobile Nav */}
      <div className="md:hidden flex justify-center items-center gap-x-1 py-3 w-full overflow-x-auto">
        {navLinks.map((link) => (
          <button
            key={link.label}
            onClick={() => handleScroll(link.to)}
            className={`flex flex-col items-center px-2 py-1 rounded-full transition text-xs font-semibold whitespace-nowrap ${
              active === link.to
                ? "text-[#00DFD8]"
                : "hover:bg-[#00DFD8] hover:text-[#0F172A]"
            }`}
            style={{
              background: "transparent",
              fontWeight: active === link.to ? "bold" : "normal",
            }}
          >
            {link.icon}
            <span className="mt-1">{link.label}</span>
          </button>
        ))}
        {/* Resume Download */}
        <a
          href="https://drive.google.com/file/d/1S7Y2aFB7TqDHMIm-KID9kXOW2RB8GiwO/view?usp=sharing"
          // download
          className="flex flex-col items-center px-2 py-1 rounded-full hover:bg-[#00DFD8] transition text-xs font-semibold whitespace-nowrap"
        >
          <GoFileMedia className="text-xl" />
          <span className="mt-1">Resume</span>
        </a>
      </div>
      {/* Desktop Nav */}
      <div className="hidden md:flex justify-center items-center gap-x-0 lg:gap-x-6 py-1 w-full">
        {navLinks.map((link) => (
          <button
            key={link.label}
            onClick={() => handleScroll(link.to)}
            className={`flex items-center gap-2 transition-colors font-semibold whitespace-nowrap px-3 py-1 rounded-full ${
              active === link.to ? "text-[#00DFD8]" : "hover:text-[#00DFD8]"
            }`}
            style={{
              background: "transparent",
              fontWeight: active === link.to ? "bold" : "normal",
              border: "none",
            }}
          >
            {link.icon} {link.label}
          </button>
        ))}
        {/* Resume Download */}
        <a
          href="https://drive.google.com/file/d/1S7Y2aFB7TqDHMIm-KID9kXOW2RB8GiwO/view?usp=sharing"
          download
          className="flex items-center gap-2 px-3 py-1 rounded-full hover:bg-[#00DFD8] hover:text-[#0F172A] transition-colors font-semibold whitespace-nowrap border-2 border-[#00DFD8]"
        >
          <GoFileMedia className="text-xl" /> Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
