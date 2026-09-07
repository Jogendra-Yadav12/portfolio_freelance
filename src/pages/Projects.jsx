import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/portfolioData';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tabs = ['All', 'Web', 'Apps'];

  const filteredProjects = Object.values(projectsData).filter(project => {
    const isApp = project.tech.includes('Flutter');
    
    if (activeTab === 'All') return true;
    if (activeTab === 'Apps' && isApp) return true;
    if (activeTab === 'Web' && !isApp) return true;
    return false;
  });

  return (
    <div className="pb-24 pt-20">
      <div className="wrap">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="font-sora text-4xl md:text-5xl font-extrabold tracking-tight mb-6">All Projects</h1>
          <p className="text-[var(--text-secondary)] text-lg">A complete collection of products, websites, and applications I have designed and developed.</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeTab === tab
                  ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] shadow-lg'
                  : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-color)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const firstUrlMatch = project.solution?.match(/(https?:\/\/[^\s]+)/);
            const cardUrl = project.liveUrl || (firstUrlMatch ? firstUrlMatch[0] : null);

            return (
              <div key={project.id} className="card p-0 h-full flex flex-col group hover:border-[var(--text-primary)]">
                <Link to={`/project/${project.id}`} className="relative aspect-[16/10] bg-gray-200 dark:bg-gray-800 overflow-hidden block">
                  <span className="absolute top-4 left-4 z-10 bg-white/90 text-black px-3 py-1 text-xs font-bold rounded-full">
                    {project.tag}
                  </span>
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-900 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-gray-500">
                      No Image
                    </div>
                  )}
                </Link>
                <div className="p-6 flex flex-col flex-grow">
                  <Link to={`/project/${project.id}`} className="block mb-2">
                    <h3 className="font-sora text-xl font-bold flex items-center justify-between hover:text-[var(--accent-color)] transition-colors">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-[var(--text-secondary)] mb-6 flex-grow">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs bg-[var(--bg-secondary)] border border-[var(--border-color)] px-2 py-1 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                  {cardUrl && (
                    <a 
                      href={cardUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="mt-auto block text-center py-2.5 px-4 bg-[var(--text-primary)] text-[var(--bg-primary)] rounded-lg font-medium hover:bg-[var(--accent-color)] hover:text-[var(--accent-text)] transition-colors"
                    >
                      🌍 View Live Site
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
