'use client';

import { Reveal, SectionHeading, Container } from '@/components/primitives';
import { snapshot } from '@/lib/portfolio-data';

export function Snapshot() {
  return (
    <div className="border-y border-line bg-page-2/60">
      <Container className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="Candidate Snapshot"
          title={<>Who I am, at a glance</>}
          lead="Six facts a recruiter should know in the first ten seconds."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {snapshot.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.06}>
              <div className="glass glass-hover flex h-full gap-4 p-5">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-line bg-white/[0.04] text-lg">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-medium uppercase tracking-wider text-ink-faint">
                    {item.label}
                  </div>
                  <div className="mt-1 truncate text-[15px] font-semibold text-ink">{item.value}</div>
                  <div className="mt-0.5 text-xs text-ink-muted">{item.sub}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}