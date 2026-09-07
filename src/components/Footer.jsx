import { Link } from 'react-router-dom';
import { FiGithub, FiTwitter, FiLinkedin, FiInstagram, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { personalData } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]">
      <div className="wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-14">
        
        {/* Column 1: Brand & Bio */}
        <div className="lg:pr-6">
          <Link to="/" className="text-xl font-bold font-sora tracking-tight mb-4 inline-block">
            {personalData.name}
          </Link>
          <p className="text-sm text-[var(--text-secondary)] mb-6">
            {personalData.role} crafting scalable applications and digital experiences for businesses worldwide.
          </p>
          <div className="flex flex-wrap gap-3">
            {personalData.socials.linkedin && (
              <a href={personalData.socials.linkedin} className="p-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)] text-[var(--text-secondary)] transition">
                <FiLinkedin />
              </a>
            )}
            {personalData.socials.github && (
              <a href={personalData.socials.github} className="p-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)] text-[var(--text-secondary)] transition">
                <FiGithub />
              </a>
            )}
            {personalData.socials.twitter && (
              <a href={personalData.socials.twitter} className="p-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)] text-[var(--text-secondary)] transition">
                <FiTwitter />
              </a>
            )}
            {personalData.socials.email && (
              <a href={personalData.socials.email} className="p-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)] text-[var(--text-secondary)] transition">
                <FiMail />
              </a>
            )}
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div>
          <h3 className="mb-4 font-sora text-sm font-semibold text-[var(--text-primary)]">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition">Home</Link></li>
            <li><a href="/#services" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition">Services</a></li>
            <li><a href="/#projects" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition">Projects</a></li>
            <li><a href="/#team" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition">Team</a></li>
            <li><a href="/#contact" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="lg:col-span-2">
          <h3 className="mb-4 font-sora text-sm font-semibold text-[var(--text-primary)]">Get in Touch</h3>
          <ul className="space-y-3 text-sm mb-6">
            <li>
              <a href={`mailto:${personalData.email}`} className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition">
                <FiMail /> {personalData.email}
              </a>
            </li>
            <li>
              <a href={`tel:${personalData.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition">
                <FiPhone /> {personalData.phone}
              </a>
            </li>
            <li className="flex items-center gap-2 text-[var(--text-secondary)]">
              <FiMapPin /> {personalData.location}
            </li>
          </ul>
          <a href="#contact" className="btn-primary py-2 px-5 text-sm inline-flex">
            Start a Project <span className="ml-2">→</span>
          </a>
        </div>

      </div>

      <div className="border-t border-[var(--border-color)]">
        <div className="wrap flex flex-col md:flex-row items-center justify-between gap-2 py-6 text-xs text-[var(--text-secondary)]">
          <p>&copy; 2023 - {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
