'use client';

import { Container, Reveal, Section, SectionHeading } from '@/components/primitives';
import { certifications } from '@/lib/portfolio-data';
import { Award, ExternalLink, ImagePlus } from 'lucide-react';

export function Certifications() {
  return (
    <Section id="certifications">
      <Container>
        <SectionHeading
          eyebrow="Certifications"
          title={<>Verified training across AI, cloud and data</>}
          lead="Industry certifications supporting the project work — details are shown as provided; certificate images can be added under /public/certificates."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <Reveal key={`${cert.provider}-${cert.title}`} delay={i * 0.05}>
              <div className="glass glass-hover flex h-full flex-col overflow-hidden">
                {/* Certificate thumbnail */}
                <div className="relative aspect-[4/3] overflow-hidden border-b border-line bg-page-2">
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={`${cert.title} — certificate`}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-3 bg-grid opacity-70">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand/40 bg-brand-soft">
                        <Award className="h-6 w-6 text-brand-2" />
                      </div>
                      <div className="flex items-center gap-2 px-4 text-center font-mono text-[10px] uppercase tracking-wider text-ink-faint">
                        <ImagePlus className="h-3.5 w-3.5" />
                        Certificate image placeholder
                      </div>
                    </div>
                  )}
                  <span className="absolute left-3 top-3 rounded-full border border-line bg-page/80 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-brand-2 backdrop-blur">
                    {cert.provider}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-[15px] font-bold leading-snug text-ink">{cert.title}</h3>
                  <div className="mt-1 text-xs text-ink-faint">
                    {cert.type}
                    {cert.date ? ` · ${cert.date}` : ''}
                  </div>
                  <p className="mt-3 flex-1 text-[13px] leading-relaxed text-ink-muted">
                    {cert.description}
                  </p>
                  {cert.image && (
                    <a
                      href={cert.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-2 hover:text-brand-2/80"
                    >
                      View certificate <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}