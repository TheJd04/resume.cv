import React from 'react';
import { motion } from 'motion/react';
import { researchPapersData } from '../data';
import { BookOpen, ExternalLink, Award, Sparkles } from 'lucide-react';

export default function Research() {
  return (
    <section 
      id="research" 
      className="relative z-10 px-6 py-24 max-w-7xl mx-auto w-full border-t border-white/5"
    >
      {/* Section Header */}
      <div className="mb-16 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs mb-3">
          <Award size={13} />
          <span>IEEE PEER-REVIEWED PUBLICATION</span>
        </div>
        <h2 
          className="text-4xl md:text-6xl font-normal text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
          id="research-heading"
        >
          Research & <em className="not-italic text-muted-foreground">Publications</em>
        </h2>
        <p className="text-muted-foreground text-sm max-w-xl mt-3 font-mono uppercase tracking-widest">
          Academic literature, hybrid ML model design, and published IEEE works.
        </p>
      </div>

      {/* Publications List */}
      <div className="space-y-8" id="research-list">
        {researchPapersData.map((paper, index) => (
          <motion.div
            key={paper.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="liquid-glass rounded-2xl p-6 md:p-10 border border-white/10 hover:border-white/25 transition-all duration-500 bg-black/40 group relative overflow-hidden"
            id={`research-card-${paper.id}`}
          >
            {/* Ambient Glow */}
            <div className="absolute -inset-x-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700 pointer-events-none" />

            <div className="flex flex-col lg:flex-row justify-between gap-8 items-start">
              <div className="space-y-6 max-w-4xl">
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-[10px] bg-blue-500/15 border border-blue-400/30 text-blue-300 px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
                    {paper.subtitle}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {paper.publisher} • {paper.year}
                  </span>
                </div>

                {/* Title */}
                <h3 
                  className="text-2xl md:text-3xl font-normal text-foreground leading-tight tracking-wide"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {paper.title}
                </h3>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2" id={`research-tags-${paper.id}`}>
                  {paper.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="font-mono text-[11px] bg-white/5 border border-white/10 text-muted-foreground px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="space-y-3 text-xs md:text-sm text-muted-foreground/90 leading-relaxed pt-2" id={`research-highlights-${paper.id}`}>
                  {paper.highlights.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* External Link CTA Button */}
              <div className="shrink-0 w-full lg:w-auto pt-4 lg:pt-0">
                <a
                  href={paper.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full lg:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-black font-mono text-xs font-semibold hover:bg-neutral-200 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer shadow-lg shadow-white/5"
                  id={`link-paper-${paper.id}`}
                >
                  <BookOpen size={15} />
                  <span>READ ON IEEE XPLORE</span>
                  <ExternalLink size={14} className="opacity-70" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
