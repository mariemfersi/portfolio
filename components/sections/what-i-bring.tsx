'use client';

import { Reveal, SectionHeading, Section, Container } from '@/components/primitives';
import { valuePillars } from '@/lib/portfolio-data';
import { Brain, Database, Shield, LineChart } from 'lucide-react';
import { ReactNode } from 'react';

const icons: Record<string, ReactNode> = {
  ai: <Brain className="h-6 w-6 text-brand-2" />,
  data: <Database className="h-6 w-6 text-teal" />,
  risk: <Shield className="h-6 w-6 text-emerald" />,
  quant: <LineChart className="h-6 w-6 text-brand-2" />,
};

export function WhatIBring() {
  return (
    <Section id="expertise" tone="page-2">
      <Container>
        <SectionHeading
          eyebrow="What I Bring"
          title={<>Four disciplines, one pipeline</>}
          lead="Not three separate careers — a single data-to-decision chain that starts in engineering and ends in quantitative risk."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {valuePillars.map((p, i) => (
            <Reveal key={p.key} delay={i * 0.07}>
              <div className="glass glass-hover group flex h-full flex-col gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-white/[0.04] transition-colors group-hover:border-brand/40">
                  {icons[p.key]}
                </div>
                <h3 className="text-lg font-semibold leading-snug text-ink">{p.title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Technical depth strip */}
        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col items-center gap-3 rounded-2xl border border-line bg-white/[0.02] px-6 py-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">
              I understand the full lifecycle, not just the model
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-mono text-xs text-ink-2">
              <span className="text-brand-2">Problem</span>
              <span className="text-ink-faint">→</span>
              <span className="text-brand-2">Data</span>
              <span className="text-ink-faint">→</span>
              <span className="text-brand-2">Method</span>
              <span className="text-ink-faint">→</span>
              <span className="text-brand-2">Model</span>
              <span className="text-ink-faint">→</span>
              <span className="text-brand-2">Evaluation</span>
              <span className="text-ink-faint">→</span>
              <span className="text-brand-2">Explainability</span>
              <span className="text-ink-faint">→</span>
              <span className="text-brand-2">Deployment</span>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}