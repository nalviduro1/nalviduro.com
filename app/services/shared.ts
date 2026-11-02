import type { ReactNode } from 'react';
import {
  AANO_TAMPA,
  ASSEMBLY_QC,
  BIOS_CELL,
  type Entry,
  NAR,
  PAKEZDRITE,
  PROTEIN_ANIMATIONS,
} from '../NalviPage';

/**
 * PERS-15 (D-48): what every /nalvi/<service> page says the same way, said once.
 * The per-service copy lives in each page.tsx as a ServiceSpec; the markup is
 * ServicePage.tsx. Anything only Nalvi can supply is a { fill } value.
 */

/** Copy only Nalvi can supply: shown as a marked placeholder until it exists. */
export type Fill = { fill: string };
export type Copy = string | Fill;

export function isFill(value: Copy): value is Fill {
  return typeof value !== 'string';
}

export type Field = { title: string; body: string };
export type Service = { title: string; body: string; get: Copy };
export type Engagement = {
  title: string;
  length: string;
  body: string;
  price: Copy;
};
export type Case = {
  /** The page that tells this case in full; every other page shows a pointer to it (PERS-23). */
  home: string;
  entry: Entry;
  title: string;
  problem: string;
  role: Copy;
  shipped: string;
  changed: Copy;
  tags?: readonly string[];
};
export type ToolGroup = { label: string; tags: readonly string[] };
export type Faq = { q: string; a: Copy };
export type SiteLink = { name: string; href: string; text: string };
export type Entry_ = { text: string; doi?: string };
export type CiteList = { title: string; items: readonly Entry_[] };
export type Role = {
  role: string;
  org: string;
  scope?: string;
  points?: readonly string[];
};

export type ServiceSpec = {
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  headline: string;
  lead: string;
  fields?: readonly Field[];
  who: readonly string[];
  services: readonly Service[];
  /** PERS-27 (D-60): the figure is the first thing on the page, above the hero; `clip` is a moving picture, not a wide diagram. */
  topFigure?: { figure: ReactNode; caption: string; clip?: boolean };
  /** PERS-29: a clip that plays behind the hero, full width, the way the landing's header does (D-40); decorative. */
  backdrop?: { src: string; poster: string; width: number; height: number };
  engagements?: readonly Engagement[];
  cases: readonly Case[];
  tools: readonly ToolGroup[];
  background?: Copy;
  /** Not an offer: only the hero, the work and the ask (Community Involvement). */
  lean?: boolean;
  /** Title of the cases section when the page is not an offer; defaults to the offers' title. */
  casesTitle?: string;
  /** What Nalvi is doing now: a dated short list, right after the hero. */
  now?: { updated: string; lines: readonly string[] };
  /** Leadership roles as flat rows, above the cases (PERS-20). */
  roles?: readonly Role[];
  /** Plain lists of citations or talks; `doi` becomes a link. One section each, or all in one under `listsTitle`. */
  lists?: readonly CiteList[];
  listsTitle?: string;
  /** Sites to open, one row each: the name and the address as shown. */
  links?: readonly SiteLink[];
  /** A section with nothing yet: only a visible To fill box under `title`. */
  pending?: { id?: string; title: string; fill: string };
  /** Appended after SHARED_FAQ. */
  faq: readonly Faq[];
  close: { title: string; body: string };
  /** Subject of the Send-me-a-message link; defaults to the SERVICES entry for `path`. */
  subject?: string;
};

export const FIGURES_LABEL = 'Figures';
export const HOME_LABEL = '← All of my work';
export const WHERE =
  'Tampa Bay, Florida · Remote across the US · Contract or fractional';

/**
 * The engagement ladder. Phase names, gate names and questions come from
 * ~/Desktop/PA/Project_Management/PLAYBOOK.md (the master: if they differ, the
 * playbook wins); `get` is its exit deliverable, in client language.
 */
export type MethodStep = {
  title: string;
  question: string;
  get: string;
  gate?: string;
};
export const METHOD: readonly MethodStep[] = [
  {
    title: 'Intake',
    question: 'Should we do this, and on what basis?',
    get: 'A thirty-minute call, then a written intake. Paid, favor or equity is decided and written down.',
  },
  {
    title: 'Discovery',
    question:
      'What exactly is being launched, for whom, and what does “launched” mean?',
    get: 'A charter: goal, what is in and out of scope, success metrics, stakeholders, constraints and an audit of what you already have.',
  },
  {
    title: 'Plan',
    question: 'How do we get there and by when?',
    get: 'Milestones, a work breakdown, owners and dates, a risk log, and an agreed cadence. A proposal and engagement letter if the work is paid.',
    gate: 'G1 — plan approved',
  },
  {
    title: 'Build',
    question: 'Are we making the thing, on track, with scope under control?',
    get: 'Weekly status updates, meeting notes, a written change request for any scope change, and the deliverables themselves.',
    gate: 'G2 — launch readiness',
  },
  {
    title: 'Launch',
    question:
      'Does it go live cleanly, and does it work in the first two weeks?',
    get: 'A launch checklist run, a go/no-go record, a one-page launch-day runbook and a review at fourteen days.',
  },
  {
    title: 'Close',
    question: 'Can you run it without me, and what did we learn?',
    get: 'Handoff, training, transfer of every account to you, and a retrospective.',
    gate: 'G3 — closed',
  },
];
export const GATE_DECIDES: Record<string, string> = {
  'G1 — plan approved':
    'You approve the plan, in writing. Nothing is built before that.',
  'G2 — launch readiness':
    'The checklist is green, or red and you accept the red in writing.',
  'G3 — closed':
    'You hold everything and can run it yourself. Then we are done.',
};
export const METHOD_PROOF =
  'It’s how PakezDrite.com was built: every change traces to a numbered requirement, and every decision is on record with who made it and why.';

export const DEFAULT_ENGAGEMENTS: readonly Engagement[] = [
  {
    title: 'Diagnostic',
    length: 'About 2 weeks',
    body: 'Fixed scope, fixed price. Ends in a written plan you keep, whether or not we work together after.',
    price: 'Free for now',
  },
  {
    title: 'Fractional',
    length: 'Set hours a week, ongoing',
    body: 'Your project manager or product owner on a set number of hours a week: backlog, planning, stakeholders and status.',
    price: 'On request',
  },
  {
    title: 'Project',
    length: 'Fixed scope',
    body: 'A defined deliverable in milestones, each ending at a gate and a written handback.',
    price: 'On request',
  },
];

export const SHARED_FAQ: readonly Faq[] = [
  {
    q: 'Do you work remotely?',
    a: 'Yes. I’m in Tampa Bay, Florida, on Eastern Time, and work remotely with teams across the US. On-site in Tampa Bay is easy.',
  },
  {
    q: 'How do you contract?',
    a: { fill: '1099, corp-to-corp, through an LLC — whichever applies' },
  },
  {
    q: 'Will you sign an NDA?',
    a: 'Yes — before the first detailed conversation, if you want.',
  },
  {
    q: 'What about patient or controlled-access data?',
    a: 'It stays where your agreements say it lives. I work inside your environment and its access rules, and I don’t move restricted data off it.',
  },
  {
    q: 'How soon can you start?',
    a: { fill: 'your current availability' },
  },
];

export const BACKGROUND =
  'Ph.D. in cell and molecular biology from the University of South Florida. A decade across computational biophysics, bioinformatics and large-scale genomic analysis, with peer-reviewed work in Communications Biology, Structure, Proteins, Langmuir and the Journal of Mass Spectrometry.';

// Real, named quotes only. The section stays hidden while this is empty.
export const TESTIMONIALS: readonly {
  quote: string;
  name: string;
  role: string;
}[] = [];

/** Case studies told the same way on more than one page. */
export const CASE_ASSEMBLY_QC: Case = {
  home: '/computational-biology',
  entry: ASSEMBLY_QC,
  title: 'assembly-qc-processing — a pipeline people can trust',
  problem:
    'Diploid HiFi assemblies headed into a pangenome graph need cleaning — contaminants, misjoins, duplicated X/Y spans — and everyone downstream has to trust exactly what was changed.',
  role: 'Designed and built the workflow.',
  shipped:
    'One Snakemake 8 workflow, one machine, one setup script. Every change a step makes is written to a ledger with coordinates, and an independent check re-derives the output from the input and the ledger before anything downstream runs.',
  changed: { fill: 'who runs it now, and what it replaced or saved' },
  tags: ASSEMBLY_QC.tags,
};

export const CASE_PROTEIN_ANIMATION: Case = {
  home: '/computational-biology',
  entry: PROTEIN_ANIMATIONS,
  title: 'The heme pocket and adenylate kinase — two clips from coordinates',
  problem: 'Science-education 3D tends to look right and be wrong.',
  role: 'Designed the pipeline and rendered both clips.',
  shipped:
    'Oxymyoglobin’s heme pocket (PDB 1A6M) rendered in Blender from the deposited coordinates, playing behind the page header; adenylate kinase releasing two ADP, from steered molecular dynamics, 13 s.',
  changed: { fill: 'where the clips are used, or a client you can name' },
  tags: [
    'Blender',
    'PDB',
    'molecular dynamics',
    'OpenFold3',
    'three.js',
    'glTF',
  ],
};

export const CASE_AANO_TAMPA: Case = {
  home: '/about',
  entry: AANO_TAMPA,
  title: 'AANO Tampa Bay and the National Albanian Registry — volunteer teams',
  problem:
    'Volunteer organizations run on people’s spare hours. The work has to be planned so it still gets done.',
  role: 'President of the AANO Tampa Bay chapter; Secretary of the National Albanian Registry.',
  shipped:
    'Chapter meetups and events on the Gulf Coast, and a registry that counts Albanians in the United States.',
  changed: { fill: 'members, events or registrations you can share' },
};

export const CASE_NAR: Case = {
  home: '/about',
  entry: NAR,
  title: 'National Albanian Registry — counting the community',
  problem:
    'A community that is not counted can be ignored. Albanians in the United States needed a count.',
  role: 'Secretary.',
  shipped:
    'A volunteer-built 501(c)(3) registry: free, two minutes, and your data stays yours.',
  changed: { fill: 'registrations, or how the count has been used' },
};

export const CASE_PAKEZDRITE: Case = {
  home: '/ventures',
  entry: PAKEZDRITE,
  title: 'PakezDrite.com — a product from brief to launch',
  problem:
    'The Albanian community of Tampa Bay had no one place to find jobs, services and events in both of its languages.',
  role: 'Product owner: wrote the brief, made every product decision on record, and accepted each milestone at its gate.',
  shipped:
    'A live bilingual Albanian and English board — jobs, services, events and the nonprofits, with event tickets and chapter membership.',
  changed: { fill: 'listings, members or visits since launch' },
};

export const CASE_BIOS: Case = {
  home: '/ventures',
  entry: PROTEIN_ANIMATIONS,
  title: 'BIOS — science visuals that don’t lie',
  problem:
    'Science-education 3D tends to look right and be wrong. BIOS needed visuals students can trust.',
  role: 'Product owner across the science, the 3D and the iOS and Android builds.',
  shipped:
    'A pipeline that turns sourced structural data into interactive protein trajectories, each motion labeled measured, modeled or simulated (adenylate kinase is the pilot), and a concept for a cell game where everything but the probe is sourced biology.',
  changed: { fill: 'where BIOS stands now — pilots, users, schools' },
};

export const CASE_BIOS_CELL: Case = {
  ...CASE_BIOS,
  entry: BIOS_CELL,
  title: 'BIOS Cell — a cell where everything but the probe is sourced',
};
