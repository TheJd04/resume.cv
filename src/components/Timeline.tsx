import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react';

interface Internship {
  year: string;
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  tags: string[];
}

const internships: Internship[] = [
  {
    year: '2024',
    role: 'Software Engineering Intern',
    company: 'OctaNet Services Pvt. Ltd.',
    location: 'Remote',
    period: 'Jul 2024 – Aug 2024',
    highlights: [
      'Front-end maintenance, debugging, and SQL-based data cleaning for live client platforms.',
    ],
    tags: ['HTML', 'CSS', 'SQL', 'JavaScript'],
  },
  {
    year: '2025',
    role: 'AI & GenAI Intern',
    company: 'IIT Jammu – Career Development Services',
    location: 'Jammu, India',
    period: 'Jun 2025 – Aug 2025',
    highlights: [
      'Built LangChain + OpenAI API-powered agent workflows under IIT faculty mentorship, applying LLM automation to practical institutional use cases.',
    ],
    tags: ['Python', 'LangChain', 'OpenAI API', 'AI Agents'],
  },
  {
    year: '2026',
    role: 'Software Developer Intern',
    company: 'Cognifyz Technologies',
    location: 'Remote',
    period: 'Jan 2026 – Feb 2026',
    highlights: [
      'Developed Python backend features and REST API endpoints powering reporting dashboards.',
      'Containerized services with Docker and shipped production features through structured code reviews.',
    ],
    tags: ['Python', 'Flask', 'REST APIs', 'Docker'],
  },
  {
    year: '2026',
    role: 'Data & IT Engineering Intern',
    company: 'Pancarbo Greenfuels Pvt. Ltd.',
    location: 'Mohali, India',
    period: 'Mar 2026 – Jun 2026',
    highlights: [
      'Designed automated Python/Pandas ETL pipelines replacing manual data consolidation, cutting weekly reporting time.',
      'Optimized SQL queries and added Python data-validation checks, improving data accuracy for business decisions.',
    ],
    tags: ['Python', 'Pandas', 'MySQL', 'ETL'],
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative z-10 px-6 py-24 max-w-7xl mx-auto w-full border-t border-white/5"
    >
      {/* Section Header */}
      <div className="mb-14 text-center md:text-left">
        <h2
          className="text-4xl md:text-6xl font-normal text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
          id="timeline-heading"
        >
          Internship <em className="not-italic text-muted-foreground">Experience</em>
        </h2>
        <p className="text-muted-foreground text-sm max-w-xl mt-3 font-mono uppercase tracking-widest">
          4 professional internships across AI, backend engineering and data.
        </p>
      </div>

      {/* Vertical timeline */}
      <div className="relative border-l border-white/10 pl-8 md:pl-12 ml-3 md:ml-5 space-y-10" id="internship-timeline">

        {internships.map((intern, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="relative group"
            id={`internship-item-${i}`}
          >
            {/* Timeline dot */}
            <div className="absolute -left-[41px] md:-left-[57px] top-5 w-5 h-5 rounded-full border-2 border-emerald-400/50 bg-[#03151f] flex items-center justify-center group-hover:border-emerald-400 transition-colors duration-300">
              <div className="w-2 h-2 rounded-full bg-emerald-400/60 group-hover:bg-emerald-400 transition-colors" />
            </div>

            {/* Year badge on the line */}
            <div className="absolute -left-[90px] md:-left-[108px] top-4 hidden md:flex">
              <span className="font-mono text-[10px] text-emerald-300 font-semibold bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded-full">
                {intern.year}
              </span>
            </div>

            {/* Card */}
            <div className="liquid-glass rounded-2xl p-6 md:p-7 border border-white/10 bg-black/40 hover:border-emerald-400/20 transition-all duration-300">
              {/* Top row */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Briefcase size={14} className="text-emerald-400 shrink-0" />
                    <h3 className="text-base font-semibold text-foreground tracking-wide">
                      {intern.role}
                    </h3>
                  </div>
                  <p className="font-mono text-sm text-emerald-300/80 ml-5">{intern.company}</p>
                </div>

                <div className="flex flex-wrap gap-2 sm:shrink-0 sm:text-right">
                  <span className="flex items-center gap-1 font-mono text-[11px] text-muted-foreground bg-white/5 border border-white/5 px-2.5 py-1 rounded-lg">
                    <Calendar size={11} /> {intern.period}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[11px] text-muted-foreground bg-white/5 border border-white/5 px-2.5 py-1 rounded-lg">
                    <MapPin size={11} /> {intern.location}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-2.5 mb-4">
                {intern.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/50 mt-1.5 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                {intern.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] bg-emerald-400/8 border border-emerald-400/15 text-emerald-300/80 px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* "Present" end cap */}
        <div className="relative flex items-center gap-3 pl-0" id="timeline-present-cap">
          <div className="absolute -left-[41px] md:-left-[57px] w-5 h-5 rounded-full border-2 border-white/40 bg-[#03151f] flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-white/70 animate-pulse" />
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="font-mono text-xs text-foreground font-semibold uppercase tracking-widest">Now · Open to new roles</span>
          </div>
        </div>

      </div>
    </section>
  );
}
