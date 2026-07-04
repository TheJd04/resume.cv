import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Zap } from 'lucide-react';

interface Skill {
  name: string;
  pct: number;
  color: string;
}

const topSkills: Skill[] = [
  { name: 'Python', pct: 95, color: '#3b82f6' },
  { name: 'React & JavaScript', pct: 88, color: '#a855f7' },
  { name: 'SQL & Databases', pct: 90, color: '#06b6d4' },
  { name: 'AI / LLM Pipelines', pct: 92, color: '#f59e0b' },
  { name: 'DevOps & AWS', pct: 80, color: '#10b981' },
  { name: 'Workflow Automation', pct: 85, color: '#ec4899' },
];

function AnimatedBar({ pct, color }: { pct: number; color: string }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(pct), 100);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [pct]);

  return (
    <div ref={ref} className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${width}%`, background: `linear-gradient(90deg, ${color}88, ${color})` }}
      />
    </div>
  );
}

export default function ProficiencyBars() {
  return (
    <section
      id="proficiency"
      className="relative z-10 px-6 py-24 max-w-7xl mx-auto w-full border-t border-white/5"
    >
      <div className="mb-14 text-center md:text-left">
        <h2
          className="text-4xl md:text-6xl font-normal text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
          id="proficiency-heading"
        >
          Core <em className="not-italic text-muted-foreground">Proficiencies</em>
        </h2>
        <p className="text-muted-foreground text-sm max-w-xl mt-3 font-mono uppercase tracking-widest">
          Self-assessed skill depth across active production domains.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl" id="proficiency-grid">
        {topSkills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="liquid-glass rounded-xl px-5 py-4 border border-white/10 bg-black/40 space-y-3 group hover:border-white/20 transition-colors duration-300"
            id={`skill-bar-${skill.name.toLowerCase().replace(/[^a-z]/g, '-')}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ background: skill.color }} />
                <span className="font-mono text-xs text-foreground font-semibold tracking-wide">
                  {skill.name}
                </span>
              </div>
              <span
                className="font-mono text-xs font-bold"
                style={{ color: skill.color }}
              >
                {skill.pct}%
              </span>
            </div>
            <AnimatedBar pct={skill.pct} color={skill.color} />
          </motion.div>
        ))}
      </div>

      {/* Callout note */}
      <div className="mt-10 flex items-center gap-2 text-muted-foreground/50 font-mono text-[10px] uppercase tracking-widest" id="proficiency-note">
        <Zap size={11} />
        <span>Percentages reflect relative depth in production use, not textbook coverage.</span>
      </div>
    </section>
  );
}
