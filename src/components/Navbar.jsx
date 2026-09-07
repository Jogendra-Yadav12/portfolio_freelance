import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { personalData } from '../data/portfolioData';

const Navbar = ({ theme, toggleTheme }) => {
  const [time, setTime] = useState(new Date());
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Kolkata', // IST timezone
    timeZoneName: 'short'
  });

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-color)] bg-[var(--bg-primary)]/80 backdrop-blur-md">
      <div className="wrap flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold font-sora tracking-tight">
          {personalData.name}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-sm font-medium hover:text-[var(--accent-color)] transition">Home</Link>
          <Link to="/#services" className="text-sm font-medium hover:text-[var(--accent-color)] transition">Services</Link>
          <Link to="/projects" className="text-sm font-medium hover:text-[var(--accent-color)] transition">Projects</Link>
          <Link to="/#team" className="text-sm font-medium hover:text-[var(--accent-color)] transition">Team</Link>
          <Link to="/#contact" className="text-sm font-medium hover:text-[var(--accent-color)] transition">Contact</Link>
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] font-medium bg-[var(--bg-secondary)] px-3 py-1.5 rounded-full border border-[var(--border-color)]">
            <span className="animate-pulse">🕐</span>
            {timeString}
          </div>
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          <Link to="/#contact" className="btn-primary py-2 px-5 text-sm">
            💬 Hire Me
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-[var(--border-color)] bg-[var(--bg-primary)] absolute w-full left-0 p-4 flex flex-col gap-4 shadow-lg">
          <Link to="/" onClick={() => { setMenuOpen(false); window.scrollTo(0, 0); }} className="font-medium p-2 bg-[var(--bg-secondary)] rounded-lg">Home</Link>
          <Link to="/#services" onClick={() => setMenuOpen(false)} className="font-medium p-2">Services</Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)} className="font-medium p-2">Projects</Link>
          <Link to="/#team" onClick={() => setMenuOpen(false)} className="font-medium p-2">Team</Link>
          <Link to="/#contact" onClick={() => setMenuOpen(false)} className="font-medium p-2">Contact</Link>
          
          <div className="flex items-center justify-between mt-4 border-t border-[var(--border-color)] pt-4">
            <div className="text-sm font-medium">Local Time: {timeString}</div>
            <button onClick={toggleTheme} className="p-2 bg-[var(--bg-secondary)] rounded-full">
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
