'use client';

import { ArrowUpRight, Download, Mail, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons';
import { profile } from '@/lib/portfolio-data';

export function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[calc(100svh-4rem)] scroll-mt-16 items-center overflow-hidden bg-page-2 py-16 sm:py-20"
    >
      <div className="bg-grid bg-grid-fade pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto w-full max-w-[1200px] px-6">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-brand-3 px-6 py-14 text-center shadow-[0_28px_80px_-40px_rgba(23,32,51,0.55)] sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -right-20 -top-28 -z-10 h-80 w-80 rounded-full border border-white/10" aria-hidden />
          <div className="pointer-events-none absolute -right-8 -top-16 -z-10 h-56 w-56 rounded-full border border-white/10" aria-hidden />
          <div className="pointer-events-none absolute -bottom-40 -left-20 -z-10 h-96 w-96 rounded-full bg-brand/50 blur-3xl" aria-hidden />
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90">
            <Sparkles className="h-3.5 w-3.5 text-amber" />
            05 · Your next great hire?
          </div>
          <h2 className="font-display mx-auto max-w-4xl text-balance text-4xl font-semibold leading-tight text-white sm:text-6xl">
            Have a complex problem? <span className="text-[#C9B38C]">Let’s make it clear.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            I’m available for a six-month international final-year internship. Let’s explore how AI,
            data engineering or risk analytics could move your team forward.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-[#C9B38C] px-6 py-3.5 text-sm font-semibold text-brand-3 transition hover:-translate-y-0.5 hover:bg-[#D7C5A5]"
            >
              <Mail className="h-4 w-4" /> Start a conversation <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/10"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-white/65">
            <span>Tunis, Tunisia</span><span className="text-amber" aria-hidden>·</span>
            <span>Open to relocation</span><span className="text-amber" aria-hidden>·</span>
            <a href={`mailto:${profile.email}`} className="transition hover:text-white">{profile.email}</a>
          </div>
          <div className="mt-7 flex justify-center gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 text-white/70 transition hover:border-white/50 hover:text-white"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 text-white/70 transition hover:border-white/50 hover:text-white"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
          </div>
          <a
            href="#home"
            className="mt-8 inline-flex items-center gap-1 text-xs text-white/55 transition hover:text-white"
          >
            Back to the beginning <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
