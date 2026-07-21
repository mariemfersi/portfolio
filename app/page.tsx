'use client';

import { PortfolioShell } from '@/components/portfolio-shell';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  return <PortfolioShell />;
}
