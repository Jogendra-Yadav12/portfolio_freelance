import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { personalData, servicesData, projectsData, teamData, processData, testimonialsData } from '../data/portfolioData';
import jogendraImg from '../assets/team/jogendra.jpeg';
import Contact from '../components/Contact';
import { FaLinkedin } from "react-icons/fa";

const Home = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Web', 'Apps'];
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const filteredProjects = Object.values(projectsData).filter(project => {
    const isApp = project.tech.includes('Flutter');
    
    if (activeTab === 'All') return true;
    if (activeTab === 'Apps' && isApp) return true;
    if (activeTab === 'Web' && !isApp) return true;
    return false;
  });
  return (
    <div className="pb-[78px] md:pb-0 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section id="hero" className="relative pt-20 pb-10 md:pt-32 md:pb-20">
        <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7">
            <div className="eyebrow mb-6">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              Available for freelance projects
            </div>
            <h1 className="font-sora text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6" dangerouslySetInnerHTML={{ __html: personalData.tagline.replace('systems', '<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">systems</span>').replace('websites.', 'websites.<br/>') }}>
            </h1>
            <p className="lead text-lg max-w-xl mb-10" dangerouslySetInnerHTML={{ __html: personalData.bio.replace(personalData.name, `<strong class="text-[var(--text-primary)] font-semibold">${personalData.name}</strong>`) }}>
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary btn-lg">💬 Hire Me</a>
              <a href="#projects" className="btn-outline btn-lg">View Portfolio →</a>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-8 sm:gap-12">
              {personalData.stats.map((stat, i) => (
                <div key={i}>
                  <div className="font-sora text-3xl font-extrabold text-[var(--text-primary)]">{stat.value}</div>
                  <div className="text-sm text-[var(--text-secondary)] mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm rounded-3xl overflow-hidden border border-[var(--border-color)] shadow-2xl">
              <div className="aspect-[4/5] bg-gradient-to-tr from-gray-800 to-gray-600">
                <img src={jogendraImg} alt={personalData.name} className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)] px-5 py-4 shadow-xl animate-floaty z-10">
              <span className="inline-block h-3 w-3 rounded-full bg-blue-500 animate-pulse"></span>
              <div>
                <strong className="block font-sora text-sm">Full stack developer</strong>
                <small className="text-xs text-[var(--text-secondary)]"></small>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* TECH MARQUEE */}
      <div className="border-y border-[var(--border-color)] bg-[var(--bg-secondary)] py-6 overflow-hidden">
        <div className="flex w-max items-center gap-4 animate-marquee">
          {[...personalData.skills, ...personalData.skills].map((tech, i) => (
            <span key={i} className="chip">{tech}</span>
          ))}
        </div>
      </div>

      {/* 2. SERVICES SECTION */}
      <section id="services" className="py-24">
        <div className="wrap">
          <div className="max-w-2xl text-center mx-auto mb-16">
            <span className="eyebrow">What I do</span>
            <h2 className="section-title mt-4">Freelance development services</h2>
            <p className="lead mt-4 text-lg">End-to-end product development — from idea and architecture to launch and ongoing support.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service, i) => (
              <div key={i} className="card group cursor-pointer">
                <div className="ico-box mb-6 group-hover:bg-[var(--accent-color)] group-hover:text-[var(--accent-text)] transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="font-sora text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">{service.desc}</p>
                <span className="text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">Explore <span>→</span></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS SECTION */}
      <section id="projects" className="py-24 bg-[var(--bg-secondary)]">
        <div className="wrap">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="max-w-2xl">
              <span className="eyebrow">Selected work</span>
              <h2 className="section-title mt-4">Featured projects</h2>
              <p className="lead mt-4 text-lg">A few of the products I've designed and built.</p>
            </div>
            <Link to="/projects" className="btn-outline">All projects →</Link>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-3 mb-12">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] shadow-lg'
                    : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-color)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.slice(0, 6).map((project) => {
              // Extract the first URL from solution if liveUrl is not present (for flutter apps)
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
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24">
        <div className="wrap">
          <div className="max-w-2xl text-center mx-auto mb-16">
            <span className="eyebrow">Kind words</span>
            <h2 className="section-title mt-4">What clients say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonialsData.map((testimonial, i) => (
              <div key={i} className="card bg-[var(--bg-secondary)] relative group hover:border-[var(--accent-color)] transition-all">
                <div className="absolute top-6 right-8 text-6xl text-[var(--border-color)] opacity-50 group-hover:text-[var(--accent-color)] group-hover:opacity-20 transition-all font-sora">"</div>
                <p className="text-lg italic text-[var(--text-secondary)] mb-8 relative z-10">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent-color)] text-[var(--accent-text)] flex items-center justify-center font-bold font-sora text-xl">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-sora font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-[var(--text-secondary)]">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TEAM SECTION */}
      <section id="team" className="py-24">
        <div className="wrap">
          <div className="max-w-2xl text-center mx-auto mb-16">
            <span className="eyebrow">The experts</span>
            <h2 className="section-title mt-4">Meet the team</h2>
            <p className="lead mt-4 text-lg">Collaborating with top talent to deliver exceptional results.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.map((member, i) => (
              <div key={i} className="card text-center flex flex-col items-center">
                <div className="w-32 h-32 rounded-full mb-6 bg-gradient-to-tr from-blue-100 to-purple-200 dark:from-blue-900 dark:to-purple-900 border-4 border-[var(--bg-primary)] shadow-lg flex items-center justify-center text-3xl font-bold font-sora overflow-hidden">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    member.initials
                  )}
                </div>
                <h3 className="font-sora text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] mt-2 mb-6">{member.role}</p>
                <div className="flex gap-3 justify-center">
                  {member.linkedin && (
                    <a href={member.linkedin} className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition">
                      <FaLinkedin className="text-indigo-400 text-lg" /> LinkedIn
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION */}
      <section className="py-24 bg-[var(--bg-secondary)]">
        <div className="wrap">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <span className="eyebrow">How I work</span>
            <h2 className="section-title mt-4">A simple, transparent process</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processData.map((step, i) => (
              <div key={i} className="card relative overflow-hidden">
                <div className="text-6xl font-sora font-extrabold text-[var(--border-color)] absolute -top-4 -right-2 opacity-30 select-none">
                  {step.num}
                </div>
                <h3 className="font-sora text-xl font-bold mt-4 mb-3">{step.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />

    </div>
  );
};

export default Home;
