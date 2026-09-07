import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { projectsData } from '../data/portfolioData';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Scroll to top when opening detail page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const project = projectsData[id];

  const renderTextWithLinks = (text) => {
    if (!text) return null;
    // Regex to detect http/https URLs
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.split(urlRegex).map((part, i) => {
      if (part.match(urlRegex)) {
        return (
          <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline font-medium">
            {part}
          </a>
        );
      }
      return part;
    });
  };

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold font-sora mb-4">Project Not Found</h1>
        <button onClick={() => navigate('/')} className="btn-primary">Back to Home</button>
      </div>
    );
  }

  return (
    <div className="pb-24 pt-10">
      
      {/* Hero Header */}
      <div className="wrap mb-16">
        <button onClick={() => navigate(-1)} className="mb-8 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition flex items-center gap-2">
          ← Back
        </button>
        <div className="w-full aspect-[21/9] bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden mb-12 shadow-xl border border-[var(--border-color)]">
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500">No Image</div>
          )}
        </div>
        
        <h1 className="font-sora text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          {project.title}
        </h1>
        <p className="lead text-xl max-w-3xl">
          {project.desc}
        </p>
      </div>

      {/* Project Metadata */}
      <div className="wrap mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-[var(--border-color)]">
          <div>
            <span className="block text-sm text-[var(--text-secondary)] mb-1">Role</span>
            <strong className="font-sora text-lg">{project.role}</strong>
          </div>
          <div>
            <span className="block text-sm text-[var(--text-secondary)] mb-1">Client</span>
            <strong className="font-sora text-lg">{project.client}</strong>
          </div>
          <div>
            <span className="block text-sm text-[var(--text-secondary)] mb-1">Timeline</span>
            <strong className="font-sora text-lg">{project.timeline}</strong>
          </div>
          <div>
            <span className="block text-sm text-[var(--text-secondary)] mb-1">Tech Stack</span>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="text-xs bg-[var(--bg-secondary)] border border-[var(--border-color)] px-2 py-1 rounded-md">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
        <div className="lg:col-span-4">
          <h2 className="font-sora text-3xl font-bold sticky top-24">The Challenge</h2>
        </div>
        <div className="lg:col-span-8">
          <p className="text-[var(--text-secondary)] leading-relaxed text-lg whitespace-pre-wrap">
            {renderTextWithLinks(project.overview)}
          </p>
        </div>
      </div>

      <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
        <div className="lg:col-span-4">
          <h2 className="font-sora text-3xl font-bold sticky top-24">The Solution</h2>
        </div>
        <div className="lg:col-span-8">
          <p className="text-[var(--text-secondary)] leading-relaxed text-lg whitespace-pre-wrap break-words">
            {renderTextWithLinks(project.solution)}
          </p>
          {project.additionalImages && project.additionalImages.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {project.additionalImages.map((img, i) => (
                <div key={i} className={`aspect-[4/3] bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl overflow-hidden ${i === 2 ? 'md:col-span-2' : ''}`}>
                  <img src={img} alt={`${project.title} screenshot ${i+1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="wrap flex justify-center gap-4 mb-24">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary btn-lg">
            🌍 View Live Site
          </a>
        )}
      </div>

      {/* Next Project */}
      {project.next && projectsData[project.next] && (
        <div className="wrap border-t border-[var(--border-color)] pt-16 flex justify-end">
          <Link to={`/project/${project.next}`} className="group text-right">
            <span className="block text-sm text-[var(--text-secondary)] mb-2">Next Project</span>
            <h3 className="font-sora text-3xl md:text-5xl font-bold group-hover:text-[var(--accent-color)] transition-colors">
              {projectsData[project.next].title} →
            </h3>
          </Link>
        </div>
      )}

    </div>
  );
};

export default ProjectDetail;
