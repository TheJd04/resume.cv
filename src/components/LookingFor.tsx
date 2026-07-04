import React from 'react';
import { motion } from 'motion/react';
import { Target, MapPin, Briefcase, Zap, Globe, Clock, MessageSquare } from 'lucide-react';

interface RoleCard {
  icon: React.ReactNode;
  title: string;
  desc: string;
  tags: string[];
  color: string;
  borderColor: string;
}

const roles: RoleCard[] = [
  {
    icon: <Briefcase size={18} />,
    title: 'Software Development Engineer',
    desc: 'Building production-grade backend systems, REST APIs, and full-stack platforms from the ground up.',
    tags: ['Python', 'Flask', 'Node.js', 'REST APIs'],
    color: 'text-blue-300',
    borderColor: 'border-blue-400/20',
  },
  {
    icon: <Zap size={18} />,
    title: 'AI / ML Engineer',
    desc: 'Designing intelligent pipelines — LLM agents, predictive models, and automation systems that ship to production.',
    tags: ['LangChain', 'CrewAI', 'Scikit-learn', 'OpenAI API'],
    color: 'text-amber-300',
    borderColor: 'border-amber-400/20',
  },
  {
    icon: <Globe size={18} />,
    title: 'Backend / DevOps Engineer',
    desc: 'Deploying containerised, cloud-native services with solid CI/CD and database-optimised architectures.',
    tags: ['Docker', 'AWS', 'MySQL', 'PostgreSQL'],
    color: 'text-emerald-300',
    borderColor: 'border-emerald-400/20',
  },
];

const preferences = [
  { icon: <MapPin size={13} />, label: 'Location', value: 'Mohali · Delhi NCR · Remote' },
  { icon: <Clock size={13} />, label: 'Type', value: 'Full-time · Freelance · Contract' },
  { icon: <Target size={13} />, label: 'Available From', value: 'Immediately' },
  { icon: <MessageSquare size={13} />, label: 'Languages', value: 'English · Hindi · Punjabi' },
];

export default function LookingFor() {
  return (
    <section
      id="looking-for"
      className="relative z-10 px-6 py-24 max-w-7xl mx-auto w-full border-t border-white/5"
    >
      {/* Header */}
      <div className="mb-14 text-center md:text-left">
        <h2
          className="text-4xl md:text-6xl font-normal text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
          id="looking-for-heading"
        >
          What I'm <em className="not-italic text-muted-foreground">Looking For</em>
        </h2>
        <p className="text-muted-foreground text-sm max-w-xl mt-3 font-mono uppercase tracking-widest">
          Roles, stacks and environments where I can do my best work.
        </p>
      </div>

      {/* Role Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" id="role-cards-grid">
        {roles.map((role, i) => (
          <motion.div
            key={role.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            className={`liquid-glass rounded-2xl p-6 border ${role.borderColor} bg-black/40 hover:border-white/20 transition-all duration-300 group flex flex-col gap-4`}
            id={`role-card-${i}`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 ${role.color} group-hover:scale-110 transition-transform duration-300`}>
              {role.icon}
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-foreground leading-snug">{role.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{role.desc}</p>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-white/5">
              {role.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] bg-white/5 border border-white/5 text-muted-foreground px-2 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Preferences strip */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="liquid-glass rounded-2xl border border-white/10 bg-black/40 px-6 py-5 flex flex-wrap items-center justify-between gap-6"
        id="preferences-strip"
      >
        {preferences.map((p) => (
          <div key={p.label} className="flex items-center gap-3" id={`pref-${p.label.toLowerCase()}`}>
            <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground shrink-0">
              {p.icon}
            </div>
            <div>
              <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">{p.label}</p>
              <p className="font-mono text-xs text-foreground font-semibold mt-0.5">{p.value}</p>
            </div>
          </div>
        ))}

        {/* CTA nudge */}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="ml-auto liquid-glass rounded-full px-6 py-2.5 text-xs font-mono font-semibold text-foreground border border-white/10 hover:border-white/30 hover:scale-[1.03] transition-all duration-300 flex items-center gap-2 shrink-0"
          id="looking-for-cta"
        >
          <Target size={12} /> Let's Talk
        </a>
      </motion.div>
    </section>
  );
}
