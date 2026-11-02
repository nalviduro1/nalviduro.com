'use client';

import { useEffect } from 'react';

/**
 * PERS-05 (D-35): on /nalvi/card (the QR's landing), open the vCard by itself a
 * moment after the page shows, so a phone that scanned the code goes straight to
 * its "Create New Contact" sheet. Once per visit; the banner's button remains for
 * anyone whose browser holds the navigation back.
 */
export function CardAutoOpen({ href }: { href: string }) {
  useEffect(() => {
    const key = 'nalvi-card-opened';
    try {
      if (sessionStorage.getItem(key)) return;
      sessionStorage.setItem(key, '1');
    } catch {
      /* private mode: just open it */
    }
    const t = setTimeout(() => window.location.assign(href), 1200);
    return () => clearTimeout(t);
  }, [href]);
  return null;
}
