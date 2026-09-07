import { FaArrowRight, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { hireMe, personalInfo } from "../data/portfolioData";

export default function HireMe() {
  return (
    <section id="hire" className="py-24 bg-[#0a0f1e]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative rounded-3xl p-[1.5px] bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 shadow-2xl shadow-indigo-500/20">
          <div className="relative bg-[#0d1428] rounded-3xl px-8 py-14 md:px-16 md:py-16 text-center overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-600/10 rounded-full blur-[80px]" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                {hireMe.availability}
              </span>

              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                {hireMe.heading}
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                {hireMe.subheading}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="#contact"
                  className="group px-8 py-3.5 bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white rounded-xl font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/30"
                >
                  Start a Project
                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-200" />
                </a>
                <a
                  href={`https://wa.me/${personalInfo.whatsapp}?text=${encodeURIComponent(
                    "Hi Jogendra, I'd like to discuss a project."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-colors duration-200 inline-flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25"
                >
                  <FaWhatsapp className="text-lg" /> Chat on WhatsApp
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3.5 border border-white/15 hover:border-white/30 text-slate-200 hover:text-white rounded-xl font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2"
                >
                  <FaEnvelope className="text-sm" /> Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
