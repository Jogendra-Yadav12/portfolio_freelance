import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { experience, education } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0a0f1e]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-4">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Experience &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Education
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My professional journey and academic background.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-[#0d1428] border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 flex items-center justify-center shrink-0">
                <FaBriefcase className="text-indigo-400" />
              </span>
              Work Experience
            </h3>
            <div className="space-y-8">
              {experience.map((exp, i) => (
                <div
                  key={i}
                  className="relative border-l-2 border-indigo-500/40 pl-7 pb-4"
                >
                  <div className="absolute w-3.5 h-3.5 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 -left-[9px] top-1.5 shadow-lg shadow-indigo-500/40" />
                  <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                  <p className="text-cyan-400 font-medium">{exp.company}</p>
                  <p className="text-slate-500 text-sm mb-4">
                    {exp.period} | {exp.location}
                  </p>
                  <ul className="space-y-3">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-slate-400 text-sm leading-relaxed"
                      >
                        <span className="text-indigo-400 mt-1.5 shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0d1428] border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 flex items-center justify-center shrink-0">
                <FaGraduationCap className="text-indigo-400" />
              </span>
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="relative border-l-2 border-indigo-500/40 pl-7"
                >
                  <div className="absolute w-3.5 h-3.5 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 -left-[9px] top-1.5 shadow-lg shadow-indigo-500/40" />
                  <h4 className="text-lg font-bold text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-cyan-400 font-medium">{edu.school}</p>
                  <p className="text-slate-500 text-sm">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
