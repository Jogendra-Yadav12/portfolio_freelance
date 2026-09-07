import { FaLightbulb, FaClipboardList, FaCode, FaRocket } from "react-icons/fa";
import { process } from "../data/portfolioData";

const iconMap = { "01": FaLightbulb, "02": FaClipboardList, "03": FaCode, "04": FaRocket };

export default function Process() {
  return (
    <section id="process" className="py-24 bg-[#0a0f1e]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-4">
            Process
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            How It{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Works
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A simple, transparent process from your first message to launch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((item, i) => {
            const Icon = iconMap[item.step] || FaCode;
            return (
              <div
                key={item.step}
                className="relative bg-[#0d1428] border border-white/10 rounded-2xl p-7 hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300"
              >
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-indigo-500/40 to-transparent" />
                )}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 flex items-center justify-center mb-4">
                  <Icon className="text-indigo-400 text-xl" />
                </div>
                <div className="text-sm font-bold text-cyan-400 mb-1">
                  Step {item.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
