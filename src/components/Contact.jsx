import React from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-12 mt-10">
      <h2 className="text-4xl font-extrabold text-center text-[#00DFD8] mb-8 animate-fade-in">
        Contact Information
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {/* Left: Contact Information */}
        <div className="bg-gradient-to-br from-[#03363D] via-[#0F172A] to-[#007CF0] border border-[#00DFD8] p-8 rounded-2xl shadow-2xl flex flex-col gap-8 animate-fade-up">
          <h3 className="text-2xl font-bold text-[#00DFD8] mb-4">
            Get in Touch
          </h3>
          <div className="space-y-7">
            <div className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300">
              <span className="bg-[#00DFD8] p-3 rounded-full shadow-lg animate-pop">
                <FaEnvelope className="text-white text-2xl" />
              </span>
              <div>
                <p className="text-white font-semibold text-lg">Email</p>
                <a
                  href="mailto:your.email@example.com"
                  className="text-[#00DFD8] underline font-medium"
                >
                  your.email@example.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300">
              <span
                className="bg-[#00DFD8] p-3 rounded-full shadow-lg animate-pop"
                style={{ animationDelay: "0.1s" }}
              >
                <FaPhoneAlt className="text-white text-2xl" />
              </span>
              <div>
                <p className="text-white font-semibold text-lg">Phone</p>
                <a
                  href="tel:+8801234567890"
                  className="text-[#00DFD8] underline font-medium"
                >
                  +880 1234-567890
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300">
              <span
                className="bg-[#00DFD8] p-3 rounded-full shadow-lg animate-pop"
                style={{ animationDelay: "0.2s" }}
              >
                <FaWhatsapp className="text-white text-2xl" />
              </span>
              <div>
                <p className="text-white font-semibold text-lg">WhatsApp</p>
                <a
                  href="https://wa.me/8801234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00DFD8] underline font-medium"
                >
                  +880 1234-567890
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div
          className="bg-gradient-to-br from-[#03363D] via-[#0F172A] to-[#007CF0] border border-[#00DFD8] p-8 rounded-2xl shadow-2xl animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Email"
              className="w-full p-3 rounded border border-[#00DFD8] bg-[#0F172A] text-white focus:outline-none focus:ring-2 focus:ring-[#00DFD8] placeholder:text-gray-400"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 rounded border border-[#00DFD8] bg-[#0F172A] text-white focus:outline-none focus:ring-2 focus:ring-[#00DFD8] placeholder:text-gray-400"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#00DFD8] text-white py-3 rounded font-semibold hover:bg-[#007CF0] transition-transform hover:scale-105"
            >
              Send Email
            </button>
          </form>
        </div>
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

export default Contact;
