'use client';

import { ArrowDown, ArrowDownRight, Download, Globe2 } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { profile } from '@/lib/portfolio-data';

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-4rem)] scroll-mt-16 items-center overflow-hidden border-b border-line bg-page pb-16 pt-24 sm:py-20"
    >
      <div className="bg-grid bg-grid-fade pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-brand/[0.08] blur-[130px]" aria-hidden />

      <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-x-12 gap-y-10 px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-soft px-4 py-2 text-xs font-semibold text-brand-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-40 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            <Globe2 className="h-4 w-4" />
            Available now · International · 6 months
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-ink-muted">
            Mariem Fersi · Data Science Engineer
          </p>
          <h1 className="font-display max-w-4xl text-balance text-5xl font-medium leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Make complex data <span className="gradient-text italic">useful</span> for business.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-2 sm:text-xl">
            I turn complex data into practical AI and risk tools, bringing engineering and actuarial
            thinking together to help teams make confident decisions.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#impact" className="btn-primary">
              See the business results <ArrowDownRight className="h-4 w-4" />
            </a>
            <a href={profile.cv} download className="btn-ghost">
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6 text-sm text-ink-muted">
            <span>AI & machine learning</span>
            <span>Data engineering</span>
            <span>Actuarial & risk modeling</span>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: reduceMotion ? 0 : 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-3 rotate-3 rounded-[2rem] border border-brand/30" aria-hidden />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-surface p-3">
            <Image
              src={profile.photo}
              alt="Mariem Fersi"
              width={800}
              height={1000}
              loading="eager"
              sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
              className="aspect-[4/5] w-full rounded-[1.2rem] object-cover"
            />
            <div className="flex items-center justify-between px-2 pb-1 pt-4">
              <span className="text-xs font-medium text-ink-muted">Tunis · open to relocation</span>
            </div>
          </div>
          <div className="absolute -left-5 -top-6 rounded-xl border border-brand/40 bg-page px-4 py-3 shadow-xl">
            <div className="font-display text-2xl font-semibold text-brand">#2 / 27</div>
            <div className="text-xs text-ink-muted">Engineering class</div>
          </div>
          <div className="absolute -bottom-4 -right-4 max-w-[calc(100%-1rem)] rounded-xl border border-line bg-page px-4 py-3 shadow-xl sm:-right-8">
            <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-ink-muted">A rare combination</div>
            <div className="mt-1 font-display text-lg font-semibold text-brand-2">AI <span className="text-amber">×</span> Actuarial</div>
          </div>
        </motion.div>

        <a
          href="#impact"
          className="group flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted transition-colors hover:text-brand-2 lg:col-span-2"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line-strong transition-transform group-hover:translate-y-1">
            <ArrowDown className="h-4 w-4" />
          </span>
          Scroll for the work behind the headline
          <span className="h-px max-w-28 flex-1 bg-line-strong" aria-hidden />
        </a>
      </div>
    </section>
  );
}
