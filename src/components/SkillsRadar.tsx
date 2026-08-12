import React, { useState } from 'react';
import { 
  educationData, 
  certificationsList, 
  skillsByGroup,
  LINKEDIN_CERTS_URL
} from '../data';
import { Award, GraduationCap, Layers, ExternalLink, Code, Flame, CheckCircle2, X, ShieldCheck } from 'lucide-react';

export default function SkillsRadar() {
  const [showBadgeModal, setShowBadgeModal] = useState(false);
  return (
    <section 
      id="skills" 
      className="relative z-10 px-6 py-28 max-w-7xl mx-auto w-full border-t border-white/5"
    >
      {/* Section Title */}
      <div className="mb-16 text-center md:text-left">
        <h2 
          className="text-4xl md:text-6xl font-normal text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
          id="skills-heading"
        >
          Cognitive <em className="not-italic text-muted-foreground">Spectrum</em>
        </h2>
        <p className="text-muted-foreground text-sm max-w-xl mt-3 font-mono uppercase tracking-widest">
          Comprehensive technical credentials, certifications, and language proficiency mapping.
        </p>
      </div>

      <div className="space-y-10" id="edu-certs-container">
        
          {/* Education Block */}
          <div className="space-y-4" id="education-block">
            <h3 className="font-mono text-xs text-muted-foreground tracking-widest uppercase flex items-center gap-2">
              <GraduationCap size={15} /> Academic Grounding
            </h3>
            
            <div className="liquid-glass rounded-2xl p-6 md:p-8 border border-white/10 bg-black/40 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="font-mono text-xs text-muted-foreground tracking-widest block uppercase">
                  {educationData.school}
                </span>
                <h4 
                  className="text-2xl font-normal text-foreground"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {educationData.degree}
                </h4>
              </div>
              <div className="text-left md:text-right font-mono text-sm border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6 shrink-0 space-y-1">
                <p className="text-foreground font-semibold">{educationData.gpa}</p>
                <p className="text-muted-foreground text-xs">{educationData.period}</p>
              </div>
            </div>
          </div>

          {/* Certifications Block */}
          <div className="space-y-4" id="certifications-block">
            <div className="flex items-center justify-between">
              <h3 className="font-mono text-xs text-muted-foreground tracking-widest uppercase flex items-center gap-2">
                <Award size={15} /> Professional Credentials
              </h3>
              <span className="font-mono text-[10px] text-muted-foreground/50 uppercase tracking-widest">
                20+ total
              </span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" id="certs-grid">
              {/* Show first 6 featured certs */}
              {certificationsList.slice(0, 6).map((cert, index) => (
                <div 
                  key={index} 
                  className="liquid-glass rounded-xl p-4 border border-white/10 bg-black/45 flex items-center gap-3"
                  id={`cert-item-${index}`}
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-foreground shrink-0 select-none">
                    <Award size={16} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs text-foreground/95 font-medium leading-tight block select-text">
                      {cert.name}
                    </span>
                    <span className="text-[10px] text-muted-foreground/60 font-mono mt-0.5 block">
                      {cert.issuer}
                    </span>
                  </div>
                </div>
              ))}

              {/* View All card */}
              <a
                href={LINKEDIN_CERTS_URL}
                target="_blank"
                rel="noreferrer"
                id="cert-view-all"
                className="liquid-glass rounded-xl p-4 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/25 transition-all duration-300 flex items-center gap-3 group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-foreground shrink-0 group-hover:scale-110 transition-transform">
                  <ExternalLink size={15} />
                </div>
                <div className="min-w-0">
                  <span className="text-xs text-foreground font-semibold block leading-tight">
                    View All 20+ Certifications
                  </span>
                  <span className="text-[10px] text-muted-foreground/60 font-mono mt-0.5 block group-hover:text-white/60 transition-colors">
                    Opens LinkedIn →
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Coding Badges & Streaks Block */}
          <div className="space-y-4" id="coding-badges-block">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="font-mono text-xs text-muted-foreground tracking-widest uppercase flex items-center gap-2">
                <Code size={15} className="text-[#ffa116]" /> Verified Coding Badges & Streaks
              </h3>
              <span className="font-mono text-[10px] text-[#ffa116] bg-[#ffa116]/10 border border-[#ffa116]/30 px-2.5 py-1 rounded-full uppercase tracking-widest flex items-center gap-1.5 font-semibold">
                <Flame size={12} className="animate-pulse" /> 50+ Days Streak 2026
              </span>
            </div>

            <div 
              onClick={() => setShowBadgeModal(true)}
              className="liquid-glass rounded-2xl p-6 md:p-8 border border-[#ffa116]/20 hover:border-[#ffa116]/50 bg-gradient-to-r from-[#ffa116]/10 via-black/40 to-black/50 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300 group cursor-pointer relative overflow-hidden"
              id="leetcode-badge-card"
            >
              {/* Subtle glowing backlight */}
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-[#ffa116]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#ffa116]/20 transition-all duration-500" />

              <div className="flex items-center gap-5 z-10">
                {/* Badge Image thumbnail */}
                <div className="w-16 h-16 rounded-xl bg-black/60 border border-[#ffa116]/30 p-1.5 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-[#ffa116]/60 transition-all duration-300 shadow-lg shadow-[#ffa116]/5">
                  <img 
                    src="/leetcode-50-days-2026.png" 
                    alt="LeetCode 50 Days Badge 2026" 
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="space-y-1.5 select-text">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-[10px] bg-[#ffa116]/20 text-[#ffa116] border border-[#ffa116]/40 px-2 py-0.5 rounded uppercase font-semibold tracking-wider flex items-center gap-1">
                      <ShieldCheck size={11} /> LeetCode Official Badge
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">User: THEJD04</span>
                  </div>
                  <h4 
                    className="text-2xl font-normal text-foreground group-hover:text-[#ffa116] transition-colors"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    50 Days Badge 2026
                  </h4>
                  <p className="text-xs text-muted-foreground font-mono">
                    SOLVING PROBLEMS 50+ DAYS IN 2026
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 z-10 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6 shrink-0">
                <button
                  type="button"
                  className="px-4 py-2 rounded-xl bg-[#ffa116]/10 border border-[#ffa116]/30 text-[#ffa116] hover:bg-[#ffa116] hover:text-black font-mono text-xs font-semibold transition-all duration-300 flex items-center gap-2"
                >
                  Inspect Badge <ExternalLink size={13} />
                </button>
              </div>
            </div>
          </div>

        </div>

      {/* Interactive Badge Lightbox Modal */}
      {showBadgeModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setShowBadgeModal(false)}
        >
          <div 
            className="relative w-full max-w-lg liquid-glass rounded-3xl border border-[#ffa116]/40 bg-[#090d12]/95 p-6 md:p-8 space-y-6 shadow-2xl shadow-[#ffa116]/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowBadgeModal(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 flex items-center justify-center text-foreground transition-colors"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className="text-center space-y-2">
              <span className="font-mono text-xs text-[#ffa116] uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5">
                <Flame size={14} /> LeetCode Achievement Award
              </span>
              <h3 
                className="text-3xl font-normal text-foreground"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                50 Days Badge 2026
              </h3>
              <p className="font-mono text-xs text-muted-foreground">Recipient: THEJD04</p>
            </div>

            {/* Large Badge Graphic */}
            <div className="relative w-48 h-48 mx-auto rounded-2xl bg-black/60 border border-[#ffa116]/30 p-4 flex items-center justify-center shadow-inner group">
              <div className="absolute inset-0 bg-[#ffa116]/10 rounded-2xl blur-xl pointer-events-none" />
              <img 
                src="/leetcode-50-days-2026.png" 
                alt="LeetCode 50 Days Badge 2026" 
                className="w-full h-full object-contain relative z-10 transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Badge Metadata Details */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 font-mono text-xs space-y-2 text-muted-foreground">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Milestone:</span>
                <span className="text-foreground font-semibold">50+ Days Problem Solving</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Year:</span>
                <span className="text-foreground font-semibold">2026</span>
              </div>
              <div className="flex justify-between">
                <span>Status:</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 size={13} /> Verified on LeetCode
                </span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              <a
                href="https://leetcode.com/u/THEJD04"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 rounded-xl bg-[#ffa116] text-black font-mono text-xs font-bold hover:bg-[#ffa116]/90 transition-colors flex items-center justify-center gap-2"
              >
                View Profile on LeetCode <ExternalLink size={14} />
              </a>
              <button
                onClick={() => setShowBadgeModal(false)}
                className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground font-mono text-xs hover:bg-white/10 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Skills Grouped by Category */}
      <div className="mt-12 space-y-4" id="skills-directory-block">
        <h3 className="font-mono text-xs text-muted-foreground tracking-widest uppercase flex items-center gap-2">
          <Layers size={15} /> Complete Technology Directory
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6" id="skills-directory-grid">
          {Object.entries(skillsByGroup).map(([groupName, groupItems], index) => (
            <div 
              key={groupName} 
              className="liquid-glass rounded-xl p-5 border border-white/5 bg-black/40 space-y-3"
              id={`skill-group-${groupName.toLowerCase()}`}
            >
              <h4 className="font-mono text-xs text-foreground font-semibold uppercase tracking-wider border-b border-white/10 pb-2">
                {groupName.replace(/([A-Z])/g, ' $1').trim()}
              </h4>
              <div className="flex flex-wrap gap-1.5" id={`group-items-${groupName.toLowerCase()}`}>
                {groupItems.map((item) => (
                  <span 
                    key={item} 
                    className="font-mono text-[10px] bg-white/5 border border-white/5 text-muted-foreground px-2 py-1 rounded select-text"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
