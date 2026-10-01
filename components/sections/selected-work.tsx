'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, FileText, GitBranch, Layers3, Play, TrendingUp } from 'lucide-react';
import { certifications, projects } from '@/lib/portfolio-data';

const projectVisuals = [
  {
    icon: TrendingUp,
    caption: 'PRICING + RESERVING + FRAUD',
    flow: ['GLM baseline', 'Distributional AI', 'Calibrated risk'],
  },
  {
    icon: GitBranch,
    caption: 'MARKET + MACRO + SENTIMENT',
    flow: ['Signals', 'Agents + RAG', 'Explainable view'],
  },
  {
    icon: Layers3,
    caption: 'CLIMATE RISK → UNDERWRITING',
    flow: ['Exposure data', 'Hazard / loss', 'Risk insight'],
  },
  {
    icon: TrendingUp,
    caption: 'MORTALITY → LONG-TERM VALUE',
    flow: ['Population data', 'Stochastic model', 'Annuity value'],
  },
  {
    icon: FileText,
    caption: 'DOCUMENT → AUDITABLE VALUE',
    flow: ['PDF / Excel', 'OCR + validation', 'Model + report'],
  },
];

const projectSummaries: Record<string, string> = {
  'deep-distributional-actuarial':
    'Combines actuarial GLM baselines with distributional learning, calibrated uncertainty, explainability and a reproducible service pipeline.',
  'multi-agent-fx':
    'Specialist agents combine market prices, macroeconomic indicators and sentiment; RAG grounds results and SHAP makes signals traceable.',
  'asset-valuation-ai':
    'OCR and LLM extraction turn PDF and Excel inputs into checked, traceable asset and insurance valuations and reports.',
  'climateguard-ai':
    'Gradient-boosting hazard and loss models with SHAP; forecasting and treaty RAG are prototyped, while graph, vision and Azure deployment are proposed.',
  'mortality-life-insurance':
    'StMoMo models fit Human Mortality Database trends to forecast mortality and value annuities with calibrated confidence.',
};

export function SelectedWork() {
  return (
    <section
      id="work"
      className="relative flex min-h-[calc(100svh-4rem)] scroll-mt-16 items-center border-b border-line bg-page-2 py-20"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-2">
              04 · Project portfolio
            </p>
            <h2 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
              Applied work, made explainable.
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-relaxed text-ink-muted">
            Five projects across AI engineering, insurance, quantitative finance and actuarial modeling.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project, index) => {
            const visual = projectVisuals[index];
            const Icon = visual.icon;
            return (
              <article
                key={project.id}
                className="group overflow-hidden rounded-2xl border border-line bg-page transition duration-300 hover:-translate-y-1 hover:border-brand/35 hover:shadow-[0_16px_40px_-28px_rgba(33,29,26,0.35)]"
              >
                <div
                  role="img"
                  aria-label={`Schematic project preview for ${project.title}: ${visual.flow.join(' to ')}`}
                  className="relative isolate overflow-hidden border-b border-line bg-surface p-5 sm:p-6"
                >
                  <div
                    className="pointer-events-none absolute -right-8 -top-16 -z-10 h-48 w-48 rounded-full bg-brand/[0.06] blur-3xl"
                    aria-hidden
                  />
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-display text-5xl font-medium leading-none text-brand/75">
                      {String(index + 1).padStart(2, '0')}
                      <span className="text-2xl text-ink-faint">/05</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-page/70 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.13em] text-ink-muted">
                      <Icon className="h-3.5 w-3.5 text-brand" />
                      Workflow study
                    </span>
                  </div>
                  <div className="mt-6 border-t border-line/80 pt-4">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                      {visual.caption}
                    </p>
                    <div className="mt-3 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-1.5">
                      {visual.flow.map((step, stepIndex) => (
                        <div key={step} className="contents">
                          <span className="flex min-h-12 items-center justify-center rounded-md border border-line bg-page/80 px-2 text-center text-[10px] font-medium leading-tight text-ink-2 transition-colors group-hover:border-brand/25">
                            {step}
                          </span>
                          {stepIndex < visual.flow.length - 1 && (
                            <span className="text-xs text-amber" aria-hidden>→</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-2">
                      {project.domain}
                    </p>
                    {project.statuses?.some(({ status }) => status === 'In progress') && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/25 bg-brand-soft px-2.5 py-1 text-[10px] font-semibold text-brand">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden />
                        In progress
                      </span>
                    )}
                  </div>
                  <h3 className="font-display mt-2 text-2xl font-semibold leading-tight text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{projectSummaries[project.id]}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((technology) => (
                      <span
                        key={technology}
                        className="rounded-sm border border-line px-2 py-1 text-[9px] font-medium text-ink-muted"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.links[0]?.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 border-b border-brand/30 pb-1 text-xs font-semibold uppercase tracking-[0.1em] text-brand transition-colors hover:border-brand hover:text-brand-3"
                  >
                    View case study <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  {project.media?.demos?.map((demo) => (
                    <ProjectDemo key={demo.href} label={demo.label} href={demo.href} />
                  ))}
                  {project.media?.report && (
                    <a
                      href={project.media.report.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 border-b border-amber/50 pb-1 text-xs font-semibold uppercase tracking-[0.1em] text-ink-2 transition-colors hover:border-amber hover:text-brand"
                    >
                      <FileText className="h-3.5 w-3.5 text-amber" />
                      {project.media.report.label}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-5 rounded-2xl border border-line bg-page p-5">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
            Verified credentials
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {certifications.map((certification) => (
              <a
                key={certification.title}
                href={certification.image}
                target="_blank"
                rel="noopener noreferrer"
                className="group/certificate min-w-0 overflow-hidden rounded-lg border border-line bg-page-2 transition-colors hover:border-brand/40"
                aria-label={`View ${certification.title}`}
              >
                <div className="relative aspect-[16/10] bg-surface">
                  {certification.image && (
                    <Image
                      src={certification.image}
                      alt={`${certification.title} certificate`}
                      fill
                      sizes="(max-width: 640px) 45vw, 280px"
                      className="object-contain p-1.5"
                    />
                  )}
                </div>
                <div className="p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-2">
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
        <p className="mt-3 text-xs text-ink-faint">
          Workflow studies are illustrative. Project demos and the mortality report link to supplied files; credential previews open their source documents.
        </p>
      </div>
    </section>
  );
}

function ProjectDemo({ label, href }: { label: string; href: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <details
      className="mt-4 rounded-lg border border-brand/25 bg-brand-soft/50 p-3"
      onToggle={(event) => setIsOpen(event.currentTarget.open)}
    >
      <summary className="flex cursor-pointer list-none items-center gap-2 text-xs font-semibold text-brand marker:content-none">
        <Play className="h-3.5 w-3.5" />
        Watch demo: {label}
      </summary>
      {isOpen && (
        <video className="mt-3 w-full rounded-md bg-ink" controls preload="none" playsInline>
          <source src={href} type="video/mp4" />
          Your browser does not support embedded video.
        </video>
      )}
    </details>
  );
}
