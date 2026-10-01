'use client';

import { Container, Reveal } from '@/components/primitives';
import { internshipSeeking, profile } from '@/lib/portfolio-data';
import { Calendar, Clock, GraduationCap, Globe2, ArrowRight, Download } from 'lucide-react';

const facts = [
  { icon: <Calendar className="h-4 w-4 text-brand-2" />, label: 'Start', value: internshipSeeking.start },
  { icon: <Clock className="h-4 w-4 text-teal" />, label: 'Duration', value: internshipSeeking.duration },
  { icon: <GraduationCap className="h-4 w-4 text-emerald" />, label: 'Graduation', value: internshipSeeking.graduation },
  { icon: <Globe2 className="h-4 w-4 text-brand-2" />, label: 'Location', value: 'International · relocatable' },
];

export function InternshipCta() {
  return (
    <section id="internship" className="relative scroll-mt-24 overflow-hidden border-y border-line bg-page">
      {/* Motif */}
      <div className="bg-grid bg-grid-fade pointer-events-none absolute inset-0" aria-hidden />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[640px] -translate-x-1/2 rounded-full bg-brand/[0.08] blur-[120px]" aria-hidden />

      <Container className="relative py-24 text-center sm:py-28">
        <Reveal>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-5">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand-2">
              Available now
            </span>

            <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Looking for my 6-Month International PFE
            </h2>

            <p className="max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              A Final-Year Internship at the intersection of AI, data science and quantitative
              risk — available to start now, anywhere in the world.
            </p>
          </div>
        </Reveal>

        {/* Facts */}
        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label} className="glass p-4">
                <div className="flex items-center justify-center gap-1.5">
                  {f.icon}
                  <span className="font-mono text-[10px] uppercase tracking-wider text-ink-faint">
                    {f.label}
                  </span>
                </div>
                <div className="mt-2 text-sm font-semibold text-ink">{f.value}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Interests */}
        <Reveal delay={0.18}>
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2">
            {internshipSeeking.interests.map((interest) => (
              <span
                key={interest}
                className="rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5 text-xs text-ink-2"
              >
                {interest}
              </span>
            ))}
          </div>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={0.26}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href={profile.cv} download className="btn-primary">
              <Download className="h-4 w-4" />
              Download CV
            </a>
            <a href="#contact" className="btn-ghost">
              Contact Me
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}