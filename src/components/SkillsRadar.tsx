import { 
  educationData, 
  certificationsList, 
  skillsByGroup,
  LINKEDIN_CERTS_URL
} from '../data';
import { Award, GraduationCap, Layers, ExternalLink } from 'lucide-react';



export default function SkillsRadar() {
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

        </div>

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
