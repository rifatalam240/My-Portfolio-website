import React from "react";
import { FaEnvelope, FaGithub, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-16">
      <div className="max-w-6xl mx-auto px-4 py-6 bg-gradient-to-br from-[#03363D] via-[#0F172A] to-[#007CF0] rounded-t-2xl rounded-b-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between animate-fade-in">
        <p className="text-gray-300 text-center md:text-left text-sm">
          &copy; {new Date().getFullYear()} Muhammad Rifat. All rights reserved.
        </p>
        <div className="flex gap-6 mt-3 md:mt-0">
          <a
            // href="mailto:rifatalam240@gmail.com"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rifat@gmail.com&su=Hello&body=I want to contact you
  "
            className="flex items-center gap-2 text-[#00DFD8] hover:text-white transition-colors duration-200 font-semibold"
          >
            <FaEnvelope className="text-[#EA4335] text-lg" />
            Email
          </a>

          <a
            href="https://github.com/rifatalam240"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#00DFD8] hover:text-white transition-colors duration-200 font-semibold"
          >
            <FaGithub className="text-black dark:text-white text-lg" />
            GitHub
          </a>
          <a
            href="https://wa.me/8801819524477"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#00DFD8] hover:text-white transition-colors duration-200 font-semibold"
          >
            <FaWhatsapp className="text-[#25D366] text-lg" />
            WhatsApp
          </a>
        </div>
      </div>
      <style>
        {`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in {
          animation: fade-in 0.7s cubic-bezier(.4,0,.2,1) both;
        }
        `}
      </style>
    </footer>
  );
};

export default Footer;
