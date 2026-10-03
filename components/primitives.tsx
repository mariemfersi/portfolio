'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

// ── Motion reveal wrapper (subtle, once) ─────────────────────
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Container ─────────────────────────────────────────────────
export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-6 ${className}`}>{children}</div>;
}

// ── Section wrapper with background + id ──────────────────────
export function Section({
  id,
  children,
  tone = 'page',
  className = '',
}: {
  id?: string;
  children: ReactNode;
  tone?: 'page' | 'page-2';
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 py-20 sm:py-28 ${
        tone === 'page-2' ? 'bg-page-2' : 'bg-page'
      } ${className}`}
    >
      {children}
    </section>
  );
}

// ── Section heading ───────────────────────────────────────────
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  align?: 'left' | 'center';
}) {
  const centered = align === 'center' ? 'items-center text-center mx-auto' : 'items-start';
  return (
    <Reveal className={`flex max-w-3xl flex-col gap-4 ${centered}`}>
      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand-2">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {lead && <p className="text-base leading-relaxed text-ink-muted sm:text-lg">{lead}</p>}
    </Reveal>
  );
}

// ── Small labeled pill ────────────────────────────────────────
export function Pill({
  children,
  tone = 'brand',
}: {
  children: ReactNode;
  tone?: 'brand' | 'teal' | 'emerald' | 'neutral';
}) {
  const tones: Record<string, string> = {
    brand: 'border-brand/40 bg-brand-soft text-brand-2',
    teal: 'border-teal/40 bg-teal-soft text-ink',
    emerald: 'border-emerald/40 bg-emerald/10 text-emerald',
    neutral: 'border-line-strong bg-white/5 text-ink-2',
  };
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

// ── Technology chip (mono) ────────────────────────────────────
export function TechChip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-lg border border-line bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-ink-2">
      {children}
    </span>
  );
}

// ── Small monospace label used for technical eyebrows ─────────
export function MonoLabel({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">{children}</span>
  );
}