import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';
import './nalvi.css';

// Same two faces as the board (BRD-30), declared again because this page sits
// outside app/[locale]/ and so outside that layout's <html>.
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a192f',
};

const TITLE = 'Nalvi Duro · Independent contractor';
const DESCRIPTION =
  'Pipeline development, data analysis, project management and protein animation, by contract. Tampa Bay, Florida; remote across the US.';

export const metadata: Metadata = {
  // PERS-30 (D-65): the page lives on its own domain.
  metadataBase: new URL('https://nalviduro.com'),
  title: { default: TITLE, template: '%s · Nalvi Duro' },
  description: DESCRIPTION,
  openGraph: {
    type: 'profile',
    url: '/',
    title: TITLE,
    description: DESCRIPTION,
    siteName: 'Nalvi Duro',
  },
  twitter: { card: 'summary_large_image' },
};

export default function NalviLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
