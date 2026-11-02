'use client';

import { useEffect, useRef } from 'react';

/**
 * PERS-04 (D-34): a clip that plays on its own, silently, in a loop. A client
 * component for one reason: React does not write `muted` into server-rendered
 * HTML, and browsers refuse to autoplay a video that is not muted at the moment
 * it starts, so the attribute is set here before `play()` is asked for. Without
 * JavaScript the poster shows and the controls still work.
 *
 * PERS-07 (D-40): `decorative` is the clip behind the header — no controls,
 * hidden from assistive technology, and left on its poster when the reader
 * prefers reduced motion.
 */
export function ClipVideo({
  src,
  poster,
  width,
  height,
  label,
  decorative = false,
}: {
  src: string;
  poster: string;
  width: number;
  height: number;
  label: string;
  decorative?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    if (
      decorative &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      v.removeAttribute('autoplay');
      v.pause();
      return;
    }
    const start = () => {
      v.play().catch(() => {
        /* autoplay refused (data saver, low power): the poster and controls remain */
      });
    };
    if (v.readyState >= 2) start();
    else v.addEventListener('loadeddata', start, { once: true });
    return () => v.removeEventListener('loadeddata', start);
  }, [decorative]);
  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      width={width}
      height={height}
      aria-label={decorative ? undefined : label}
      aria-hidden={decorative || undefined}
      tabIndex={decorative ? -1 : undefined}
      autoPlay
      muted
      loop
      playsInline
      controls={!decorative}
      preload="auto"
    />
  );
}
