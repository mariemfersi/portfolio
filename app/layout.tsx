import type { Metadata } from 'next';
import { Cormorant_Garamond, Geist_Mono, Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/contexts/theme-context';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import MicrosoftClarity from '@/components/analytics/MicrosoftClarity';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Mariem Fersi | AI Engineer & Creative Developer',
  description: 'Portfolio of Mariem Fersi, AI Engineering Student specializing in Artificial Intelligence, Machine Learning, Business Intelligence, Web Development and Creative Digital Experiences.',
  keywords: ['Mariem Fersi', 'AI Engineer', 'Artificial Intelligence', 'Machine Learning', 'React Developer', 'Portfolio', 'Business Intelligence', 'Power BI', 'Data Science', 'Web Development', 'Actuarial Science'],
  authors: [{ name: 'Mariem Fersi' }],
  openGraph: {
    type: 'website',
    title: 'Mariem Fersi | AI Engineer & Creative Developer',
    description: 'AI Engineering Student passionate about Artificial Intelligence, Business Intelligence, Web Development and Creative Digital Experiences.',
    images: ['/preview.png'],
    url: 'https://mariemfersi.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mariem Fersi | AI Engineer & Creative Developer',
    description: 'AI Engineering Student passionate about Artificial Intelligence, Business Intelligence, Web Development and Creative Digital Experiences.',
    images: ['/preview.png'],
  },
};

export const viewport = {
  themeColor: '#05010D',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/horse-icon.svg" />
      </head>
      <body className="min-h-full bg-background text-foreground transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''} />
        <MicrosoftClarity projectId={process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || ''} />
      </body>
    </html>
  );
}
