import { DeliveryMix } from '../DeliveryMix';
import { PM_HREF } from '../NalviPage';
import { ServicePage, serviceMetadata } from '../services/ServicePage';
import {
  CASE_AANO_TAMPA,
  CASE_ASSEMBLY_QC,
  CASE_BIOS,
  CASE_PAKEZDRITE,
  type ServiceSpec,
} from '../services/shared';

/**
 * PERS-09 (D-42): Nalvi's services page — project manager and product owner in
 * data science, pipeline development, bioinformatics and computational
 * biology. The Project Management topic on /nalvi opens it. English only and
 * outside the /sq /en routing, like /nalvi (PERS-01), so its strings live here.
 * PERS-15 (D-48): the markup moved to services/ServicePage.tsx; this file is the copy.
 *
 * Anything only Nalvi can supply is a { fill } value: it renders as a visible
 * "To fill" box, never as invented copy.
 */

const PM: ServiceSpec = {
  path: PM_HREF,
  title: 'Project Management',
  description:
    'Project manager and product owner for data science, pipeline development, bioinformatics and computational biology.',
  eyebrow: 'Project Management · Product Ownership',
  headline:
    'Project manager and product owner for data science and bioinformatics teams.',
  lead: 'I run the delivery of scientific software and data work that other people build: the backlog, the plan, the milestones and the handover, with the scientists, the engineers and whoever funds the work reading the same plan. When the work itself is a pipeline or an analysis I can do, that is the Computational Biology page.',
  who: [
    'A lab whose analysis lives in scripts nobody else can rerun.',
    'A biotech moving from notebooks to a pipeline it can hand to a partner.',
    'A grant-funded software project with a deliverable date and no one owning the schedule.',
    'A data science team that builds well but has no one owning the backlog.',
    'A core facility with more requests than it can sort.',
  ],
  services: [
    {
      title: 'Product ownership',
      body: 'I own the backlog: the vision, the roadmap, requirements with acceptance criteria, and the order the work gets done in. Your team always knows what matters next and why.',
      get: 'A prioritized backlog, a roadmap people can read, and requirements a developer can test against.',
    },
    {
      title: 'Pipeline delivery',
      body: 'I run the build of a pipeline from first commit to release: scope, milestones, QC gates, environments, and the reviews that keep it reproducible.',
      get: 'A pipeline that runs on someone else’s machine, with the checks that prove its output.',
    },
    {
      title: 'Data science projects',
      body: 'I set the question, the scope and the milestones, and translate between the wet lab, the computational people and leadership so no one is surprised at the end.',
      get: 'A plan everyone signed off on, and status reports that match reality.',
    },
    {
      title: 'Project diagnostic',
      body: 'A short, fixed-length look at a stalled project or pipeline: the code, the data, the people and the plan.',
      get: 'A written report — what exists, what’s missing, what it will take — that you keep either way.',
    },
  ],
  // PERS-27 (D-60): the delivery-mix figure is the first thing the page shows.
  topFigure: {
    figure: <DeliveryMix />,
    caption:
      'The sources never change; the dials do. Reading the project sets one dial per source; the mix becomes the roles, cadence, artifacts, reporting and gates for that project alone, and each retrospective re-tunes it. Under the flow: the same three sources at three different settings, for three of the situations above.',
  },
  cases: [CASE_ASSEMBLY_QC, CASE_PAKEZDRITE, CASE_BIOS, CASE_AANO_TAMPA],
  tools: [
    {
      label: 'Pipelines and bioinformatics',
      tags: [
        'Snakemake 8',
        'HiFi long reads',
        'hifiasm',
        'Merqury',
        'FCS-GX',
        'Inspector',
        'Flagger',
      ],
    },
    {
      label: 'Modeling and 3D',
      tags: [
        'molecular dynamics',
        'OpenFold3',
        'Blender',
        'three.js',
        'glTF',
        'Unity',
      ],
    },
    {
      label: 'Delivery',
      tags: [
        'requirements with acceptance criteria',
        'decision records',
        'milestone gates',
        'Git and GitHub',
        'CI',
      ],
    },
  ],
  faq: [
    {
      q: 'Do you write code?',
      a: 'I build pipelines myself, so my estimates and reviews are grounded in the work. Whether I write code on your project is part of the scope we set together.',
    },
  ],
  background:
    'Project Management Professional (PMP), PMI. Ph.D. in cell and molecular biology from the University of South Florida. A decade across computational biophysics, bioinformatics and large-scale genomic analysis.',
  close: {
    title: 'Have a pipeline or product that needs to ship?',
    body: 'Tell me what you’re trying to learn or build, and by when. The first call is free.',
  },
};

export const metadata = serviceMetadata(PM);

export default function ProjectManagementPage() {
  return <ServicePage spec={PM} />;
}
