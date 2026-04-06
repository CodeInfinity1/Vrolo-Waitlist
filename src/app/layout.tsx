import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vrolo - Work Continues When Your Team Is Away',
  description:
    'Vrolo ensures operations continue by handling routine work when employees are away. Join the waitlist for early access.',
  keywords: ['AI automation', 'business continuity', 'team availability', 'workflow automation', 'SaaS'],
  openGraph: {
    title: 'Vrolo - Work Continues When Your Team Is Away',
    description:
      'Vrolo ensures operations continue by handling routine work when employees are away.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
