import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiFigma,
  SiVite,
  //   SiVscode,
  SiFirebase,
  SiExpress,
  SiDaisyui,
  SiMongodb,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: <FaReact className="text-[#61DBFB] text-4xl" />,
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white text-4xl" />,
    category: "Frontend",
  },
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-[#E44D26] text-4xl" />,
    category: "Frontend",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-[#1572B6] text-4xl" />,
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-[#F7DF1E] text-4xl" />,
    category: "Frontend",
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="text-[#38BDF8] text-4xl" />,
    category: "Frontend",
  },
  {
    name: "Redux",
    icon: <SiRedux className="text-[#764ABC] text-4xl" />,
    category: "Frontend",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-[#3C873A] text-4xl" />,
    category: "Backend",
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-[#000000] text-4xl" />,
    category: "Backend",
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-[#FFCA28] text-4xl" />,
    category: "Backend",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-[#47A248] text-4xl" />,
    category: "Backend",
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-[#F05032] text-4xl" />,
    category: "Tools",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-white text-4xl" />,
    category: "Tools",
  },
  {
    name: "Figma",
    icon: <SiFigma className="text-[#A259FF] text-4xl" />,
    category: "Tools",
  },
  {
    name: "Vite",
    icon: <SiVite className="text-[#646CFF] text-4xl" />,
    category: "Tools",
  },
  //   {
  //     name: "VS Code",
  //     icon: <SiVscode className="text-[#007ACC] text-4xl" />,
  //     category: "Tools",
  //   },
  {
    name: "DaisyUI",
    icon: <SiDaisyui className="text-[#FF6900] text-4xl" />,
    category: "Tools",
  },
];

const categories = ["Frontend", "Backend", "Tools"];

const MySkills = () => {
  return (
    <section id="skills" className="py-12 mt-10">
      <h2 className="text-4xl font-extrabold text-center text-white mb-8">
        My Skills
      </h2>
      <div className="max-w-5xl mx-auto px-4">
        {categories.map((cat) => (
          <div key={cat} className="mb-8">
            <h3 className="text-2xl font-bold text-[#00DFD8] mb-4">{cat}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {skills
                .filter((skill) => skill.category === cat)
                .map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-[#0F172A] rounded-xl shadow-lg flex flex-col items-center py-6 hover:scale-105 transition-transform duration-200"
                  >
                    {skill.icon}
                    <span className="mt-3 text-white font-semibold">
                      {skill.name}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
