import React from 'react';
import { motion } from 'motion/react';

/* 
  Tech stack logos via devicons CDN.
  Duplicated array is intentional — creates seamless infinite loop 
  by placing identical copy immediately after.
*/

interface TechItem {
  name: string;
  icon: string; // devicon CDN url or emoji fallback
  color: string; // subtle glow tint
}

const techStack: TechItem[] = [
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', color: '#3b82f6' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', color: '#f59e0b' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', color: '#06b6d4' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', color: '#10b981' },
  { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg', color: '#ffffff' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', color: '#06b6d4' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', color: '#f59e0b' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', color: '#ef4444' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', color: '#f59e0b' },
  { name: 'Electron', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg', color: '#06b6d4' },
  { name: 'Jupyter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg', color: '#f97316' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg', color: '#3b82f6' },
];


function TechCard({ item }: { item: TechItem }) {
  return (
    <div
      className="flex items-center gap-3 mx-4 px-5 py-3 rounded-2xl border border-white/8 bg-black/30 backdrop-blur-sm hover:border-white/20 transition-colors duration-300 shrink-0 group cursor-default"
      style={{ boxShadow: `0 0 20px ${item.color}10` }}
    >
      <img
        src={item.icon}
        alt={item.name}
        className="w-7 h-7 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        loading="lazy"
        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
      />
      <span className="font-mono text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300 whitespace-nowrap font-medium">
        {item.name}
      </span>
    </div>
  );
}

export default function TechMarquee() {
  const doubled = [...techStack, ...techStack]; // seamless loop

  return (
    <section
      id="tech-stack"
      className="relative z-10 py-16 w-full border-t border-white/5 overflow-hidden"
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, hsl(201,100%,13%) 0%, transparent 100%)' }}
      />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(270deg, hsl(201,100%,13%) 0%, transparent 100%)' }}
      />

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 px-6"
        id="tech-marquee-header"
      >
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
          ⬡ Tech Stack — hover to pause
        </p>
      </motion.div>

      {/* Scrolling track */}
      <div className="flex overflow-hidden select-none" id="tech-marquee-track">
        <div className="flex animate-marquee">
          {doubled.map((item, i) => (
            <TechCard key={`${item.name}-${i}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
