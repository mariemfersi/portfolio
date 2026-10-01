'use client';

import { ArrowDownRight, Download, Globe2 } from 'lucide-react';
import Image from 'next/image';
import { profile } from '@/lib/portfolio-data';

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-4rem)] scroll-mt-16 items-center overflow-hidden border-b border-line bg-page py-20"
    >
      <div className="bg-grid bg-grid-fade pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-brand/[0.08] blur-[130px]" aria-hidden />

      <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand-soft px-4 py-2 text-xs font-semibold text-brand-2">
            <Globe2 className="h-4 w-4" />
            Available now · International · 6 months
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-ink-muted">
            Mariem Fersi · Data Science Engineer
          </p>
          <h1 className="font-display max-w-4xl text-balance text-5xl font-medium leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Make complex data useful for business.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-2 sm:text-xl">
            I build decision-ready AI, data and risk solutions—combining hands-on engineering with
            actuarial rigor to help teams see what to do next, and why.
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
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 rotate-3 rounded-[2rem] border border-brand/30" aria-hidden />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-surface p-3">
            <Image
              src={profile.photo}
              alt="Mariem Fersi"
              width={800}
              height={1000}
              sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
              className="aspect-[4/5] w-full rounded-[1.2rem] object-cover"
            />
            <div className="flex items-center justify-between px-2 pb-1 pt-4">
              <span className="font-display text-sm font-semibold text-ink">Engineering → decisions</span>
              <span className="text-xs text-ink-muted">Tunis · open to relocation</span>
            </div>
          </div>
          <div className="absolute -left-5 -top-6 rounded-xl border border-brand/40 bg-page px-4 py-3 shadow-xl">
            <div className="font-display text-2xl font-semibold text-brand">#2 / 27</div>
            <div className="text-xs text-ink-muted">Engineering class</div>
          </div>
        </div>
      </div>
    </section>
  );
}
