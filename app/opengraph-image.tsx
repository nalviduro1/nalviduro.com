import { ImageResponse } from 'next/og';

const NAME = 'Nalvi Duro';
// Same text as ROLE in NalviPage.tsx (its home): this route cannot import a Server Component file.
const ROLE =
  'Independent contractor for pipeline development, data analysis, project management and protein animation.';
const PLACE = 'Tampa Bay, Florida';

export const alt = NAME;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 96,
        background: '#0a192f',
        color: '#e6f1ff',
      }}
    >
      <div style={{ fontSize: 96, fontWeight: 700 }}>{NAME}</div>
      <div style={{ marginTop: 24, fontSize: 36, color: '#ccd6f6' }}>
        {ROLE}
      </div>
      <div style={{ marginTop: 24, fontSize: 32, color: '#64ffda' }}>
        {PLACE}
      </div>
    </div>,
    size,
  );
}
