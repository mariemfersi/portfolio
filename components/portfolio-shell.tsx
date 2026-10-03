'use client';

import { Pause, Play } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { useState } from 'react';
import { Nav } from '@/components/sections/nav';
import { Hero } from '@/components/sections/hero';
import { BusinessImpact } from '@/components/sections/business-impact';
import { Milestones } from '@/components/sections/milestones';
import { SelectedWork } from '@/components/sections/selected-work';
import { Contact } from '@/components/sections/contact';

export function PortfolioShell() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const reduceMotion = useReducedMotion();
  const [tickerPaused, setTickerPaused] = useState(false);
  const disciplines = ['AI engineering', 'Actuarial thinking', 'Decision-ready data', 'Risk modeling'];

  return (
    <main className="relative min-h-screen bg-page font-sans text-ink">
      {/* Scroll progress */}
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-brand"
      />

      <Nav />

      <Hero />
      <div className="relative overflow-hidden border-b border-line bg-brand-3 py-3.5">
        <span className="sr-only">{disciplines.join(' · ')}</span>
        <div className="focus-ticker flex w-max" data-paused={tickerPaused} aria-hidden="true">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {disciplines.map((discipline) => (
                <span key={`${copy}-${discipline}`} className="flex items-center gap-6 px-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/85 sm:text-xs">
                  {discipline}
                  <span className="text-amber" aria-hidden>✳</span>
                </span>
              ))}
            </div>
          ))}
        </div>
        {!reduceMotion && (
          <button
            type="button"
            aria-label={tickerPaused ? 'Play focus ticker' : 'Pause focus ticker'}
            aria-pressed={tickerPaused}
            onClick={() => setTickerPaused((paused) => !paused)}
            className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-brand-3 text-white/80 transition hover:border-white/50 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {tickerPaused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
          </button>
        )}
      </div>
      <BusinessImpact />
      <Milestones />
      <SelectedWork />
      <Contact />
    </main>
  );
}