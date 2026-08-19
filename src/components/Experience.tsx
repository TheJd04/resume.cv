import React, { useState } from 'react';
import { motion } from 'motion/react';
import { experienceDataList, ExperienceData } from '../data';
import { Briefcase, Calendar, MapPin, ShieldCheck, ExternalLink, X, Eye } from 'lucide-react';

export default function Experience() {
  const [selectedExpCert, setSelectedExpCert] = useState<ExperienceData | null>(null);

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

              {/* Certificate Button if available */}
              {exp.certificateImage && (
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between flex-wrap gap-3">
                  <span className="font-mono text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                    <ShieldCheck size={14} /> Official Internship Credential
                  </span>
                  <button
                    onClick={() => setSelectedExpCert(exp)}
                    className="px-3.5 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500 hover:text-black font-mono text-xs font-semibold transition-all flex items-center gap-1.5 shadow-sm"
                  >
                    <Eye size={13} /> View Certificate
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Internship Certificate Lightbox Modal */}
      {selectedExpCert && selectedExpCert.certificateImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in overflow-y-auto"
          onClick={() => setSelectedExpCert(null)}
        >
          <div 
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto liquid-glass rounded-3xl border border-amber-500/40 bg-[#0a0e14]/95 p-6 md:p-8 space-y-6 shadow-2xl shadow-amber-500/20 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedExpCert(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 flex items-center justify-center text-foreground transition-colors z-20"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className="text-center space-y-2 pt-2 md:pt-0">
              <span className="font-mono text-xs text-amber-400 uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5">
                <ShieldCheck size={15} /> Verified Internship Completion Certificate
              </span>
              <h3 
                className="text-2xl md:text-3xl font-normal text-foreground leading-snug"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {selectedExpCert.role}
              </h3>
              <p className="font-mono text-xs text-muted-foreground">{selectedExpCert.company} • {selectedExpCert.period}</p>
            </div>

            {/* Certificate Image */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-black/80 border border-amber-500/30 shadow-xl group">
              <img 
                src={selectedExpCert.certificateImage} 
                alt={`${selectedExpCert.role} Certificate`}
                className="w-full h-auto object-contain max-h-[420px] mx-auto rounded-2xl transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>

            {/* Certificate Details */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 font-mono text-xs space-y-2 text-muted-foreground">
              {selectedExpCert.certificateId && (
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Certificate ID:</span>
                  <span className="text-amber-400 font-bold select-all">{selectedExpCert.certificateId}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Verification Status:</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <ShieldCheck size={13} /> Official & Verified Internship
                </span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={selectedExpCert.certificateImage}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 rounded-xl bg-amber-500 text-black font-mono text-xs font-bold hover:bg-amber-400 transition-colors flex items-center justify-center gap-2"
              >
                Open Full Resolution <ExternalLink size={14} />
              </a>
              <button
                onClick={() => setSelectedExpCert(null)}
                className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground font-mono text-xs hover:bg-white/10 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
