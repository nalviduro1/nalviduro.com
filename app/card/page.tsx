import type { Metadata } from 'next';
import { NalviPage } from '../NalviPage';

/**
 * PERS-05 (D-35): the address the QR wallpaper carries. The page loads first,
 * then the contact card opens so the visitor can save Nalvi's phone and email
 * in one tap. Not for search engines.
 */
export const metadata: Metadata = {
  title: { absolute: 'Nalvi Duro' },
  robots: { index: false, follow: true },
};

export default function NalviCardPage() {
  return <NalviPage card />;
}
