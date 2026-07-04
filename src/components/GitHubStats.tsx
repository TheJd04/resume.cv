import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Github, Star, GitBranch, Activity, Flame } from 'lucide-react';

interface GHStats {
  repos: number;
  followers: number;
  stars: number;
}

const GITHUB_USER = 'TheJd04';

export default function GitHubStats() {
  const [stats, setStats] = useState<GHStats>({ repos: 14, followers: 12, stars: 27 });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch(`https://api.github.com/users/${GITHUB_USER}`);
        if (!res.ok) throw new Error('rate limited');
        const data = await res.json();

        // Fetch total star count across repos
        const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100`);
        let stars = 0;
        if (reposRes.ok) {
          const repos = await reposRes.json();
          stars = repos.reduce((acc: number, r: { stargazers_count: number }) => acc + (r.stargazers_count || 0), 0);
        }

        setStats({
          repos: data.public_repos ?? 14,
          followers: data.followers ?? 12,
          stars,
        });
      } catch {
        // keep fallback values
      } finally {
        setLoaded(true);
      }
    }
    fetchStats();
  }, []);

  const statItems = [
    { icon: <GitBranch size={14} />, label: 'Public Repos', value: stats.repos },
    { icon: <Star size={14} />, label: 'Total Stars', value: stats.stars },
    { icon: <Activity size={14} />, label: 'Followers', value: stats.followers },
    { icon: <Flame size={14} />, label: 'Streak', value: '12d' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 16 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-2xl mx-auto mt-10"
      id="github-stats-bar"
    >
      <a
        href={`https://github.com/${GITHUB_USER}`}
        target="_blank"
        rel="noreferrer"
        className="block group"
        id="github-stats-link"
      >
        <div className="liquid-glass rounded-2xl border border-white/10 bg-black/40 px-6 py-4 flex flex-wrap items-center justify-between gap-4 hover:border-white/25 transition-all duration-300">
          {/* Left: identity */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <Github size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
            </div>
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
              github.com/<span className="text-foreground font-semibold">{GITHUB_USER}</span>
            </span>
          </div>

          {/* Stats pills */}
          <div className="flex flex-wrap gap-4">
            {statItems.map((s) => (
              <div key={s.label} className="flex items-center gap-1.5 text-muted-foreground" id={`stat-${s.label.toLowerCase().replace(/\s/g,'-')}`}>
                <span className="text-foreground/60">{s.icon}</span>
                <span className="font-mono text-xs font-semibold text-foreground">{s.value}</span>
                <span className="font-mono text-[10px] uppercase tracking-wider hidden sm:block">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Live dot */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Live</span>
          </div>
        </div>
      </a>
    </motion.div>
  );
}
