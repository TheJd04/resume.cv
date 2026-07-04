import React from 'react';
import { motion } from 'motion/react';
import { Download } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills & Certs', id: 'skills' },
    { label: 'Contact Me', id: 'contact' }
  ];

  const handleScroll = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 w-full bg-[#03151f]/40 backdrop-blur-md border-b border-white/5"
      id="custom-navbar"
    >
      <div className="flex row justify-between items-center px-8 py-5 max-w-7xl mx-auto">
        {/* Logo */}
        <button 
          onClick={() => handleScroll('home')}
          className="text-3xl tracking-tight text-foreground select-none cursor-pointer"
          style={{ fontFamily: "'Instrument Serif', serif" }}
          id="navbar-logo"
        >
          Jagjeet
        </button>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8 items-center" id="navbar-links">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className={`text-sm tracking-wide transition-colors duration-300 font-medium cursor-pointer ${
                activeSection === link.id 
                  ? 'text-foreground font-semibold' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              id={`nav-item-${link.id}`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3" id="navbar-cta-group">
          <a
            href="/resume.pdf"
            download
            className="hidden sm:flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-mono font-semibold border border-white/15 text-muted-foreground hover:text-foreground hover:border-white/30 transition-all duration-300 cursor-pointer"
            id="navbar-resume-btn"
          >
            <Download size={12} />
            Resume
          </a>
          <button 
            onClick={() => handleScroll('contact')}
            className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03] transition-transform duration-300 active:scale-[0.98] cursor-pointer"
            id="navbar-cta"
          >
            Begin Journey
          </button>
        </div>
      </div>
    </motion.header>
  );
}
