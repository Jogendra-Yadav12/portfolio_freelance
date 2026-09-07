import { stats } from "../data/portfolioData";

export default function Stats() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#0a0f1e] to-[#0d1428] border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <p className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-cyan-400 group-hover:from-indigo-300 group-hover:to-cyan-300 transition-all duration-200">
                {stat.value}
                {stat.suffix}
              </p>
              <p className="text-slate-400 mt-2 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
