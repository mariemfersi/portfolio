'use client';

import { ArrowUpRight, Download, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons';
import { profile } from '@/lib/portfolio-data';

export function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[calc(100svh-4rem)] scroll-mt-16 items-center overflow-hidden bg-page py-20"
    >
      <div className="bg-grid bg-grid-fade pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-brand/[0.08] blur-[120px]" aria-hidden />
      <div className="relative mx-auto w-full max-w-4xl px-6 text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-2">05 · Next step</p>
        <h2 className="font-display text-balance text-4xl font-semibold leading-tight text-ink sm:text-6xl">
          Put data to work on a problem that matters.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
          Available now for a six-month international final-year internship.
          Let’s explore where AI, data engineering or risk analytics could create value for your team.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a href={`mailto:${profile.email}`} className="btn-primary">
            <Mail className="h-4 w-4" /> Start a conversation
          </a>
          <a href={profile.cv} download className="btn-ghost">
            <Download className="h-4 w-4" /> Download CV
          </a>
        </div>
        <div className="mt-10 flex justify-center gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-ink-muted transition hover:border-brand/50 hover:text-brand"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-ink-muted transition hover:border-brand/50 hover:text-brand"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
        </div>
        <a
          href="#home"
          className="mt-12 inline-flex items-center gap-1 text-xs text-ink-faint hover:text-brand"
        >
          Back to the beginning <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
}
