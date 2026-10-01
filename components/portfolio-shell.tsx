'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { Nav } from '@/components/sections/nav';
import { Hero } from '@/components/sections/hero';
import { BusinessImpact } from '@/components/sections/business-impact';
import { Milestones } from '@/components/sections/milestones';
import { SelectedWork } from '@/components/sections/selected-work';
import { Contact } from '@/components/sections/contact';

export function PortfolioShell() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <main className="relative min-h-screen bg-page font-sans text-ink">
      {/* Scroll progress */}
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-brand"
      />

      <Nav />

      <Hero />
      <BusinessImpact />
      <Milestones />
      <SelectedWork />
      <Contact />
    </main>
  );
}