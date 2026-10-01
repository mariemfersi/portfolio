import { Container } from '@/components/primitives';
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons';
import { profile } from '@/lib/portfolio-data';
import { Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-line bg-page py-10">
      <Container className="flex flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center gap-2 sm:justify-start">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand/15 font-mono text-[10px] font-bold text-brand-2 ring-1 ring-brand/40">
              MF
            </span>
            <span className="text-sm font-semibold text-ink">Mariem Fersi</span>
          </div>
          <p className="mt-2 text-xs text-ink-faint">
            Data Science Engineer · AI Enthusiast · Actuarial Data Scientist
            <br className="hidden sm:block" />
            Graduating July 2027 — available now for a 6-month international PFE.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-ink-muted transition-colors hover:border-brand/40 hover:text-brand-2"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-ink-muted transition-colors hover:border-brand/40 hover:text-brand-2"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-ink-muted transition-colors hover:border-brand/40 hover:text-brand-2"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        <div className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
          © {new Date().getFullYear()} — built with precision
        </div>
      </Container>
    </footer>
  );
}