import { ABOUT_HREF } from '../NalviPage';
import { ServicePage, serviceMetadata } from '../services/ServicePage';
import {
  BACKGROUND,
  CASE_AANO_TAMPA,
  CASE_NAR,
  type ServiceSpec,
} from '../services/shared';

/**
 * PERS-23 (D-56): /nalvi/about — the biography: what Nalvi is doing now, his
 * roles, the community work, publications and presentations, and Writing. Not an
 * offer, so the spec is `lean`. It holds what /nalvi/non-profits, /publications
 * and /writing held (their addresses forward here, PERS-25). No years are listed
 * (Nalvi's rule, STATE.md). Manuscripts in preparation are left out: the CV says
 * to confirm their status first. A { fill } value renders as a visible "To fill" box.
 */

const BIOPHYS = 'Biophysical Society Annual Meeting; Biophysical Journal.';

const SPEC: ServiceSpec = {
  path: ABOUT_HREF,
  title: 'About',
  description:
    'Nalvi Duro: roles, community work and publications. Ph.D. in cell and molecular biology; project lead and bioinformatician; president of the AANO Tampa Bay chapter.',
  eyebrow: 'About',
  headline: 'Who I am, outside the offers.',
  lead: BACKGROUND,
  lean: true,
  now: {
    updated: 'Updated October 2026',
    lines: [
      'Building BIOS: the protein animation pipeline and the cell game, adenylate kinase as the pilot.',
      'Running PakezDrite.com for the Albanian community of Tampa Bay, and the AANO Tampa Bay chapter.',
      'Taking contract work: pipelines, data analysis, project management and protein animation.',
    ],
  },
  roles: [
    {
      role: 'Project Lead | Bioinformatician',
      org: 'Booz Allen Hamilton',
      points: [
        'Lead a bioinformatics research team: gather requirements, define scope, set milestones, manage resources and delegate tasks.',
        'Implement and troubleshoot WDL and Snakemake pipelines on HPC clusters.',
        'Own data ingestion, quality assurance, filtering, normalization, imputation and integration for multi-omic datasets.',
        'Report findings to the scientific community through publications and conference presentations.',
      ],
    },
    {
      role: 'Chief of Molecular Modeling | Founding Member',
      org: 'Biological Information OS Inc.',
      points: [
        'Define the product vision and execute the business strategy as a founding member.',
        'Design and build a digital education platform that delivers STEM material in an engaging, investigative format.',
        'Create the 3D models and animations of proteins and cells for interactive learning.',
      ],
    },
    {
      role: 'Product Owner | Systems Engineer',
      org: 'Epsilon Systems Solutions',
      points: [
        'Product Owner on the Cooperative Engagement Capability: led a team of five developers and sat on it as the client’s representative, the interface between the client and the company.',
        'Ran Agile/Scrum delivery: backlog grooming, test-driven development planning and stakeholder communication across changing timelines, budgets and requirements.',
        'Applied model-based systems engineering to design solutions, and designed system and unit tests to ensure quality of team deliverables.',
      ],
    },
    {
      role: 'Internal Research and Development',
      org: 'Epsilon Systems Solutions',
      points: [
        'Led internal R&D to create new solutions the firm could use to win work, including a biology-inspired drone concept for a competitive bid.',
        'Given a team of interns to develop an operating doctrine for an autonomous drone swarm; recruited, trained, coached and supervised them.',
      ],
    },
  ],
  who: [],
  services: [],
  cases: [CASE_AANO_TAMPA, CASE_NAR],
  casesTitle: 'Community',
  links: [
    {
      name: 'AANO Tampa Bay Chapter',
      href: 'https://www.aano.org/chapters/tampa',
      text: 'aano.org/chapters/tampa',
    },
    {
      name: 'National Albanian Registry (NAR)',
      href: 'https://albanianregistry.org',
      text: 'albanianregistry.org',
    },
  ],
  listsTitle: 'Publications and presentations',
  lists: [
    {
      title: 'Peer-reviewed articles',
      items: [
        {
          text: 'Gorman BR, Francis M, Nealon CL, Halladay CW, Duro N, Markianos K, Genovese G, Hysi PG, Choquet H, Afshari NA, Li YJ, VA Million Veteran Program, Gaziano JM, Hung AM, Wu WC, Greenberg PB, Pyarajan S, Lass JH, Peachey NS, Iyengar SK. A multi-ancestry GWAS of Fuchs corneal dystrophy highlights the contributions of laminins, collagen, and endothelial cell regulation. Communications Biology 7:418.',
          doi: '10.1038/s42003-024-06046-3',
        },
        {
          text: 'Kriss CL, Duro N, Nadeau OW, Guergues J, Chavez-Chiang O, Culver-Cochran AE, Chaput D, Varma S, Stevens SM Jr. Site-specific identification and validation of hepatic histone nitration in vivo: implications for alcohol-induced liver injury. Journal of Mass Spectrometry 56(6):e4713.',
          doi: '10.1002/jms.4713',
        },
        {
          text: 'Delgado JM, Duro N, Rogers DM, Tkatchenko A, Pandit SA, Varma S. Molecular basis for higher affinity of SARS-CoV-2 spike RBD for human ACE2 receptor. Proteins: Structure, Function, and Bioinformatics 89(9):1134–1144.',
          doi: '10.1002/prot.26086',
        },
        {
          text: 'Duro N, Varma S. Role of structural fluctuations in allosteric stimulation of paramyxovirus hemagglutinin-neuraminidase. Structure 27(10):1601–1611.e2.',
          doi: '10.1016/j.str.2019.07.005',
        },
        {
          text: 'Duro N, Gjika M, Siddiqui A, Scott HL, Varma S. POPC bilayers supported on nanoporous substrates: specific effects of silica-type surface hydroxylation and charge density. Langmuir 32(26):6766–6774.',
          doi: '10.1021/acs.langmuir.6b01155',
        },
      ],
    },
    {
      title: 'Conference abstracts',
      items: [
        {
          text: 'Said I, Shi Y, Mittal A, Li W, Zheng L, Duro N, Devineni P, Khazanov N, Gollub J, Pyarajan S. P304: Using short-read alignments to a pan-genome graph to call variants in challenging medically relevant genes in the Million Veteran Program. ACMG Annual Clinical Genetics Meeting; Genetics in Medicine Open 4:103798.',
          doi: '10.1016/j.gimo.2026.103798',
        },
        {
          text: `Duro N, Varma S. Identifying time-resolved allosteric signaling pathways in proteins using supervised machine learning. ${BIOPHYS}`,
        },
        {
          text: `Duro N, Varma S. Structural fluctuations are key to allosteric stimulation of NDV hemagglutinin-neuraminidase. ${BIOPHYS}`,
        },
        {
          text: `Duro N, Varma S. Dynamic allostery in regulated entry of Newcastle disease virus into host cells. ${BIOPHYS}`,
        },
        {
          text: `Duro N, Dutta P, Varma S. Sialic acid induced conformational ensemble shifts in the hemagglutinin-neuraminidase protein of the Newcastle disease virus. ${BIOPHYS}`,
        },
        {
          text: `Duro N, Gjika M, Scott HL, Varma S. Structural and dynamical properties of POPC bilayers supported on nanoporous substrates. ${BIOPHYS}`,
        },
      ],
    },
    {
      title: 'Dissertation',
      items: [
        {
          text: 'Duro N. Allosteric Control of Proteins: New Methods and Mechanisms. Ph.D. dissertation, University of South Florida. ProQuest.',
        },
      ],
    },
    {
      title: 'Presentations',
      items: [
        {
          text: '“Role of Structural Fluctuations in Allosteric Stimulation of Paramyxovirus Hemagglutinin-Neuraminidase.” 63rd Annual Meeting of the Biophysical Society.',
        },
        {
          text: '“Role of Dynamics in the Function of the NDV Attachment Protein.” 37th Annual Meeting of the American Society for Virology.',
        },
        {
          text: '“Role of Dynamics in the Function of the NDV Attachment Protein.” Computational Science Club Student Research Showcase, University of South Florida.',
        },
        {
          text: '“Allosteric Stimulation of the NDV Host Binding Protein.” CMMB Departmental Seminar, University of South Florida.',
        },
        {
          text: 'Poster presentations at the Biophysical Society Annual Meeting (see the conference abstracts above).',
        },
      ],
    },
  ],
  pending: {
    id: 'writing',
    title: 'Writing',
    fill: 'titles, where each was published, and links',
  },
  tools: [],
  faq: [],
  close: {
    title: 'Want to talk about any of it?',
    body: 'Write to me.',
  },
  subject: 'About',
};

export const metadata = serviceMetadata(SPEC);

export default function AboutPage() {
  return <ServicePage spec={SPEC} />;
}
