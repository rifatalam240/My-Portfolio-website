import React from "react";
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <div
      id="home"
      className="bg-[#0F172A] lg:h-[90vh] md:h-[90vh]  px-4 md:px-16 flex flex-col md:flex-row sm:py-6 md:py-20 justify-center items-center rounded-2xl pb-6"
    >
      <div className="md:w-1/2 space-y-4 pt-24 md:pt-0 md:pb-40 lg:pb-0 flex flex-col justify-center">
        <p className="lg:text-5xl md:text-4xl text-3xl lg:pt-24 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00DFD8] to-[#007CF0]">
          Hey, I'm Muhammad Rifat
        </p>
        <p className="text-gray-400 text-lg font-semibold">
          I am a passionate Frontend Web Developer who loves creating beautiful,
          efficient, and user-friendly websites.
        </p>
        <p className="text-gray-400 text-lg font-semibold mt-2">
          I transform ideas into pixel-perfect experiences using React, Next.js,
          and TailwindCSS.
        </p>
        {/* Social Links and Resume Button */}
        <div className="flex flex-col gap-4 mt-6">
          <div className="flex gap-4 justify-start">
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-[#00DFD8] bg-[#0F172A] p-3 shadow-lg transition hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-[#0A66C2] text-2xl" />
            </a>
            <a
              href="https://www.facebook.com/muhammad.rifat.594290"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-[#00DFD8] bg-[#0F172A] p-3 shadow-lg transition hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebook className="text-[#1877F3] text-2xl" />
            </a>
            <a
              href="https://x.com/JaberChowdhur14https://www.linkedin.com/in/md-jaber-hossain-chowdhury-543335252/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-[#00DFD8] bg-[#0F172A] p-3 shadow-lg transition hover:scale-110"
              aria-label="Twitter"
            >
              <FaTwitter className="text-[#1DA1F2] text-2xl" />
            </a>
          </div>
          <div className="lg:flex space-y-4  gap-4">
            <div className="flex gap-4">
              <a
                href="/resume.pdf"
                download
                className="btn shadow-xl bg-gradient-to-r from-[#007CF0] to-[#00DFD8] font-bold text-white rounded-full px-6 py-3 transition hover:scale-105"
              >
                Download Resume
              </a>
              <a
                href="#projects"
                className="btn bg-[#111827] text-[#007CF0] border border-[#00DFD8] font-bold rounded-full px-6 py-3 transition hover:scale-105"
              >
                View Projects
              </a>
            </div>
            <a
              href="#contact"
              className="btn bg-[#0F172A] text-[#00DFD8] border border-[#00DFD8] font-bold rounded-full px-6 py-3 transition hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 pt-10 flex justify-center items-center md:pb-24 lg:pl-0 lg:pb-0 md:pl-16 lg:pt-24">
        <img
          className="lg:w-2/5 w-[200px] mb-6 md:w-[250px] rounded-full border-2 border-[#00DFD8] shadow-lg"
          src="https://i.postimg.cc/kMFbD9sS/3-D-Freelancer-Character-Preparing-Online-Portfolio-Displaying-Website-on-Laptop-Screen-Stock-Photo-A.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
