import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Demo Personal Brand | Creator Product Strategist',
  description:
    'Demo personal brand website showcasing hero, projects, value proposition, social proof, and lead capture.',
  keywords: ['personal brand', 'creator economy', 'digital products', 'portfolio demo'],
  openGraph: {
    title: 'Demo Personal Brand',
    description: 'A clean, modern personal brand website demo built with Next.js.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
