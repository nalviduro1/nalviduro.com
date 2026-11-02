'use client';

import { useEffect, useState } from 'react';

/**
 * PERS-25 (D-58): the links beside a page's eyebrow, one per section the page
 * shows. The link of the section on screen is marked. `ids` lists every section
 * in page order when some have no link (a section with no link ends the one
 * before it); it defaults to the links' own ids.
 */
export function SectionNav({
  items,
  ids,
}: {
  items: readonly { id: string; label: string }[];
  ids?: readonly string[];
}) {
  const [active, setActive] = useState<string | null>(null);
  const spy = ids ?? items.map((i) => i.id);
  const key = spy.join(',');

  useEffect(() => {
    const list = key.split(',');
    const update = () => {
      const line = window.innerHeight * 0.35;
      let current: string | null = null;
      for (const id of list) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [key]);

  if (items.length === 0) return null;
  const marked =
    active === 'links'
      ? 'work'
      : active === 'writing'
        ? 'publications'
        : active;
  return (
    <nav aria-label="On this page" className="nalvi-sectionnav">
      <ul>
        {items.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="nalvi-sectionnav-link"
              aria-current={marked === id ? 'true' : undefined}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
