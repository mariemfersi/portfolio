import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/contexts/theme-context';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import MicrosoftClarity from '@/components/analytics/MicrosoftClarity';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap',
});

const cormorantGaramond = Cormorant_Garamond({
  variable: '--font-cormorant-garamond',
  subsets: ['latin'],
  display: 'swap',
});

const SITE = {
  title: 'Mariem Fersi | Data Science Engineer — AI · Actuarial Science',
  description:
    'Mariem Fersi builds decision-ready AI, data and risk solutions—combining engineering with actuarial rigor. Available now for a 6-month international Final-Year Internship (PFE).',
  url: 'https://mariemfersi.com',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: '%s | Mariem Fersi',
  },
  description: SITE.description,
  keywords: [
    'Mariem Fersi',
    'Data Science Engineer',
    'AI Engineer Intern',
    'Data Scientist Intern',
    'Machine Learning Intern',
    'Data Engineering Intern',
    'Actuarial Data Scientist',
    'AI Internship 2027',
    'PFE Data Science',
    'PFE AI',
    'International Data Science Internship',
    'ESPRIT',
    'Actuarial Science',
    'Quantitative Finance',
  ],
  authors: [{ name: 'Mariem Fersi' }],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    images: [{ url: '/images/mariem (2).png', alt: 'Mariem Fersi — Data Science Engineer' }],
  },
  twitter: {
    card: 'summary',
    title: SITE.title,
    description: SITE.description,
    images: ['/images/mariem (2).png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#F7F4EE',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${cormorantGaramond.variable} h-full antialiased`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
      </head>
      <body className="min-h-full bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''} />
        <MicrosoftClarity projectId={process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || ''} />
      </body>
    </html>
  );
}