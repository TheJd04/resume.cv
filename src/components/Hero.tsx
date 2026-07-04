import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { socialLinks } from '../data';
import { 
  Github, 
  Linkedin, 
  Code, 
  Database, 
  Mail, 
  Phone, 
  ExternalLink,
  Download,
  Copy,
  Check
} from 'lucide-react';

interface HeroProps {
  onScrollToProjects: () => void;
}

export default function Hero({ onScrollToProjects }: HeroProps) {
  const getSocialIcon = (id: string) => {
    switch(id) {
      case 'linkedin': return <Linkedin size={20} />;
      case 'github': return <Github size={20} />;
      case 'leetcode': return <Code size={20} />;
      case 'kaggle': return <Database size={20} />;
      case 'email': return <Mail size={20} />;
      case 'phone': return <Phone size={20} />;
      default: return <ExternalLink size={20} />;
    }
  };

  const getSocialHoverBorder = (id: string) => {
    switch(id) {
      case 'linkedin': return 'hover:border-[#0077b5]/50 hover:bg-[#0077b5]/10';
      case 'github': return 'hover:border-white/50 hover:bg-white/10';
      case 'leetcode': return 'hover:border-[#ffa116]/50 hover:bg-[#ffa116]/10';
      case 'kaggle': return 'hover:border-[#20beff]/50 hover:bg-[#20beff]/10';
      case 'email': return 'hover:border-fuchsia-400/50 hover:bg-fuchsia-400/10';
      case 'phone': return 'hover:border-purple-400/50 hover:bg-purple-400/10';
      default: return 'hover:border-white';
    }
  };

  const [activeContact, setActiveContact] = useState<'email' | 'phone' | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleIconClick = (id: string, url: string) => {
    if (id === 'email') {
      setActiveContact(prev => prev === 'email' ? null : 'email');
    } else if (id === 'phone') {
      setActiveContact(prev => prev === 'phone' ? null : 'phone');
    } else {
      window.open(url, '_blank', 'noreferrer');
    }
  };

  return (
    <section 
      id="home" 
      className="relative z-10 flex flex-col items-center justify-center text-center px-6 min-h-screen pt-32 pb-24 max-w-7xl mx-auto"
    >
      {/* Title Heading */}
      <h1 
        className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-5xl font-normal text-foreground animate-fade-rise select-text"
        style={{ fontFamily: "'Instrument Serif', serif" }}
        id="hero-title"
      >
        Where <em className="not-italic text-muted-foreground">intelligence</em> rises <em className="not-italic text-muted-foreground">through the silence.</em>
      </h1>

      {/* Subtext Paragraph */}
      <p 
        className="text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay select-text"
        id="hero-subtext"
      >
        I'm <span className="text-foreground font-medium">Jagjeet Singh Dhillon</span>, a Software Engineer crafting production-ready Python backends, AI systems, full-stack platforms, and automation tools. Built and shipped DualDesk, trained machinery fault models, and designed live predictive dashboards.
      </p>

      {/* All 6 Social icons — email & phone toggle the panel below */}
      <div 
        className="flex flex-wrap gap-4 items-center justify-center mt-10 animate-fade-rise-delay"
        id="hero-social-links"
      >
        {socialLinks.map((link) => {
          const isActive = (link.id === 'email' && activeContact === 'email') ||
                           (link.id === 'phone' && activeContact === 'phone');
          const isToggleable = link.id === 'email' || link.id === 'phone';
          return (
            <button
              key={link.id}
              onClick={() => handleIconClick(link.id, link.url)}
              className={`w-12 h-12 rounded-full border transition-all duration-300 flex items-center justify-center cursor-pointer ${
                isActive
                  ? link.id === 'email'
                    ? 'border-fuchsia-400/60 bg-fuchsia-400/15 text-fuchsia-300'
                    : 'border-purple-400/60 bg-purple-400/15 text-purple-300'
                  : `border-white/10 bg-black/20 backdrop-blur-md text-muted-foreground hover:text-foreground ${getSocialHoverBorder(link.id)}`
              }`}
              title={isToggleable ? (isActive ? `Hide ${link.label}` : `Show ${link.label}`) : link.label}
              id={`hero-link-${link.id}`}
            >
              {getSocialIcon(link.id)}
            </button>
          );
        })}
      </div>

      {/* Expandable Contact Detail Panel */}
      <AnimatePresence>
        {activeContact && (
          <motion.div
            key={activeContact}
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 w-full max-w-xs mx-auto"
            id="hero-contact-reveal"
          >
            {activeContact === 'email' && (
              <div className="liquid-glass rounded-2xl border border-fuchsia-400/20 bg-black/40 px-5 py-3.5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-fuchsia-400/10 border border-fuchsia-400/20 flex items-center justify-center shrink-0">
                    <Mail size={14} className="text-fuchsia-300" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest">Email</p>
                    <p className="font-mono text-xs text-foreground font-medium truncate select-text">dhillonjd.04@gmail.com</p>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('dhillonjd.04@gmail.com', 'email')}
                  className="shrink-0 w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all duration-200 cursor-pointer"
                  title="Copy email"
                  id="copy-email-btn"
                >
                  {copiedEmail ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                </button>
              </div>
            )}
            {activeContact === 'phone' && (
              <div className="liquid-glass rounded-2xl border border-purple-400/20 bg-black/40 px-5 py-3.5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-purple-400/10 border border-purple-400/20 flex items-center justify-center shrink-0">
                    <Phone size={14} className="text-purple-300" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest">Phone</p>
                    <p className="font-mono text-xs text-foreground font-medium truncate select-text">+91 98025 81601</p>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('+919802581601', 'phone')}
                  className="shrink-0 w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all duration-200 cursor-pointer"
                  title="Copy phone"
                  id="copy-phone-btn"
                >
                  {copiedPhone ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>


      {/* Hero CTAs */}
      <div className="flex flex-wrap gap-4 items-center justify-center mt-10 animate-fade-rise-delay-2" id="hero-cta-row">
        <button 
          onClick={onScrollToProjects}
          className="liquid-glass rounded-full px-14 py-5 text-base text-foreground hover:scale-[1.03] transition-transform duration-300 active:scale-[0.98] cursor-pointer"
          id="hero-journey-btn"
        >
          Begin Journey
        </button>
        <a
          href="/resume.pdf"
          download
          className="liquid-glass flex items-center gap-2 rounded-full px-8 py-5 text-base font-mono font-semibold text-foreground hover:scale-[1.03] transition-transform duration-300 active:scale-[0.98] cursor-pointer border border-white/10"
          id="hero-resume-download"
        >
          <Download size={16} />
          Resume
        </a>
      </div>
    </section>
  );
}
