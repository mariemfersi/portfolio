'use client';

import { Container, Reveal, SectionHeading, Section, TechChip } from '@/components/primitives';
import { experience } from '@/lib/portfolio-data';
import { Building2, Calendar } from 'lucide-react';

export function Experience() {
  return (
    <Section id="experience" tone="page-2">
      <Container>
        <SectionHeading
          eyebrow="Professional Experience"
          title={<>A path from operations to actuarial AI</>}
          lead="Three internships, each building on the last — moving from industrial quality toward data engineering and then deep learning for insurers."
        />

        <div className="relative mt-12 space-y-10">
          {/* Timeline rail */}
          <div className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-brand/60 via-brand/30 to-teal/50 sm:left-[15px]" aria-hidden />

          {experience.map((job, idx) => (
            <Reveal key={job.company} delay={idx * 0.08}>
              <div className="relative pl-10 sm:pl-20">
                {/* Dot */}
                <span className="absolute left-[0px] top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-brand/50 bg-page sm:left-[8px]">
                  <span className="h-[5px] w-[5px] rounded-full bg-brand" />
                </span>

                <div className="glass glass-hover p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-ink sm:text-2xl">{job.role}</h3>
                      <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-muted">
                        <span className="inline-flex items-center gap-1.5">
                          <Building2 className="h-3.5 w-3.5 text-brand-2" />
                          {job.company}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-teal" />
                          {job.period}
                        </span>
                      </div>
                      <div className="mt-2 font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                        {job.focus}
                      </div>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm leading-relaxed text-ink-2">
                        <span className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.technologies.map((t) => (
                      <TechChip key={t}>{t}</TechChip>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}