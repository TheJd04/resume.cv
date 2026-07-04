import React from 'react';
import { motion } from 'motion/react';
import { experienceDataList } from '../data';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  return (
    <section 
      id="experience" 
      className="relative z-10 px-6 py-28 max-w-7xl mx-auto w-full border-t border-white/5"
    >
      {/* Section Title */}
      <div className="mb-16 text-center md:text-left">
        <h2 
          className="text-4xl md:text-6xl font-normal text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
          id="experience-heading"
        >
          Mission <em className="not-italic text-muted-foreground">Records</em>
        </h2>
        <p className="text-muted-foreground text-sm max-w-xl mt-3 font-mono uppercase tracking-widest">
          Chronicles of professional deployments, internships, and engineering contributions.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative border-l border-white/10 pl-6 md:pl-10 ml-4 md:ml-6 space-y-12 max-w-4xl" id="experience-timeline">
        {experienceDataList.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            className="relative group"
            id={`exp-timeline-item-${exp.id}`}
          >
            {/* Timeline dot */}
            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full border border-white/20 bg-[#03151f] flex items-center justify-center group-hover:border-white transition-colors duration-300">
              <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white transition-colors" />
            </div>

            {/* Content box */}
            <div className="liquid-glass rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/25 transition-all duration-300 bg-black/40">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground tracking-wide flex items-center gap-2">
                    <Briefcase size={16} className="text-muted-foreground" />
                    {exp.role}
                  </h3>
                  <p className="text-sm text-muted-foreground font-mono mt-1">
                    {exp.company}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground font-mono bg-white/5 px-3 py-1.5 rounded border border-white/5 select-none md:self-start">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {exp.period}
                  </div>
                  <span className="text-white/20">|</span>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={12} />
                    {exp.location}
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-3.5 text-xs md:text-sm text-muted-foreground pl-1 leading-relaxed" id={`exp-bullets-${exp.id}`}>
                {exp.highlights.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-2 shrink-0 animate-pulse" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
