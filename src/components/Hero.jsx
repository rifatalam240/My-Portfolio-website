import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#0F172A] lg:h-[90vh] md:h-[75vh] px-16  md:flex justify-center items-center">
      <div className="md:w-1/2 space-y-4 pt-24 md:pt-0 md:pb-40 lg:pb-0">
        <p className="lg:text-5xl md:4xl  text-3xl  lg:pt-24 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00DFD8] to-[#007CF0]">
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
        <div className="flex gap-4 ">
          <button className="btn shadow-xl  bg-gradient-to-r from-[#007CF0] to-[#00DFD8] font-bold text-white">
            View Project
          </button>{" "}
          <button className="btn bg-[#111827] text-[#007CF0] border border-[#00DFD8] font-bold">
            Contact Me
          </button>
        </div>
      </div>
      <div className="md:w-1/2 pt-10 flex justify-center items-center md:pb-24 lg:pl-0 lg:pb-0 md:pl-16 lg:pt-24">
        {" "}
        <img className="lg:w-2/5 w-[200px] mb-6 md:w-[250px] rounded-full border-2 border-[#00DFD8] shadow-lg"
          src="https://i.postimg.cc/kMFbD9sS/3-D-Freelancer-Character-Preparing-Online-Portfolio-Displaying-Website-on-Laptop-Screen-Stock-Photo-A.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
