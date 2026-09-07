import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0d1428] border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Skills
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            The tools and technologies I use to build reliable products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-[#0a0f1e] border border-white/10 rounded-2xl p-6 hover:border-indigo-500/40 transition-colors duration-300"
            >
              <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-300 hover:border-indigo-400/50 hover:text-white transition-colors duration-200"
                  >
                    {skill.icon && <skill.icon className="text-base text-indigo-400" />}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
