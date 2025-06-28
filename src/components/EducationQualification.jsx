import React from "react";

const EducationQualification = () => {
  return (
    <section id="education" className="py-12 mt-10">
      {/* Title outside card for alignment consistency */}
      <h2 className="text-4xl font-extrabold text-center text-[#00DFD8] mb-8">
        Educational Qualification
      </h2>
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-gradient-to-br from-[#03363D] via-[#0F172A] to-[#007CF0] rounded-2xl shadow-2xl p-8">
          {/* Graduation */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-[#00DFD8] mb-2">
              Bachelor of Science in Computer Science & Engineering
            </h3>
            <p className="text-gray-200 text-lg mb-1">Bangladesh University</p>
            <p className="text-gray-300 mb-1">
              Currently studying in{" "}
              <span className="font-semibold text-[#00DFD8]">2nd Year</span>
            </p>
            <p className="text-gray-300 mb-1">
              CGPA: <span className="text-[#00DFD8] font-bold">3.8+</span>
            </p>
            <p className="text-gray-400">2025 - Present</p>
          </div>
          {/* HSC */}
          <div>
            <h3 className="text-xl font-semibold text-[#00DFD8] mb-1">
              Higher Secondary Certificate (HSC)
            </h3>
            <p className="text-gray-200 text-lg mb-1">
              Completed from Science background
            </p>
            <p className="text-gray-400">2022</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationQualification;
