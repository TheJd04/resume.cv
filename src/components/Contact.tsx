import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { socialLinks } from '../data';
import { 
  Send, 
  Cpu, 
  CheckCircle2, 
  Linkedin, 
  Github, 
  Code, 
  Database, 
  Mail, 
  Phone, 
  ExternalLink 
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const [isTransmitting, setIsTransmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsTransmitting(true);
    setTimeout(() => {
      setTimeout(() => {
        setIsTransmitting(false);
        setIsSent(true);
      }, 1000);
    }, 800);
  };

  const getSocialIcon = (id: string) => {
    switch(id) {
      case 'linkedin': return <Linkedin size={16} />;
      case 'github': return <Github size={16} />;
      case 'leetcode': return <Code size={16} />;
      case 'kaggle': return <Database size={16} />;
      case 'email': return <Mail size={16} />;
      case 'phone': return <Phone size={16} />;
      default: return <ExternalLink size={16} />;
    }
  };

  const getSocialHoverStyles = (id: string) => {
    switch(id) {
      case 'linkedin': return 'hover:text-white hover:border-white/40 hover:bg-white/5';
      case 'github': return 'hover:text-white hover:border-white/40 hover:bg-white/5';
      case 'leetcode': return 'hover:text-white hover:border-white/40 hover:bg-white/5';
      case 'kaggle': return 'hover:text-white hover:border-white/40 hover:bg-white/5';
      case 'email': return 'hover:text-white hover:border-white/40 hover:bg-white/5';
      case 'phone': return 'hover:text-white hover:border-white/40 hover:bg-white/5';
      default: return 'hover:text-white';
    }
  };

  return (
    <section 
      id="contact" 
      className="relative z-10 px-6 py-28 max-w-7xl mx-auto w-full border-t border-white/5"
    >
      {/* Section Title */}
      <div className="mb-16 text-center md:text-left">
        <h2 
          className="text-4xl md:text-6xl font-normal text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
          id="contact-heading"
        >
          Let's <em className="not-italic text-muted-foreground">Work Together</em>
        </h2>
        <p className="text-muted-foreground text-sm max-w-xl mt-3 font-mono uppercase tracking-widest">
          Have a project, opportunity, or just want to say hi? Drop a message below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10" id="contact-workspace">
        {/* Contact Form / Transmitted State (7 Cols) */}
        <div className="lg:col-span-7" id="contact-form-column">
          <AnimatePresence mode="wait">
            {isSent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="liquid-glass rounded-2xl p-8 border border-white/10 bg-black/40 text-center space-y-6 flex flex-col items-center justify-center min-h-[360px]"
                id="connection-success-card"
              >
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/25 flex items-center justify-center text-foreground animate-bounce">
                  <CheckCircle2 size={28} />
                </div>
                <div className="space-y-2">
                  <h3 
                    className="text-3xl font-normal text-foreground"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    Transmission Dispatched
                  </h3>
                  <p className="text-xs text-muted-foreground font-mono uppercase max-w-md mx-auto">
                    Payload received and delivered securely to dhillonjd.04@gmail.com
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsSent(false);
                    setFormData({ name: '', email: '', message: '' });
                    setTerminalLogs(['SESSION RE-INITIALIZED', 'STANDBY FOR PORT CONNECTION...']);
                  }}
                  className="liquid-glass rounded-full px-8 py-3 text-xs font-mono text-foreground font-bold tracking-wider uppercase transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
                  id="reset-form-btn"
                >
                  RE-OPEN TRANSMISSION LINK
                </button>
              </motion.div>
            ) : (
              <form 
                onSubmit={handleFormSubmit} 
                className="liquid-glass rounded-2xl p-6 md:p-8 border border-white/10 bg-black/40 space-y-6"
                id="secure-handshake-form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div id="form-group-name">
                    <label className="block font-mono text-[10px] text-muted-foreground tracking-widest uppercase mb-2 font-semibold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                      disabled={isTransmitting}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm font-mono text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div id="form-group-email">
                    <label className="block font-mono text-[10px] text-muted-foreground tracking-widest uppercase mb-2 font-semibold">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                      disabled={isTransmitting}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm font-mono text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div id="form-group-message">
                  <label className="block font-mono text-[10px] text-muted-foreground tracking-widest uppercase mb-2 font-semibold">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                    disabled={isTransmitting}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm font-mono text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors resize-none"
                    placeholder="Hey Jagjeet, I'd love to discuss..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isTransmitting}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-white text-black hover:scale-[1.01] active:scale-[0.99] disabled:bg-white/40 disabled:scale-100 disabled:cursor-not-allowed font-mono text-sm font-bold tracking-widest uppercase transition-all cursor-pointer"
                  id="submit-handshake-btn"
                >
                  {isTransmitting ? (
                    <>
                      <Cpu className="animate-spin" size={16} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </AnimatePresence>
        </div>

        {/* Social channels */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6" id="contact-details-column">
          <div className="liquid-glass rounded-2xl p-6 border border-white/10 bg-black/40 space-y-4" id="social-quick-links">
            <h4 className="font-mono text-xs text-muted-foreground font-semibold uppercase tracking-wider border-b border-white/10 pb-2">
              SECURE ACCESS ENDPOINTS
            </h4>

            <div className="grid grid-cols-2 gap-3" id="social-grid">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center justify-between p-3 rounded-xl border border-white/5 bg-white/5 font-mono text-[11px] group transition-all duration-300 text-muted-foreground ${getSocialHoverStyles(link.id)}`}
                  id={`contact-social-${link.id}`}
                >
                  <div className="flex items-center gap-2 truncate">
                    {getSocialIcon(link.id)}
                    <span className="uppercase tracking-wide font-medium truncate">{link.label}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
