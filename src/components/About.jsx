import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaAward } from "react-icons/fa";
import { personalInfo, achievements } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0a0f1e]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-4">
            About
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Me
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="bg-[#0d1428] border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-4">
              {personalInfo.title} – {personalInfo.subtitle}
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              {personalInfo.summary}
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-400">
                <span className="w-9 h-9 rounded-lg bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-indigo-400" />
                </span>
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <span className="w-9 h-9 rounded-lg bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center">
                  <FaPhone className="text-indigo-400" />
                </span>
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <span className="w-9 h-9 rounded-lg bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center">
                  <FaEnvelope className="text-indigo-400" />
                </span>
                <span>{personalInfo.email}</span>
              </div>
            </div>
          </div>

          <div className="bg-[#0d1428] border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <FaAward className="text-indigo-400" /> Achievements
            </h3>
            <div className="space-y-3">
              {achievements.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-[#0a0f1e] border border-white/10 rounded-lg p-4 hover:border-indigo-500/40 transition-colors duration-200"
                >
                  <span className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
