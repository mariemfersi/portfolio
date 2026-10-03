'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  CloudSun,
  FileText,
  GitBranch,
  Play,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { certifications, projects } from '@/lib/portfolio-data';

const projectVisuals = [
  {
    icon: TrendingUp,
    caption: 'PRICING · RESERVING · FRAUD',
    flow: ['GLM baseline', 'Distributional AI', 'Calibrated risk'],
    theme: 'bg-gradient-to-br from-[#172033] via-[#26344A] to-[#5A4568]',
    glow: 'bg-[#C9B38C]/20',
  },
  {
    icon: GitBranch,
    caption: 'MARKET · MACRO · SENTIMENT',
    flow: ['Market signals', 'Specialist agents', 'Explainable view'],
    theme: 'bg-gradient-to-br from-[#5A4568] via-[#715C7D] to-[#B88F9A]',
    glow: 'bg-[#F8F6F2]/20',
  },
  {
    icon: CloudSun,
    caption: 'CLIMATE RISK · UNDERWRITING',
    flow: ['Exposure data', 'Hazard & loss', 'Risk insight'],
    theme: 'bg-gradient-to-br from-[#172033] via-[#42566A] to-[#8E9C9A]',
    glow: 'bg-[#C9B38C]/25',
  },
  {
    icon: Activity,
    caption: 'MORTALITY · LONG-TERM VALUE',
    flow: ['Population data', 'Stochastic model', 'Annuity value'],
    theme: 'bg-gradient-to-br from-[#5A4568] via-[#766681] to-[#C9B38C]',
    glow: 'bg-[#F8F6F2]/25',
  },
  {
    icon: FileText,
    caption: 'DOCUMENTS · AUDITABLE VALUE',
    flow: ['PDF & Excel', 'OCR + validation', 'Model + report'],
    theme: 'bg-gradient-to-br from-[#172033] via-[#39445A] to-[#B88F9A]',
    glow: 'bg-[#C9B38C]/25',
  },
];

const projectSummaries: Record<string, string> = {
  'deep-distributional-actuarial':
    'Pairs actuarial benchmarks with explainable AI to estimate risk—and how uncertain that estimate is.',
  'multi-agent-fx':
    'Brings market, macro and sentiment signals together through specialist agents, with a traceable rationale.',
  'climateguard-ai':
    'Explores how climate and exposure data can help underwriters see catastrophe risk more clearly.',
  'mortality-life-insurance':
    'Uses stochastic mortality models to forecast changing lifespans and explore their impact on annuity value.',
  'asset-valuation-ai':
    'Turns valuation documents into checked, traceable inputs for insurance and asset calculations.',
};

const flagship = projects[0];
const otherProjects = projects.slice(1);
const flagshipVisual = projectVisuals[0];
const flagshipSummary = projectSummaries[flagship.id];

export function SelectedWork() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="work"
      className="relative scroll-mt-16 overflow-hidden border-b border-line bg-page-2 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute -left-48 top-48 h-[32rem] w-[32rem] rounded-full bg-brand/[0.045] blur-[100px]" aria-hidden />
      <div className="relative mx-auto w-full max-w-[1200px] px-6">
        <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand-soft px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-2">
              <Sparkles className="h-3.5 w-3.5 text-brand" />
              04 <span className="text-amber">/</span> The work
            </div>
            <h2 className="font-display max-w-3xl text-4xl font-semibold leading-[1.05] text-ink sm:text-6xl">
              Ideas, <span className="gradient-text italic">put to work.</span>
            </h2>
          </div>
          <div className="flex items-end justify-between gap-5 lg:justify-end">
            <p className="max-w-md text-sm leading-relaxed text-ink-muted sm:text-base">
              Five projects. Real questions. A mix of AI, data and actuarial thinking.
            </p>
            <span className="hidden shrink-0 font-display text-5xl font-medium text-brand/20 sm:block">
              05
            </span>
          </div>
        </div>

        <motion.article
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55 }}
          className="relative isolate overflow-hidden rounded-[1.75rem] bg-brand-3 text-white shadow-[0_28px_80px_-45px_rgba(23,32,51,0.7)]"
        >
          <div className="pointer-events-none absolute -right-36 -top-48 -z-10 h-[34rem] w-[34rem] rounded-full border border-white/[0.08]" aria-hidden />
          <div className="pointer-events-none absolute -right-16 -top-28 -z-10 h-[25rem] w-[25rem] rounded-full border border-white/[0.08]" aria-hidden />
          <div className="pointer-events-none absolute -bottom-48 left-1/3 -z-10 h-96 w-96 rounded-full bg-brand/50 blur-[90px]" aria-hidden />

          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-6 sm:p-9 lg:p-11">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.07] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/85">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C9B38C]" />
                  01 · Featured research
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/50">
                  {flagship.domain}
                </span>
              </div>

              <h3 className="font-display mt-6 max-w-xl text-3xl font-semibold leading-[1.05] sm:text-5xl">
                {flagship.title}
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                {flagshipSummary}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {flagship.technologies.slice(0, 5).map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[10px] font-medium text-white/75"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                {flagship.links[0] && (
                  <a
                    href={flagship.links[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#C9B38C] px-4 py-3 text-xs font-semibold text-brand-3 transition hover:-translate-y-0.5 hover:bg-[#D7C5A5]"
                  >
                    Explore the project <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
                {flagship.media?.demos?.map((demo) => (
                  <ProjectDemo key={demo.href} label={demo.label} href={demo.href} />
                ))}
              </div>
            </div>

            <div className="relative flex min-h-[330px] flex-col justify-between overflow-hidden border-t border-white/10 bg-white/[0.035] p-6 sm:p-9 lg:border-l lg:border-t-0 lg:p-10">
              <div className={`pointer-events-none absolute -right-8 top-10 h-64 w-64 rounded-full ${flagshipVisual.glow} blur-[80px]`} aria-hidden />
              <div className="relative flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
                    From prediction to decision
                  </p>
                  <p className="mt-1 text-xs text-white/40">A complete modeling journey</p>
                </div>
                <flagshipVisual.icon className="h-5 w-5 text-[#C9B38C]" aria-hidden />
              </div>

              <div className="relative my-8 space-y-3">
                {flagshipVisual.flow.map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/[0.06] font-mono text-[10px] text-[#C9B38C]">
                      0{index + 1}
                    </span>
                    <span className="flex min-h-10 flex-1 items-center justify-between rounded-lg border border-white/10 bg-brand-3/70 px-3 text-xs font-medium text-white/80">
                      {step}
                      {index < flagshipVisual.flow.length - 1 && (
                        <ArrowDownRight className="h-3.5 w-3.5 text-white/40" aria-hidden />
                      )}
                    </span>
                  </div>
                ))}
              </div>

              <div className="relative grid grid-cols-3 gap-2">
                {flagship.metrics?.map((metric) => (
                  <div key={metric.label} className="rounded-xl border border-white/10 bg-white/[0.06] p-3 sm:p-4">
                    <p className="font-display text-2xl font-semibold text-[#D9C8A8] sm:text-3xl">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-[9px] font-semibold leading-snug text-white/75 sm:text-[10px]">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
              <p className="relative mt-3 text-[9px] text-white/40">
                Evaluation results · not production or client KPIs
              </p>
            </div>
          </div>
        </motion.article>

        <div className="mb-5 mt-14 flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-2">More from the portfolio</p>
            <h3 className="font-display mt-1 text-2xl font-semibold text-ink sm:text-3xl">
              Different problems. Different tools.
            </h3>
          </div>
          <span className="hidden text-xs text-ink-muted sm:block">02—05 / 05</span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {otherProjects.map((project, index) => {
            const visual = projectVisuals[index + 1];
            const Icon = visual.icon;

            return (
              <motion.article
                key={project.id}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.45, delay: reduceMotion ? 0 : (index % 2) * 0.08 }}
                className="group overflow-hidden rounded-2xl border border-line bg-page transition duration-300 hover:-translate-y-1 hover:border-brand/35 hover:shadow-[0_18px_45px_-30px_rgba(23,32,51,0.4)]"
              >
                <div className={`relative isolate overflow-hidden ${visual.theme} p-5 text-white sm:p-6`}>
                  <div className={`pointer-events-none absolute -right-12 -top-20 -z-10 h-56 w-56 rounded-full ${visual.glow} blur-3xl transition-transform duration-500 group-hover:scale-125`} aria-hidden />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="font-display text-4xl font-medium leading-none text-white/55">
                        0{index + 2}
                      </span>
                      <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.17em] text-white/70">
                        {visual.caption}
                      </p>
                    </div>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/25 bg-white/10 backdrop-blur-sm">
                      <Icon className="h-5 w-5 text-white" aria-hidden />
                    </span>
                  </div>
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    {visual.flow.map((step, stepIndex) => (
                      <div key={step} className="flex items-center gap-2">
                        <span className="rounded-lg border border-white/20 bg-white/10 px-2.5 py-2 text-[10px] font-medium text-white/90 backdrop-blur-sm">
                          {step}
                        </span>
                        {stepIndex < visual.flow.length - 1 && (
                          <span className="text-xs text-white/60" aria-hidden>→</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-brand-2">
                      {project.domain}
                    </p>
                    {project.statuses?.map(({ status }) => (
                      <span
                        key={status}
                        className="rounded-full border border-brand/20 bg-brand-soft px-2.5 py-1 text-[9px] font-semibold text-brand-2"
                      >
                        {status}
                      </span>
                    ))}
                  </div>
                  <h4 className="font-display mt-2 text-2xl font-semibold leading-tight text-ink">
                    {project.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {projectSummaries[project.id]}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-line px-2.5 py-1 text-[9px] font-medium text-ink-muted"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-line pt-4">
                    {project.links[0] && (
                      <a
                        href={project.links[0].href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-brand-2 transition-colors hover:text-brand"
                      >
                        Explore project <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                    {project.media?.demos?.map((demo) => (
                      <ProjectDemo key={demo.href} label={demo.label} href={demo.href} />
                    ))}
                    {project.media?.report && (
                      <a
                        href={project.media.report.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-ink-muted transition-colors hover:text-brand-2"
                      >
                        <FileText className="h-3.5 w-3.5" />
                        Read report <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl border border-line bg-page">
          <div className="flex flex-wrap items-end justify-between gap-3 border-b border-line px-5 py-4 sm:px-6">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-brand-2">Proof beyond projects</p>
              <h3 className="font-display mt-1 text-2xl font-semibold text-ink">Learning, made tangible.</h3>
            </div>
            <span className="text-xs text-ink-muted">{certifications.length} credentials</span>
          </div>
          <div className="grid grid-cols-2 gap-px bg-line sm:grid-cols-4">
            {certifications.map((certification, index) => (
              <a
                key={certification.title}
                href={certification.image}
                target="_blank"
                rel="noopener noreferrer"
                className="group/certificate min-w-0 bg-page transition-colors hover:bg-surface"
                aria-label={`View ${certification.title}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                  {certification.image && (
                    <Image
                      src={certification.image}
                      alt={`${certification.title} certificate`}
                      fill
                      sizes="(max-width: 640px) 45vw, 280px"
                      className="object-contain p-2 transition-transform duration-300 group-hover/certificate:scale-[1.03]"
                    />
                  )}
                  <span className="absolute left-2 top-2 rounded-full bg-brand-3 px-2 py-1 font-mono text-[9px] text-white">
                    0{index + 1}
                  </span>
                </div>
                <div className="p-3 sm:p-4">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-brand-2">
                    {certification.provider}
                  </p>
                  <p className="mt-1 line-clamp-2 text-xs font-medium leading-snug text-ink">
                    {certification.title}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectDemo({ label, href }: { label: string; href: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <details
      className="min-w-0 flex-1 basis-full rounded-xl border border-white/15 bg-white/[0.07] p-3 text-white sm:basis-auto"
      onToggle={(event) => setIsOpen(event.currentTarget.open)}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-[10px] font-semibold text-white/90 marker:content-none">
        <span className="inline-flex min-w-0 items-center gap-2">
          <Play className="h-3.5 w-3.5 shrink-0 text-[#C9B38C]" />
          <span className="truncate">Watch demo · {label}</span>
        </span>
        <span className="text-white/50">{isOpen ? '−' : '+'}</span>
      </summary>
      {isOpen && (
        <video className="mt-3 w-full rounded-lg bg-brand-3" controls preload="none" playsInline>
          <source src={href} type="video/mp4" />
          Your browser does not support embedded video.
        </video>
      )}
    </details>
  );
}
