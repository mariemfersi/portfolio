'use client';

import { Container, Reveal, SectionHeading, Section, TechChip } from '@/components/primitives';
import { skills } from '@/lib/portfolio-data';

export function Skills() {
  return (
    <Section id="skills" tone="page-2">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title={<>Tooling across the data-to-risk stack</>}
          lead="Every technology below is used in at least one shipped project or internship — nothing decorative."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.06}>
              <div className="glass glass-hover h-full p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-ink-2">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <TechChip key={s}>{s}</TechChip>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}