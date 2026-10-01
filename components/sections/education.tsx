'use client';

import { Container, Reveal, SectionHeading, Section, Pill } from '@/components/primitives';
import { education, academicExcellence } from '@/lib/portfolio-data';
import { GraduationCap, MapPin, Calendar, Award, TrendingUp } from 'lucide-react';

export function Education() {
  return (
    <Section id="education">
      <Container>
        <SectionHeading
          eyebrow="Education"
          title={<>A double-degree path: engineering + actuarial science</>}
          lead="One combined profile — a Data Science engineering degree with a parallel Master in Actuarial Science, graduating July 2027."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Degree cards */}
          <div className="space-y-4 lg:col-span-2">
            {education.map((edu, i) => (
              <Reveal key={edu.institution} delay={i * 0.08}>
                <div
                  className={`glass glass-hover flex flex-col gap-4 p-6 sm:flex-row sm:items-center ${
                    i === 0 ? 'sm:pr-24' : ''
                  }`}
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-line bg-white/[0.04]">
                    <GraduationCap className={`h-5 w-5 ${edu.accent === 'actuarial' ? 'text-teal' : 'text-brand-2'}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold text-ink">{edu.institution}</h3>
                    <div className="mt-0.5 text-sm text-ink-2">{edu.degree}</div>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-muted">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-teal" /> {edu.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-brand-2" /> {edu.location}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.2}>
              <div className="glass flex flex-col gap-4 border-brand/40 bg-brand/[0.03] p-6 sm:flex-row sm:items-center">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-brand/40 bg-brand-soft">
                  <Award className="h-5 w-5 text-brand-2" />
                </div>
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                    Consistent graduation date across the portfolio
                  </div>
                  <div className="mt-1 text-lg font-bold text-ink">
                    Expected graduation — July 2027
                  </div>
                </div>
                <div className="sm:ml-auto">
                  <Pill tone="brand">Final-Year Internship· PFE</Pill>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Academic excellence column */}
          <div className="space-y-4">
            <Reveal>
              <div className="glass border-brand/40 bg-gradient-to-b from-brand/[0.06] to-transparent p-6">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                  <TrendingUp className="h-3.5 w-3.5 text-teal" /> Academic Excellence
                </div>

                <div className="mt-6 space-y-5">
                  {academicExcellence.map((a) => (
                    <div key={a.label}>
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="text-4xl font-bold tracking-tight text-ink">
                          {a.average}
                          <span className="text-lg text-ink-faint">/20</span>
                        </span>
                        {a.highlight && <Pill tone="brand">Ranked #2/27</Pill>}
                      </div>
                      <div className="mt-1.5 text-sm font-medium text-brand-2">{a.rank}</div>
                      <div className="text-xs text-ink-faint">{a.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t border-line pt-5">
                  <div className="flex justify-between text-xs text-ink-muted">
                    <span>1st year</span>
                    <span className="text-ink-faint">2nd year</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/[0.06]">
                    <div className="flex h-full w-full gap-1">
                      <div className="h-full w-1/2 rounded-l-full bg-gradient-to-r from-brand/70 to-brand-2" style={{ width: '81%' }} title="16.31/20" />
                      <div className="h-full rounded-r-full bg-gradient-to-r from-brand-2 to-teal" style={{ width: '82%' }} title="16.45/20" />
                    </div>
                  </div>
                  <div className="mt-2 flex justify-between font-mono text-[11px] text-ink-faint">
                    <span>16.31</span>
                    <span className="text-brand-2">16.45</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}