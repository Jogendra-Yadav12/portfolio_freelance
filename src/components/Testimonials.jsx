import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { testimonials } from "../data/portfolioData";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#0d1428] border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            What Clients{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Say
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Feedback from people I've worked with.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group bg-[#0a0f1e] border border-white/10 rounded-2xl p-7 hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              <FaQuoteLeft className="text-indigo-500/40 text-4xl mb-4" />
              <p className="text-slate-300 leading-relaxed mb-6">
                {t.quote}
              </p>
              <div className="flex text-amber-400 mb-5">
                {[...Array(5)].map((_, s) => (
                  <FaStar key={s} className="text-sm" />
                ))}
              </div>
              <div className="border-t border-white/10 pt-4 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold">{t.name}</p>
                  <p className="text-cyan-400 text-sm">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
