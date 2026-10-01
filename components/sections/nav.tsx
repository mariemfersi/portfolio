'use client';

import { useEffect, useState } from 'react';
import { CheckCircle2, Download, Menu, X } from 'lucide-react';
import { profile, navLinks } from '@/lib/portfolio-data';

export function Nav() {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  // Scroll-spy
  useEffect(() => {
    const ids = ['home', ...navLinks.map((l) => l.href.replace('#', ''))];
    const onScroll = () => {
      const pos = window.scrollY + 140;
      let current = 'home';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos) current = id;
      }
      // Bottom of page -> contact
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 200) {
        current = 'contact';
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-line bg-page/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-6">
        {/* Brand */}
        <a href="#home" className="group flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/15 font-mono text-[13px] font-bold text-brand-2 ring-1 ring-brand/40">
            MF
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-ink">
            Mariem <span className="text-ink-muted">Fersi</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={active === link.href.replace('#', '') ? 'location' : undefined}
              className={`rounded-lg px-3.5 py-2 text-xs font-semibold tracking-[0.08em] transition-colors ${
                active === link.href.replace('#', '')
                  ? 'text-brand-2'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a href="#contact" className="btn-primary !py-2.5 text-sm">
            <CheckCircle2 className="h-4 w-4" />
            Available now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink-muted lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="border-t border-line bg-page/95 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-current={active === link.href.replace('#', '') ? 'location' : undefined}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-2 hover:bg-brand-soft"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 justify-center"
            >
              <CheckCircle2 className="h-4 w-4" />
              Available now
            </a>
            <a
              href={profile.cv}
              download
              className="btn-ghost mt-2 justify-center"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}