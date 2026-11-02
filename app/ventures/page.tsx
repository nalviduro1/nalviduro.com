import { ClipVideo } from '../ClipVideo';
import { BIOS_CELL } from '../NalviPage';
import { ServicePage, serviceMetadata } from '../services/ServicePage';
import {
  CASE_BIOS_CELL,
  CASE_PAKEZDRITE,
  type ServiceSpec,
} from '../services/shared';

/**
 * PERS-15 (D-48): /nalvi/ventures — New Ventures, the page that replaces D-43's
 * Entrepreneur placeholder (D-47). The markup is services/ServicePage.tsx; this
 * file is the copy. A { fill } value renders as a visible "To fill" box.
 */

const SPEC: ServiceSpec = {
  path: '/ventures',
  title: 'New Ventures',
  description:
    'Collaborating on new business ideas in science, software and community: product ownership and a build partner from the first conversation.',
  eyebrow: 'New Ventures · Collaboration',
  headline: 'Have an idea? I build the first version of it with you.',
  lead: 'I have taken two ideas from a brief to something people use — a bilingual community board and a science-visualization pipeline — writing every requirement and decision down along the way. I work with founders the same way: as product owner and build partner, from the first conversation to the first users.',
  who: [
    'A scientist with a product idea and no one to build it with.',
    'A founder who needs the first version shipped, and a plan they can show to whoever funds it.',
    'A community or nonprofit that needs a tool, not a vendor.',
  ],
  services: [
    {
      title: 'From idea to brief',
      body: 'Two or three conversations, then a written brief: the problem, the users, what the first version is and is not, and what it costs to find out.',
      get: 'A brief and a numbered list of requirements you can hand to anyone.',
    },
    {
      title: 'The first version',
      body: 'I own the product and build it, in milestones with gates, until the first users are on it.',
      get: 'A working first version, the decision record, and the runbook to keep it going.',
    },
    {
      title: 'A partner',
      body: 'For the right idea, a longer arrangement — as co-founder, fractional product owner or technical partner.',
      get: { fill: 'what you offer and want: fee, equity, or a mix' },
    },
  ],
  links: [
    {
      name: 'BIOS',
      href: 'https://www.bios.education',
      text: 'bios.education',
    },
    { name: 'PakezDrite', href: '/', text: 'PakezDrite.com' },
  ],
  topFigure: {
    clip: true,
    figure: (
      <ClipVideo
        src={BIOS_CELL.video?.src ?? ''}
        poster={BIOS_CELL.video?.poster ?? ''}
        width={1920}
        height={1080}
        label=""
        decorative
      />
    ),
    caption: BIOS_CELL.video?.caption ?? '',
  },
  cases: [CASE_PAKEZDRITE, CASE_BIOS_CELL],
  tools: [
    {
      label: 'Product',
      tags: [
        'briefs',
        'requirements with acceptance criteria',
        'decision records',
        'milestone gates',
      ],
    },
    {
      label: 'Build',
      tags: [
        'Next.js',
        'TypeScript',
        'Postgres',
        'React Three Fiber',
        'iOS and Android shells',
      ],
    },
  ],
  faq: [
    {
      q: 'Do you take equity?',
      a: { fill: 'your position on fee, equity, or both' },
    },
    {
      q: 'What ideas are you looking for?',
      a: { fill: 'the fields, stages and sizes you want to work on' },
    },
    {
      q: 'Will you sign an NDA before I tell you the idea?',
      a: 'Yes.',
    },
  ],
  close: {
    title: 'Have an idea you want built?',
    body: 'Tell me the problem it solves and who has it. The first call is free, and so is the NDA.',
  },
};

export const metadata = serviceMetadata(SPEC);

export default function VenturesPage() {
  return <ServicePage spec={SPEC} />;
}
