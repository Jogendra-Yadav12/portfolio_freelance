import { FaWhatsapp, FaArrowDown, FaBolt, FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo, heroStats } from "../data/portfolioData";
import jogendraImg from "../assets/team/jogendra.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0f1e]"
    >
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-fuchsia-500/10 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl flex flex-col items-center">
        <div className="mb-6 rounded-full p-1 border-2 border-indigo-500/30 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
          <img 
            src={jogendraImg} 
            alt="Jogendra Yadav" 
            className="w-32 h-32 rounded-full object-cover border-4 border-[#0a0f1e]"
          />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-300 text-sm mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          {personalInfo.title} · {personalInfo.subtitle}
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          {personalInfo.headline}
        </h1>

        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {personalInfo.summary}
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <a
            href="#contact"
            className="group px-7 py-3.5 bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-indigo-500/30 inline-flex items-center gap-2"
          >
            <FaBolt className="text-sm" /> Start Your Project
          </a>
          <a
            href={`https://wa.me/${personalInfo.whatsapp}?text=${encodeURIComponent(
              "Hi Jogendra, I'd like to discuss a project."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-colors duration-200 inline-flex items-center gap-2 shadow-lg shadow-emerald-500/25"
          >
            <FaWhatsapp className="text-lg" /> Chat on WhatsApp
          </a>
          <a
            href="#projects"
            className="px-7 py-3.5 border border-white/15 hover:border-white/30 text-slate-200 hover:text-white rounded-xl font-semibold transition-all duration-200 inline-flex items-center gap-2"
          >
            See My Work <FaArrowDown className="text-sm" />
          </a>
        </div>

        <div className="flex justify-center gap-5 mb-12">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-200"
          >
            <FaLinkedin className="text-lg" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-200"
          >
            <FaGithub className="text-lg" />
          </a>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-5"
            >
              <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                {stat.value}
              </p>
              <p className="text-slate-400 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
