import { FaExternalLinkAlt, FaArrowRight, FaFolderOpen } from "react-icons/fa";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0d1428] border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4">
            Results
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Work I've{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Delivered
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Real projects where I helped businesses grow with reliable,
            scalable technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-[#0a0f1e] border border-white/10 rounded-2xl p-8 hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 flex items-center justify-center">
                  <FaFolderOpen className="text-indigo-400 text-xl" />
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">
                {project.title}
              </h3>
              <p className="text-cyan-400 text-sm font-medium mb-5">
                {project.subtitle}
              </p>

              <ul className="space-y-2 mb-6">
                {project.description.map((desc, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-slate-400 text-sm leading-relaxed"
                  >
                    <span className="text-indigo-400 mt-1.5 shrink-0">▸</span>
                    {desc}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => {
                  window.dispatchEvent(
                    new CustomEvent("quote-request", {
                      detail: {
                        message: `Hi Jogendra, I need something like your "${project.title}" project. Can we discuss the details and get a quote?`,
                      },
                    })
                  );
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group/btn inline-flex items-center gap-2 text-indigo-400 hover:text-cyan-400 text-sm font-semibold transition-colors cursor-pointer"
              >
                I need something like this
                <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
