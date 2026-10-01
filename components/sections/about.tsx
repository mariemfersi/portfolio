'use client';

import { Reveal, SectionHeading, Section, Container } from '@/components/primitives';
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons';
import { profile } from '@/lib/portfolio-data';
import { MapPin, Mail, GraduationCap } from 'lucide-react';

export function About() {
  return (
    <Section id="about">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Identity card */}
          <Reveal>
            <div className="glass relative overflow-hidden p-2">
              <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
              <div className="relative overflow-hidden rounded-2xl border border-line">
                <img
                  src={profile.photo}
                  alt="Portrait of Mariem Fersi"
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="relative px-2 pb-2 pt-3">
                <div className="text-lg font-bold text-ink">{profile.name}</div>
                <div className="text-sm text-brand-2">{profile.role}</div>
                <div className="mt-1 text-xs text-ink-muted">{profile.positioning}</div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white/[0.03] px-3 py-1.5 text-xs text-ink-muted">
                <GraduationCap className="h-3.5 w-3.5 text-teal" /> Expected graduation: July 2027
              </span>
            </div>

            <div className="mt-6 grid gap-2">
              <a
                href={`mailto:${profile.email}`}
                className="glass flex items-center gap-3 px-4 py-3 text-sm text-ink-2 transition-colors hover:border-brand/40 hover:text-ink"
              >
                <Mail className="h-4 w-4 text-brand-2" /> {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex items-center gap-3 px-4 py-3 text-sm text-ink-2 transition-colors hover:border-brand/40 hover:text-ink"
              >
                <LinkedinIcon className="h-4 w-4 text-brand-2" /> linkedin.com/in/mariem-fersi
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex items-center gap-3 px-4 py-3 text-sm text-ink-2 transition-colors hover:border-brand/40 hover:text-ink"
              >
                <GithubIcon className="h-4 w-4 text-brand-2" /> github.com/mariemfersi
              </a>
              <div className="glass flex items-center gap-3 px-4 py-3 text-sm text-ink-faint">
                <MapPin className="h-4 w-4 text-teal" /> {profile.location}
              </div>
            </div>
          </Reveal>

          {/* Narrative */}
          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="About"
              title={<>Engineering + AI + quantitative rigor</>}
            />

            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-2 sm:text-[17px]">
              <p>
                I am a Data Science Engineering student and AI enthusiast with a strong interest in
                machine learning, intelligent systems and quantitative modeling.
              </p>
              <p>
                Alongside my engineering studies, I am pursuing Actuarial Science at Le Mans
                University, developing a strong foundation in probability, statistics, risk modeling
                and financial mathematics.
              </p>
              <p>
                This multidisciplinary background lets me combine engineering and AI with
                quantitative reasoning to solve complex real-world problems in areas such as
                finance, insurance and risk.
              </p>
              <p>
                I am available now for a <span className="font-semibold text-ink">6-month
                international Final-Year Internship (PFE)</span>.
              </p>
            </div>

            {/* Domain chips */}
            <div className="mt-8 flex flex-wrap gap-2">
              {['Data Science', 'Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Data Engineering', 'Statistics', 'Actuarial Science', 'Risk Modeling', 'Quantitative Finance', 'Explainable AI'].map(
                (d) => (
                  <span
                    key={d}
                    className="rounded-lg border border-line bg-white/[0.03] px-3 py-1.5 text-xs text-ink-2"
                  >
                    {d}
                  </span>
                ),
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}