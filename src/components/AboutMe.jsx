import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-12 bg-gradient-to-br from-[#03363D] via-[#0F172A] to-[#007CF0] mt-10 rounded-2xl shadow-2xl"
    >
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <img
          src="https://i.postimg.cc/kMFbD9sS/3-D-Freelancer-Character-Preparing-Online-Portfolio-Displaying-Website-on-Laptop-Screen-Stock-Photo-A.webp"
          alt="Muhammad Rifat"
          className="w-40 h-40 rounded-full border-4 border-[#00DFD8] shadow-lg object-cover"
        />
        <div>
          <h2 className="text-4xl font-extrabold text-white mb-4 text-center md:text-left">
            About Me
          </h2>
          <p className="text-lg text-gray-200 mb-3 leading-relaxed">
            Hi! I'm{" "}
            <span className="text-[#00DFD8] font-bold">Muhammad Rifat</span>, a
            passionate{" "}
            <span className="text-[#00DFD8] font-bold">
              Frontend Web Developer
            </span>{" "}
            from <span className="text-[#00DFD8] font-bold">Bangladesh</span>.
          </p>
          <p className="text-gray-300 mb-3">
            I specialize in building modern, responsive, and user-friendly web
            applications using{" "}
            <span className="font-semibold text-[#00DFD8]">React</span>,{" "}
            <span className="font-semibold text-[#00DFD8]">Next.js</span>, and{" "}
            <span className="font-semibold text-[#00DFD8]">TailwindCSS</span>.
            My goal is to turn ideas into pixel-perfect digital experiences that
            delight users and drive results.
          </p>
          <p className="text-gray-400">
            I love collaborating with creative teams, learning new technologies,
            and solving real-world problems through code. Let's connect and
            build something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
}
