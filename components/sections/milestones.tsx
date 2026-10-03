'use client';

import { Award, ArrowUpRight, GraduationCap } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { academicExcellence, education, experience } from '@/lib/portfolio-data';

export function Milestones() {
  const chronologicalExperience = [...experience].reverse();
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="milestones"
      className="relative flex min-h-[calc(100svh-4rem)] scroll-mt-16 items-center border-b border-line bg-page py-20"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="mb-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-2">03 · Milestones</p>
          <h2 className="font-display text-4xl font-semibold text-ink sm:text-5xl">Proof built over time.</h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-muted">
            From quality operations to connected-vehicle analytics and actuarial AI—each step adds a new layer.
          </p>
        </div>

        <div className="relative grid gap-4 lg:grid-cols-3">
          <div className="absolute left-8 right-8 top-8 hidden h-px bg-line-strong lg:block" aria-hidden />
          {chronologicalExperience.map((job, index) => (
            <motion.article
              key={job.company}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * 0.1 }}
              className="relative rounded-2xl border border-line bg-page-2 p-5 transition duration-300 hover:-translate-y-1 hover:border-brand/35 hover:shadow-[0_16px_40px_-28px_rgba(23,32,51,0.28)] sm:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand/20 bg-page font-mono text-xs font-bold text-brand-2">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink">{job.company}</h3>
                    <p className="mt-1 text-sm text-brand-2">{job.role}</p>
                  </div>
                </div>
                <span className="whitespace-nowrap rounded-full border border-line-strong bg-page px-2.5 py-1 text-xs text-ink-muted">
                  {job.period}
                </span>
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink-muted">{job.focus}</p>
              <ul className="mt-3 space-y-2">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-ink-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center gap-2 border-t border-line pt-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-faint">
                Chapter 0{index + 1}
                {index < chronologicalExperience.length - 1 && <ArrowUpRight className="h-3.5 w-3.5 text-brand" />}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-2xl border border-line bg-page-2 p-5 sm:p-6">
            <div className="mb-4 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-brand" />
              <h3 className="font-display text-lg font-semibold text-ink">Two complementary degrees</h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {education.map((item) => (
                <div key={item.institution} className="rounded-xl border border-line bg-page p-4">
                  <p className="font-semibold text-ink">{item.institution}</p>
                  <p className="mt-1 text-sm text-ink-2">{item.degree}</p>
                  <p className="mt-2 text-xs text-ink-muted">{item.period} · {item.location}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-brand/30 bg-brand/[0.06] p-5 sm:p-6">
            <div className="mb-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-brand" />
              <h3 className="font-display text-lg font-semibold text-ink">Academic performance</h3>
            </div>
            <div className="grid h-[calc(100%-2rem)] gap-3 sm:grid-cols-2">
              {academicExcellence.map((item) => (
                <div key={item.label} className="rounded-xl border border-line bg-page/80 p-4">
                  <div className="font-display text-3xl font-semibold text-brand">
                    {item.average}<span className="text-base text-ink-muted"> / 20</span>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-ink">{item.rank}</p>
                  <p className="mt-1 text-xs text-ink-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
