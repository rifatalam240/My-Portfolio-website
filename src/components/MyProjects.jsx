import React from "react";
import { Link } from "react-router";

// Sample project data (now supports 3 images per project)
const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    images: [
      "https://i.postimg.cc/3x3QzSGq/portfolio.png",
      "https://i.postimg.cc/8c6y8k7F/ecommerce.png",
      "https://i.postimg.cc/3wL8w1Zy/taskmanager.png",
    ],
    stack: ["React", "TailwindCSS", "Vite"],
    description:
      "A personal portfolio website to showcase my skills, projects, and experience as a frontend developer.",
    live: "https://your-portfolio-live-link.com",
    github: "https://github.com/yourusername/portfolio-client",
    challenges:
      "Designing a unique layout, optimizing for performance, and ensuring mobile responsiveness.",
    improvements:
      "Add a blog section, integrate a CMS for easier content updates, and improve accessibility.",
  },
  {
    id: 2,
    name: "E-commerce Store",
    images: [
      "https://i.postimg.cc/8c6y8k7F/ecommerce.png",
      "https://i.postimg.cc/3x3QzSGq/portfolio.png",
      "https://i.postimg.cc/3wL8w1Zy/taskmanager.png",
    ],
    stack: ["React", "Redux", "Firebase"],
    description:
      "A modern e-commerce platform with product search, cart, and authentication features.",
    live: "https://your-ecommerce-live-link.com",
    github: "https://github.com/yourusername/ecommerce-client",
    challenges:
      "Implementing secure authentication, managing global state, and handling real-time data.",
    improvements:
      "Add payment gateway integration, improve product filtering, and enhance UI animations.",
  },
  {
    id: 3,
    name: "Task Manager App",
    images: [
      "https://i.postimg.cc/3wL8w1Zy/taskmanager.png",
      "https://i.postimg.cc/8c6y8k7F/ecommerce.png",
      "https://i.postimg.cc/3x3QzSGq/portfolio.png",
    ],
    stack: ["React", "Node.js", "MongoDB", "Express.js"],
    description:
      "A full-stack task management app to organize daily activities with user authentication.",
    live: "https://your-taskmanager-live-link.com",
    github: "https://github.com/yourusername/taskmanager-client",
    challenges:
      "Building REST APIs, managing authentication, and deploying the app.",
    improvements:
      "Add notifications, implement drag-and-drop, and create a mobile app version.",
  },
];

// Carousel with fade animation
const Carousel = ({ images }) => {
  const [current, setCurrent] = React.useState(0);
  const [fade, setFade] = React.useState(false);

  const prev = () => {
    setFade(true);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setFade(false);
    }, 200);
  };
  const next = () => {
    setFade(true);
    setTimeout(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      setFade(false);
    }, 200);
  };

  return (
    <div className="relative w-full h-56 md:h-80 flex items-center justify-center mb-4">
      <img
        src={images[current]}
        alt="Project Screenshot"
        className={`w-full h-56 md:h-80 object-cover rounded-xl border-2 border-[#00DFD8] transition-all duration-300 ${
          fade ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#00DFD8] text-white rounded-full p-1 shadow hover:bg-[#007CF0] transition"
            aria-label="Previous"
          >
            &#8592;
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#00DFD8] text-white rounded-full p-1 shadow hover:bg-[#007CF0] transition"
            aria-label="Next"
          >
            &#8594;
          </button>
        </>
      )}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`w-2 h-2 rounded-full ${
              idx === current ? "bg-[#00DFD8]" : "bg-gray-400"
            } inline-block transition-all duration-200`}
          />
        ))}
      </div>
    </div>
  );
};

const MyProjects = () => {
  const [selected, setSelected] = React.useState(null);

  return (
    <section id="projects" className="py-12 mt-10">
      <h2 className="text-4xl font-extrabold text-center text-[#00DFD8] mb-8 animate-fade-in">
        My Projects
      </h2>
      <div className="max-w-5xl mx-auto px-4">
        {!selected ? (
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, i) => (
              <div
                key={project.id}
                className="bg-gradient-to-br from-[#03363D] via-[#0F172A] to-[#007CF0] rounded-2xl shadow-2xl p-6 flex flex-col items-center animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <Carousel images={project.images} />
                <h3 className="text-2xl font-bold text-[#00DFD8] mb-2 text-center">
                  {project.name}
                </h3>
                <button
                  className="mt-4 px-4 py-2 bg-[#00DFD8] text-white font-semibold rounded-lg shadow hover:bg-[#007CF0] transition-transform hover:scale-105"
                  onClick={() => setSelected(project)}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto bg-[#0F172A] rounded-2xl shadow-2xl p-8 animate-fade-in">
            <button
              className="mb-4 px-3 py-1 bg-[#00DFD8] text-white rounded shadow hover:bg-[#007CF0] transition"
              onClick={() => setSelected(null)}
            >
              ← Back to Projects
            </button>
            <Carousel images={selected.images} />
            <h3 className="text-3xl font-bold text-[#00DFD8] mb-2">
              {selected.name}
            </h3>
            <div className="mb-2">
              <span className="font-semibold text-white">Tech Stack: </span>
              {selected.stack.map((tech, idx) => (
                <span
                  key={tech}
                  className="inline-block bg-[#007CF0] text-white px-2 py-1 rounded text-sm mr-2 mb-1 animate-pop"
                  style={{ animationDelay: `${idx * 0.07}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-200 mb-3">{selected.description}</p>
            <div className="flex flex-wrap gap-4 mb-4">
              <a
                href={selected.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#00DFD8] text-white rounded font-semibold shadow hover:bg-[#007CF0] transition-transform hover:scale-105"
              >
                Live Project
              </a>
              <a
                href={selected.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#0F172A] border border-[#00DFD8] text-[#00DFD8] rounded font-semibold shadow hover:bg-[#007CF0] hover:text-white transition-transform hover:scale-105"
              >
                GitHub Repo
              </a>
            </div>
            <div className="mb-2">
              <span className="font-semibold text-white">Challenges:</span>
              <p className="text-gray-400">{selected.challenges}</p>
            </div>
            <div>
              <span className="font-semibold text-white">
                Improvements & Plans:
              </span>
              <p className="text-gray-400">{selected.improvements}</p>
            </div>
          </div>
        )}
      </div>
      {/* Animation styles */}
      <style>
        {`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in {
          animation: fade-in 0.7s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(40px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-up {
          animation: fade-up 0.7s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes pop {
          0% { transform: scale(0.7); opacity: 0; }
          80% { transform: scale(1.1);}
          100% { transform: scale(1); opacity: 1;}
        }
        .animate-pop {
          animation: pop 0.5s cubic-bezier(.4,0,.2,1) both;
        }
        `}
      </style>
    </section>
  );
};

export default MyProjects;
