import React from 'react';
import { motion } from 'motion/react';
import { GitPullRequest, GitMerge, ExternalLink } from 'lucide-react';

interface Contribution {
  id: string;
  repo: string;
  description: string;
  type: 'fix' | 'feature' | 'docs';
  url: string;
  lang: string;
}

// Jagjeet's open-source-style contributions / notable public repos
const contributions: Contribution[] = [
  {
    id: 'contrib-1',
    repo: 'TheJd04/DualDesk',
    description: 'Shipped production Windows dual-account desktop app with sandboxed sessions',
    type: 'feature',
    url: 'https://github.com/TheJd04/DualDesk',
    lang: 'Electron.js',
  },
  {
    id: 'contrib-2',
    repo: 'TheJd04/AI_Powered_job_alert',
    description: 'Automated job scraping & WhatsApp alert pipeline using n8n workflows',
    type: 'feature',
    url: 'https://github.com/TheJd04/AI_Powered_job_alert',
    lang: 'Python',
  },
  {
    id: 'contrib-3',
    repo: 'TheJd04/Personalized-Career-Coach',
    description: 'Multi-agent CrewAI career analysis system with LangChain + OpenAI',
    type: 'feature',
    url: 'https://github.com/TheJd04/Personalized-Career-Coach',
    lang: 'Python',
  },
];

const typeBadge: Record<Contribution['type'], string> = {
  feature: 'bg-purple-400/10 border-purple-400/30 text-purple-300',
  fix: 'bg-emerald-400/10 border-emerald-400/30 text-emerald-300',
  docs: 'bg-blue-400/10 border-blue-400/30 text-blue-300',
};

const typeIcon: Record<Contribution['type'], React.ReactNode> = {
  feature: <GitPullRequest size={12} />,
  fix: <GitMerge size={12} />,
  docs: <GitPullRequest size={12} />,
};

export default function OpenSource() {
  return (
    <section
      id="opensource"
      className="relative z-10 px-6 py-16 max-w-7xl mx-auto w-full border-t border-white/5"
    >
      <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
        <div>
          <h2
            className="text-4xl md:text-5xl font-normal text-foreground"
            style={{ fontFamily: "'Instrument Serif', serif" }}
            id="opensource-heading"
          >
            Open <em className="not-italic text-muted-foreground">Source</em>
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mt-2 font-mono uppercase tracking-widest">
            Public repos & contributions shipped in the open.
          </p>
        </div>
        <a
          href="https://github.com/TheJd04"
          target="_blank"
          rel="noreferrer"
          className="liquid-glass rounded-full px-5 py-2.5 text-xs font-mono font-semibold text-foreground border border-white/10 hover:border-white/25 hover:scale-[1.03] transition-all duration-300 flex items-center gap-2 shrink-0"
          id="opensource-view-all"
        >
          View All Repos <ExternalLink size={12} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5" id="opensource-grid">
        {contributions.map((c, i) => (
          <motion.a
            key={c.id}
            href={c.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="liquid-glass rounded-xl p-5 border border-white/10 bg-black/40 hover:border-white/25 transition-all duration-300 group flex flex-col gap-3"
            id={`contrib-card-${c.id}`}
          >
            <div className="flex items-start justify-between gap-3">
              <span className="font-mono text-xs text-foreground font-semibold break-all leading-tight group-hover:text-white transition-colors">
                {c.repo}
              </span>
              <ExternalLink size={12} className="text-muted-foreground shrink-0 mt-0.5 group-hover:text-foreground transition-colors" />
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{c.description}</p>
            <div className="flex items-center gap-2 mt-auto pt-2">
              <span className={`flex items-center gap-1 font-mono text-[10px] px-2 py-0.5 rounded-full border ${typeBadge[c.type]}`}>
                {typeIcon[c.type]}
                {c.type}
              </span>
              <span className="font-mono text-[10px] bg-white/5 border border-white/5 text-muted-foreground px-2 py-0.5 rounded-full">
                {c.lang}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
