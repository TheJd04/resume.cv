import React from 'react';
import { motion } from 'motion/react';
import { projectsData } from '../data';
import { 
  Github, 
  ExternalLink, 
  Database, 
  Sparkles 
} from 'lucide-react';

export default function Projects() {
  return (
    <section 
      id="projects" 
      className="relative z-10 px-6 py-28 max-w-7xl mx-auto w-full border-t border-white/5"
    >
      {/* Section Title */}
      <div className="mb-16 text-center md:text-left">
        <h2 
          className="text-4xl md:text-6xl font-normal text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
          id="projects-heading"
        >
          Deployed <em className="not-italic text-muted-foreground">Architectures</em>
        </h2>
        <p className="text-muted-foreground text-sm max-w-xl mt-3 font-mono uppercase tracking-widest">
          Production systems, AI agents, and custom applications built for real impact.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects-grid">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="liquid-glass rounded-2xl p-6 md:p-8 flex flex-col justify-between border border-white/10 hover:border-white/25 transition-all duration-500 bg-black/40 group relative overflow-hidden"
            id={`project-card-${project.id}`}
          >
            {/* Ambient Background Glow on Hover */}
            <div className="absolute -inset-x-20 -top-20 h-40 w-40 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700 pointer-events-none" />

            <div className="space-y-6">
              {/* Header with Title and Year */}
              <div className="flex items-start gap-4">
                <div>
                  <span className="font-mono text-[10px] text-muted-foreground tracking-widest font-semibold uppercase block">
                    {project.subtitle}
                  </span>
                  <h3 
                    className="text-2xl font-normal text-foreground mt-1 leading-tight tracking-wide"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Technologies Used */}
              <div className="flex flex-wrap gap-1.5" id={`tech-list-${project.id}`}>
                {project.tech.map((techItem, i) => (
                  <span 
                    key={i} 
                    className="font-mono text-[10px] bg-white/5 border border-white/5 text-muted-foreground px-2 py-0.5 rounded-full"
                  >
                    {techItem}
                  </span>
                ))}
              </div>

              {/* Bullet highlights */}
              <ul className="space-y-3.5 text-xs text-muted-foreground/90 pl-1 leading-relaxed" id={`highlights-${project.id}`}>
                {project.highlights.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outbound Links */}
            <div className="flex flex-wrap gap-3 pt-6 mt-6 border-t border-white/5" id={`actions-${project.id}`}>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white text-black font-mono text-xs font-semibold transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
                  id={`link-live-${project.id}`}
                >
                  <ExternalLink size={13} />
                  LAUNCH APPLICATION
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 font-mono text-xs font-semibold text-foreground transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
                  id={`link-github-${project.id}`}
                >
                  <Github size={13} />
                  SOURCE CODE
                </a>
              )}

              {project.kaggleUrl && (
                <a
                  href={project.kaggleUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 font-mono text-xs font-semibold text-foreground transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
                  id={`link-kaggle-${project.id}`}
                >
                  <Database size={13} />
                  KAGGLE NOTEBOOK
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
