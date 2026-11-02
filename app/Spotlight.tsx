'use client';

import { useEffect, useRef } from 'react';

/**
 * A soft glow that follows the cursor, drawn over the page but ignoring
 * pointer events. Decoration only: nothing depends on it, and it stays off
 * for touch screens and for anyone who asks for reduced motion.
 */
export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el === null) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const onMove = (e: MouseEvent) => {
      el.style.setProperty('--sx', `${e.clientX}px`);
      el.style.setProperty('--sy', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return <div ref={ref} className="nalvi-spotlight" aria-hidden="true" />;
}
