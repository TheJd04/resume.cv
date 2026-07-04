import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Zap } from 'lucide-react';

export default function AvailabilityBanner() {
  const [dismissed, setDismissed] = useState(false);

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-[73px] left-0 right-0 z-40 flex justify-center px-4 pointer-events-none"
          id="availability-banner-wrapper"
        >
          <div
            className="pointer-events-auto flex items-center gap-3 px-5 py-2.5 rounded-full border border-emerald-400/25 bg-[#03151f]/80 backdrop-blur-md shadow-lg shadow-black/30 max-w-fit"
            id="availability-banner"
          >
            {/* Pulse dot */}
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>

            <span className="font-mono text-xs text-emerald-300 font-semibold tracking-wide whitespace-nowrap">
              Open to Work
            </span>

            <span className="text-white/20 select-none">|</span>

            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Zap size={11} className="text-amber-400" />
              <span className="font-mono text-[11px] whitespace-nowrap">
                Full-time · Freelance · Remote
              </span>
            </div>

            <span className="text-white/20 select-none hidden sm:block">|</span>

            <div className="hidden sm:flex items-center gap-1.5 text-muted-foreground">
              <MapPin size={11} />
              <span className="font-mono text-[11px] whitespace-nowrap">Mohali · Delhi NCR · Anywhere</span>
            </div>

            {/* Dismiss */}
            <button
              onClick={() => setDismissed(true)}
              className="ml-1 w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors duration-200 cursor-pointer shrink-0"
              id="banner-dismiss-btn"
              aria-label="Dismiss availability banner"
            >
              <X size={10} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
