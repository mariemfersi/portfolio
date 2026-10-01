'use client';

import { ArrowUpRight, Check, ShieldCheck } from 'lucide-react';
import { projects } from '@/lib/portfolio-data';

export function BusinessImpact() {
  const project = projects[0];

  return (
    <section
      id="impact"
      className="relative flex min-h-[calc(100svh-4rem)] scroll-mt-16 items-center border-b border-line bg-page-2 py-20"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-2">02 · Evidence</p>
            <h2 className="font-display max-w-3xl text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              Better risk decisions need more than a prediction.
            </h2>
          </div>
          <a
            href={project.links[0]?.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-2 hover:text-ink"
          >
            Explore the project <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col justify-between rounded-2xl border border-line bg-page p-7 sm:p-9">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.17em] text-ink-muted">The business problem</p>
              <p className="mt-4 text-xl font-medium leading-snug text-ink">
                How can insurers price and reserve risk with accuracy, calibrated uncertainty and an audit trail?
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                Traditional GLMs can miss complex patterns; black-box predictions can be difficult to trust.
                This project combines actuarial baselines, distributional learning and explainability.
              </p>
            </div>
            <div className="mt-8 flex items-start gap-3 border-t border-line pt-5">
              <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" />
              <p className="text-sm leading-relaxed text-ink-2">
                A reproducible evaluation-to-service workflow: GLM baseline → CANN / NGBoost → conformal
                bounds → SHAP → FastAPI, MLflow and Docker.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-page p-7 sm:p-9">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.17em] text-ink-muted">Measured project outcomes</p>
                <h3 className="font-display mt-2 text-2xl font-semibold text-ink">{project.title}</h3>
              </div>
              <span className="rounded-full border border-brand/40 bg-brand-soft px-3 py-1.5 text-xs font-medium text-brand-2">
                Evaluation set
              </span>
            </div>

            <div className="mt-5 h-px w-full bg-amber/60" aria-hidden />
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {project.metrics?.map((metric) => (
                <article key={metric.label} className="rounded-xl border border-line bg-surface p-5">
                  <div className="font-display text-4xl font-semibold tracking-tight text-brand">
                    {metric.value}
                  </div>
                  <h4 className="mt-3 min-h-10 text-sm font-semibold leading-snug text-ink">{metric.label}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-ink-muted">{metric.context}</p>
                </article>
              ))}
            </div>

            <div className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-ink-muted">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
              Reported results come from the project&apos;s evaluation data; they are not production or client KPIs.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
