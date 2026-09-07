import {
  FaPhp,
  FaShoppingCart,
  FaCode,
  FaCreditCard,
  FaRocket,
  FaHandsHelping,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa";
import { services } from "../data/portfolioData";

const iconMap = {
  php: FaPhp,
  cart: FaShoppingCart,
  api: FaCode,
  payment: FaCreditCard,
  optimization: FaRocket,
  support: FaHandsHelping,
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#0a0f1e] relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-600/5 rounded-full blur-[100px]" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-4">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            What I Can{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Build For You
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Everything you need to launch, improve, and scale your product —
            backed by proven results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || FaCode;
            return (
              <div
                key={service.title}
                className="group relative bg-[#0d1428] border border-white/10 rounded-2xl p-7 hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                  <Icon className="text-indigo-400 text-2xl group-hover:text-cyan-400 transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-slate-300 text-sm"
                    >
                      <span className="w-4 h-4 rounded-full bg-indigo-500/15 flex items-center justify-center shrink-0">
                        <FaCheck className="text-indigo-400 text-[8px]" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => {
                    window.dispatchEvent(
                      new CustomEvent("quote-request", {
                        detail: {
                          message: `Hi Jogendra, I'm interested in ${service.title}. I'd like to get a quote for my project.`,
                        },
                      })
                    );
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group/btn inline-flex items-center gap-2 text-indigo-400 hover:text-cyan-400 text-sm font-semibold transition-colors cursor-pointer"
                >
                  Get a free quote
                  <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
