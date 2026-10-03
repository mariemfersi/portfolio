'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronDown,
  ExternalLink,
  ArrowRight,
  GitBranch,
  Sparkles,
  FlaskConical,
  ScanSearch,
  GitMerge,
  Share2,
  DownloadCloud,
  CircleDot,
} from 'lucide-react';
import { Container, Reveal, SectionHeading, Section, TechChip } from '@/components/primitives';
import { projects, type Project, type BuildStatus } from '@/lib/portfolio-data';

const statusStyle: Record<BuildStatus, string> = {
  'In progress': 'border-brand/40 bg-brand-soft text-brand-2',
  Implemented: 'border-emerald/40 bg-emerald/10 text-emerald',
  Prototype: 'border-amber/40 bg-amber/10 text-ink',
  'Research / Proposed': 'border-brand/40 bg-brand-soft text-brand-2',
};

const stageIcons: Record<string, React.ReactNode> = {
  Problem: <CircleDot className="h-3.5 w-3.5 text-rose" />,
  Data: <DownloadCloud className="h-3.5 w-3.5 text-teal" />,
  Method: <FlaskConical className="h-3.5 w-3.5 text-amber" />,
  Model: <GitMerge className="h-3.5 w-3.5 text-brand-2" />,
  Evaluation: <ScanSearch className="h-3.5 w-3.5 text-emerald" />,
  Explainability: <Share2 className="h-3.5 w-3.5 text-brand-2" />,
  Deployment: <GitBranch className="h-3.5 w-3.5 text-teal" />,
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const flagship = project.ring === 'flagship';

  return (
    <Reveal delay={index * 0.05}>
      <article
        className={`glass overflow-hidden transition-colors ${
          flagship ? '!border-brand/40' : 'hover:border-line-strong'
        }`}
      >
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-6 py-4 sm:px-8">
          <div className="flex items-center gap-3">
            <span
              className={`flex h-9 w-9 items-center justify-center rounded-lg border ${
                flagship ? 'border-brand/40 bg-brand-soft' : 'border-line bg-white/[0.04]'
              }`}
            >
              <Sparkles className={`h-4 w-4 ${flagship ? 'text-brand-2' : 'text-ink-faint'}`} />
            </span>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-2">
                {project.domain}
              </div>
              {flagship && (
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-2">
                  ★ Flagship research project
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-ink-muted transition-colors hover:border-brand/40 hover:text-brand-2"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-6 sm:px-8">
          <h3 className="text-xl font-bold leading-snug text-ink sm:text-2xl">{project.title}</h3>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">
                The problem
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{project.problem}</p>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">
                What I built
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-2">{project.built}</p>
            </div>
          </div>

          {/* Metrics — real evaluation results only */}
          {project.metrics && (
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {project.metrics.map((m) => (
                <div key={m.label} className="rounded-xl border border-line bg-white/[0.03] p-4">
                  <div className="text-2xl font-bold tracking-tight text-brand-2">{m.value}</div>
                  <div className="mt-1 text-xs font-medium text-ink-2">{m.label}</div>
                  <div className="mt-1 text-[11px] leading-snug text-ink-faint">{m.context}</div>
                </div>
              ))}
            </div>
          )}

          {/* Build statuses (ClimateGuard) */}
          {project.statuses && (
            <div className="mt-6 space-y-2.5">
              {project.statuses.map((s) => (
                <div key={s.status} className="flex items-start gap-3 rounded-xl border border-line bg-white/[0.02] p-3.5">
                  <span
                    className={`mt-0.5 flex-shrink-0 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${statusStyle[s.status]}`}
                  >
                    {s.status}
                  </span>
                  <p className="text-[13px] leading-relaxed text-ink-muted">{s.note}</p>
                </div>
              ))}
            </div>
          )}

          {/* Technologies */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <TechChip key={t}>{t}</TechChip>
            ))}
          </div>

          {/* Expandable lifecycle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-2 transition-colors hover:text-brand-2/80"
          >
            {project.lifecycle.some((l) => l.stage === 'Deployment')
              ? 'Full project lifecycle'
              : 'Implementation details'}
            <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown className="h-4 w-4" />
            </motion.span>
          </button>

          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-4 space-y-3 border-t border-line pt-5">
                {project.lifecycle.map((l, i) => (
                  <div key={l.stage} className="grid gap-1 sm:grid-cols-[180px_1fr] sm:gap-4">
                    <div className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-2">
                      {stageIcons[l.stage] ?? null}
                      {l.stage}
                      {i < project.lifecycle.length - 1 && (
                        <ArrowRight className="ml-1 hidden h-3 w-3 text-ink-faint sm:block" />
                      )}
                    </div>
                    <p className="text-[13px] leading-relaxed text-ink-muted">{l.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <Section id="projects">
      <Container>
        <SectionHeading
          eyebrow="Featured Projects"
          title={<>Built end-to-end, from data to deployment</>}
          lead="Each project is documented across the full lifecycle — a model alone is not a solution."
        />

        <div className="mt-10 space-y-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 rounded-2xl border border-line bg-white/[0.02] px-6 py-8 text-center sm:flex-row sm:gap-6">
            <p className="text-sm text-ink-muted">
              All repositories are public — code speaks louder than descriptions.
            </p>
            <a
              href="https://github.com/mariemfersi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-2 hover:text-brand-2/80"
            >
              github.com/mariemfersi <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}