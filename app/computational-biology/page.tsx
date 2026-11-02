import { BIOS_CELL } from '../NalviPage';
import { ServicePage, serviceMetadata } from '../services/ServicePage';
import {
  CASE_ASSEMBLY_QC,
  CASE_PROTEIN_ANIMATION,
  type ServiceSpec,
} from '../services/shared';

/**
 * PERS-15 (D-48, D-54): /nalvi/computational-biology — Computational Biology: the
 * assembly-QC pipeline and protein animation, one tab beside Project Management.
 * The markup is services/ServicePage.tsx; this file is the copy. A { fill } value
 * renders as a visible "To fill" box.
 */

const SPEC: ServiceSpec = {
  path: '/computational-biology',
  title: 'Computational Biology',
  description:
    'Pipelines and analysis from raw sequencing data to results a team can trust, and accurate 3D animations of proteins and mechanisms: versioned, checked, and re-runnable by someone who isn’t me.',
  eyebrow: 'Computational Biology · Pipelines · Protein Animation',
  headline: 'Computational biology that runs, and shows its work.',
  lead: 'Work I do with my own hands. Two things I build. A pipeline from raw sequencing data to results a downstream team can trust: versioned, gated by QC, with every change it makes written down. And an animation of your protein or mechanism, built from the deposited coordinates, with every motion labeled by how it was obtained: measured, modeled or simulated.',
  fields: [
    {
      title: 'Assembly processing and QC',
      body: 'Genome assemblies cleaned and checked before anyone builds on them: contaminants, misjoins and duplicated spans found, fixed and ledgered.',
    },
    {
      title: 'Protein animation',
      body: 'Accurate 3D clips and interactive models of proteins and mechanisms, rendered from the deposited coordinates.',
    },
  ],
  who: [
    'A lab whose analysis lives in scripts only one person can run.',
    'A biotech moving from notebooks to a pipeline it can hand to a partner or a CRO.',
    'A core facility or consortium that needs the same QC applied the same way to every sample.',
    'A lab with data and a deadline, and no one free to analyse it.',
    'A PI with a talk or a grant that needs the mechanism shown, not described.',
    'A journal figure that would be clearer as ten seconds of motion.',
    'A biotech site or a course that needs its molecules drawn right.',
  ],
  services: [
    {
      title: 'Pipeline build',
      body: 'A workflow from first commit to release: scope, environments, QC gates, tests, CI and a runbook.',
      get: 'A Snakemake workflow with a setup script, a ledger of what each step changed, and checks that re-derive the output.',
    },
    {
      title: 'Pipeline rescue',
      body: 'An existing pipeline that no one dares touch: I read it, pin it, test it, and make it reproducible before changing anything.',
      get: 'The same results, reproduced on a clean machine, with the differences explained.',
    },
    {
      title: 'QC and reporting',
      body: 'The checks that let a downstream team trust the output — contamination, misjoins, duplication, completeness — and a report a reviewer can read.',
      get: 'A QC report per sample and a pass/fail rule you agreed to before the run.',
    },
    {
      title: 'Analysis',
      body: 'From a question to an answer: data audit, method chosen and justified, results with their uncertainty, figures that show what the numbers do.',
      get: 'A written report, the figures, and a repository that reproduces them.',
    },
    {
      title: 'Second opinion',
      body: 'A fixed-length review of an analysis someone else did — the data, the method, the claims.',
      get: 'A short memo: what holds, what does not, and what it would take to be sure.',
    },
    {
      title: 'A clip',
      body: 'One structure or one mechanism, 10–30 seconds, from PDB or AlphaFold coordinates, in your palette, with a still for the slide.',
      get: 'MP4 (1080p or 4K), a poster frame, and the Blender file.',
    },
    {
      title: 'A series',
      body: 'A set of clips that share a look — a pathway, a family, a lecture.',
      get: 'The clips, a style sheet so the next one matches, and the project files.',
    },
    {
      title: 'Interactive 3D',
      body: 'The structure in the browser: rotate, zoom, step through states — built on the BIOS pipeline.',
      get: 'A web embed (glTF + three.js) you can put on a page, and the source.',
    },
  ],
  engagements: [
    {
      title: 'Diagnostic',
      length: 'About 2 weeks',
      body: 'Fixed scope, fixed price. A look at a pipeline or analysis that has stalled, ending in a written plan you keep.',
      price: 'On request',
    },
    {
      title: 'Pipeline or analysis project',
      length: 'Fixed scope',
      body: 'A defined deliverable in milestones, each ending at a gate and a written handback.',
      price: 'On request',
    },
    {
      title: 'Clip, series or interactive',
      length: 'About 2 weeks per clip; interactive scoped per structure',
      body: 'One structure or mechanism with two rounds of revisions, a set of clips in one look, or a browser embed.',
      price: 'On request',
    },
  ],
  // PERS-29: the BIOS walker loop plays behind the hero, full width, the copy on top of it
  // (the landing's D-40 treatment). The ADK clip remains in the protein-animation case below.
  backdrop: {
    src: BIOS_CELL.video?.src ?? '',
    poster: BIOS_CELL.video?.poster ?? '',
    width: 1920,
    height: 1080,
  },
  cases: [CASE_ASSEMBLY_QC, CASE_PROTEIN_ANIMATION],
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
      label: 'Analysis and data',
      tags: [
        'Python',
        'R',
        'statistics',
        'normalization and imputation',
        'sequencing QC',
        'multi-omics',
        'metabolomics',
      ],
    },
    {
      label: 'Modeling and 3D',
      tags: [
        'molecular dynamics',
        'OpenFold3',
        'Blender (Cycles)',
        'three.js',
        'glTF',
        'Unity',
        'ffmpeg',
      ],
    },
    {
      label: 'Delivery',
      tags: [
        'Git and GitHub',
        'CI',
        'conda / containers',
        'HPC schedulers',
        'runbooks',
      ],
    },
  ],
  faq: [
    {
      q: 'Which workflow managers?',
      a: 'Snakemake first. Nextflow if that is what your team runs; say so on the call.',
    },
    {
      q: 'Can you work inside our HPC or cloud?',
      a: 'Yes. I work in your environment under your access rules; nothing leaves it.',
    },
    {
      q: 'Do I get the code?',
      a: 'Yes. Every pipeline and every analysis ships with the repository that reproduces it.',
    },
    {
      q: 'What if the data doesn’t support an answer?',
      a: 'Then that is the answer, with what would be needed to get one. You are not paying for a conclusion.',
    },
    {
      q: 'Where does the structure come from?',
      a: 'The PDB, AlphaFold or your own coordinates. The source is named in the clip’s credit line.',
    },
    {
      q: 'Can you animate motion nobody has measured?',
      a: 'Yes, and it is labeled as modeled or simulated on screen. Chemistry is drawn, never claimed.',
    },
    {
      q: 'What do I get to keep?',
      a: 'Everything: the renders, the poster frames and the project files.',
    },
  ],
  close: {
    title:
      'Have data that needs a pipeline, or a structure that needs to move?',
    body: 'Tell me what goes in, what should come out, and by when. The first call is free.',
  },
};

export const metadata = serviceMetadata(SPEC);

export default function ComputationalBiologyPage() {
  return <ServicePage spec={SPEC} />;
}
