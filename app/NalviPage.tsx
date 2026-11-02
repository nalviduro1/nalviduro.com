import type { ReactNode } from 'react';
import { CardAutoOpen } from './CardAutoOpen';
import { ClipVideo } from './ClipVideo';
import { DeliveryMix } from './DeliveryMix';
import { Spotlight } from './Spotlight';

/**
 * The page itself lives here (NalviPage.tsx) because Next allows a page file only
 * its own exports: page.tsx and card/page.tsx both render this component.
 *
 * PERS-01 (D-31): Nalvi's own page at /nalvi, laid out after Brittany Chiang's
 * site: a fixed left column, sections scrolling on the right. English only,
 * outside the /sq /en routing, so its strings live here rather than in
 * messages/. Replace the '#' hrefs and the "coming" copy as they exist.
 *
 * PERS-02 (D-32): a section may hold groups (sub-headings), and an entry may
 * carry a thumbnail, tags and a strip of figures. The figures are static SVGs
 * under public/nalvi/figures/, drawn for the page; they show mechanisms, not
 * data.
 *
 * PERS-03 (D-33): Molecular Modeling holds the two BIOS products — the protein
 * animation pipeline (a 13 s clip of a ligand leaving adenylate kinase, rendered
 * from the pipeline's own player) and the cell game (three concept frames and a
 * 7 s flythrough, drawn for the page). The Community Organizing cards carry site
 * screenshots. Media live under public/nalvi/media/. The Projects section is gone
 * (its items live under Molecular Modeling).
 *
 * PERS-04 (D-34): the clips play on their own (muted, looped); every heading on
 * the right carries a "Work with me" button; the QR is also offered as an iPhone
 * wallpaper (public/nalvi/wallpaper/) so a lock screen can carry the link.
 *
 * PERS-05 (D-35): the wallpaper's code opens /nalvi/card — this page with a
 * "Save my contact" banner and the vCard opening by itself — so a scan ends in
 * the phone's contact sheet with Nalvi's phone and email. The About section is
 * gone ("the rest of the site is my bio"); the CV is a button beside Contact.
 *
 * PERS-06 (D-39): a header across the top — the name on one line with Save
 * contact, CV and Get in touch under it, and Nalvi's photo centred in the right
 * half of the screen. The two columns start below it. The QR button is gone
 * (the wallpaper's code still opens /nalvi/card).
 *
 * PERS-07 (D-40): a 10 s clip plays behind the header — oxymyoglobin's heme
 * pocket (PDB 1A6M: the heme, its iron, the bound O2 and the two histidines on
 * the backbone), rendered in Blender from the deposited coordinates by
 * scripts/nalvi-heme-pocket.py. Decorative: no controls, hidden from assistive
 * technology, faded into the navy so the name keeps its contrast.
 *
 * PERS-24 (D-57): the page is a landing — header, topic row, role line, three
 * doors (one per offer) and a line to /nalvi/about. The cards, sections and
 * scroll-spy of D-31…D-34 are gone; each project's full case lives on its
 * offer's page (PERS-23).
 *
 * PERS-09 (D-42): the Project Management topic opens /nalvi/project-management,
 * the services page. It reads its contact links and project cards from here.
 */
export const NAME = 'Nalvi Duro';
const ROLE =
  'Independent contractor for pipeline development, data analysis, project management and protein animation.';
export const TAGLINE =
  'Tampa Bay, Florida · Remote across the US · Open to new ventures';
const PHOTO_SRC = '/media/nalvi-duro.jpg';
const PHOTO_ALT =
  'Nalvi Duro in a navy blazer over a white T-shirt, on a tree-lined street.';
const HERO_CLIP = {
  src: '/media/heme-pocket.mp4',
  poster: '/media/heme-pocket.jpg',
  width: 1280,
  height: 720,
};
export const CONTACT_LABEL = 'Send me a Message';
export function mailto(subject: string): string {
  return `mailto:nalviduro1@gmail.com?subject=${encodeURIComponent(subject)}`;
}
export const CONTACT = mailto('Work with me');
export const BOOK_LABEL = 'Book a 30-minute call';
// PERS-16 (D-49): one booking link for every "Book a call" button on the site.
// Until Nalvi supplies a scheduling URL this opens an email asking for a time.
export const BOOKING_URL: string | null = null;
export const CALENDAR_HREF = BOOKING_URL ?? mailto('Let’s find a time');
const VCARD_LABEL = 'Save Contact';
const VCARD_HREF = '/Nalvi_Duro.vcf';
const CARD_PHONE = '267 266 3842';
const CARD_EMAIL = 'nalviduro1@gmail.com';
const CARD_LINE = `${CARD_PHONE} · ${CARD_EMAIL}`;
const CARD_PROMPT = 'Save my contact';
const CARD_NOTE = 'Opening your contacts…';

// Profile links beside the contact buttons. Add { label, href } as they exist.
const SOCIALS: readonly { label: string; href: string }[] = [
  { label: 'GitHub', href: 'https://github.com/nalviduro1' },
];

type Figure = {
  src: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
};

type Video = {
  src: string;
  poster: string;
  caption: string;
  /** Intrinsic size, for layout before the poster loads. */
  width: number;
  height: number;
};

export type Entry = {
  title: string;
  blurb: string;
  href: string;
  tags?: readonly string[];
  /** Thumbnail shown beside the title; width/height give its aspect ratio. */
  image?: { src: string; alt: string; width?: number; height?: number };
  /** A short clip shown under the card (muted, looped, with controls). */
  video?: Video;
  /** Full-size figures linked under the card, each opening in a new tab. */
  figures?: readonly Figure[];
};

// PERS-05: no bio section — the page is the bio. The CV sits beside Contact.
export const CV_LABEL = 'See My CV';
export const CV_HREF = '/Nalvi_Duro_CV.pdf';

export const ASSEMBLY_QC: Entry = {
  title: 'assembly-qc-processing',
  blurb:
    'QC → processing → QC for diploid HiFi assemblies headed into a pangenome graph: one Snakemake 8 workflow, one machine, one setup script. Every change a step makes — a contig dropped, cut, masked or base-corrected — is recorded in a ledger with coordinates, and an independent check re-derives the output from the input and the ledger before anything downstream runs.',
  href: 'https://github.com/nalviduro1/assembly-qc-processing',
  tags: [
    'Snakemake 8',
    'HiFi',
    'hifiasm',
    'FCS-GX',
    'Inspector',
    'Merqury',
    'Flagger',
    'MIT',
  ],
  image: {
    src: '/figures/aqp-ledger.svg',
    alt: 'A haplotype drawn as a bar of contigs passing through six processing steps, with every change written to a ledger and re-checked.',
  },
  figures: [
    {
      src: '/figures/aqp-ledger.svg',
      alt: 'The ledger: a haplotype of contigs in, six steps, every change recorded with coordinates, output re-derived from input plus ledger.',
      caption: 'The ledger — nothing is rewritten silently',
    },
    {
      src: '/figures/aqp-misjoin.svg',
      alt: 'Two contigs whose alignment blocks land on different reference chromosomes; the sample’s own reads decide which one is a chimeric join and is cut.',
      caption: 'Misjoins — the sample’s own reads decide, not the reference',
    },
    {
      src: '/figures/aqp-sexchr.svg',
      alt: 'A male sample’s X and Y contigs from both haplotypes over a reference X and Y; duplicated spans are dropped under an absolute rule, then regrouped.',
      caption: 'X/Y de-duplication — an absolute rule, never a fraction',
    },
  ],
};

export const PROTEIN_ANIMATIONS: Entry = {
  title: 'Protein animation pipeline',
  blurb:
    'Sourced structural data in, interactive 3D protein trajectories out: every heavy atom filled at its van der Waals radius, domains in pale tones, the active site deep, colour draining toward white with distance from the ligand. Motion is labelled by how it was obtained — measured, modelled or simulated — and chemistry is always drawn, never claimed. Built for bios.education; adenylate kinase is the pilot.',
  href: 'https://www.bios.education',
  tags: ['molecular dynamics', 'OpenFold3', 'three.js', 'glTF', 'Unity'],
  image: {
    src: '/media/adk-release.jpg',
    alt: 'Adenylate kinase drawn as filled atoms in blue, salmon and gold, the two ADP products leaving the active site.',
    width: 1280,
    height: 720,
  },
  video: {
    src: '/media/adk-release.mp4',
    poster: '/media/adk-release.jpg',
    caption:
      'The products leave — adenylate kinase opens and releases two ADP (steered molecular dynamics; 13 s)',
    width: 1280,
    height: 720,
  },
};

export const BIOS_CELL: Entry = {
  title: 'BIOS Cell — the game',
  blurb:
    'Pilot a ribosome-sized probe through a budding-yeast cell: find the organelles, watch and intervene in real processes, edit a gene the way strain engineers do. Everything but the probe is sourced biology with an accuracy tier. React Three Fiber in the browser, with native shells for iOS and Android.',
  href: 'https://www.bios.education',
  tags: ['React Three Fiber', 'rapier', 'Capacitor', 'glTF', 'Ink'],
  image: {
    src: '/media/bios-reveal.jpg',
    alt: 'Concept frame: the probe passes through the bud neck toward the nucleus, light from above, cables converging.',
    width: 1920,
    height: 1080,
  },
  video: {
    src: '/media/bios-walker.mp4',
    poster: '/media/bios-walker.jpg',
    caption:
      'The Walker — the probe rides an astral microtubule from the nuclear envelope past a mitochondrial tubule, the cortical ER, a lipid droplet and a peroxisome, at a kinesin’s real pace (16 s loop, real time). Path-traced; ribosomes are the yeast 80S (PDB 4V88), the crowd AlphaFold models of the most abundant cytosolic proteins, drawn at about a tenth of their true density.',
    width: 1920,
    height: 1080,
  },
  figures: [
    {
      src: '/media/bios-reveal.jpg',
      alt: 'Concept frame: the reveal through the bud neck — the nucleus as the dome, microtubule cables converging, motes in blue water.',
      caption: 'The reveal — through the bud neck',
      width: 1920,
      height: 1080,
    },
    {
      src: '/media/bios-canyon.jpg',
      alt: 'Concept frame: inside a mitochondrion, a canyon of column walls lined with rows of ATP synthase, light at the far end.',
      caption: 'The crista canyon — inside a mitochondrion',
      width: 1920,
      height: 1080,
    },
    {
      src: '/media/bios-lake.jpg',
      alt: 'Concept frame: from an ER ledge with lipid droplets, the probe overlooks the vacuole, the nucleus and a chain of mitochondria.',
      caption: 'The vacuole lake — from an ER ledge',
      width: 1920,
      height: 1080,
    },
  ],
};

export const PAKEZDRITE: Entry = {
  title: 'PakezDrite.com',
  blurb:
    'A bilingual Albanian and English jobs board for the Albanian community of Tampa Bay — jobs, services, events and the nonprofits, with event tickets and membership for the chapter.',
  href: '/',
  image: {
    src: '/media/pakezdrite.jpg',
    alt: 'The PakezDrite.com home page: featured service, job and event cards.',
    width: 1500,
    height: 900,
  },
};

export const AANO_TAMPA: Entry = {
  title: 'AANO Tampa Bay Chapter',
  blurb:
    'President of the Tampa Bay chapter of the Albanian American National Organization — community on the Gulf Coast: meetups, events, and support for scholars in Florida.',
  href: 'https://www.aano.org/chapters/tampa',
  image: {
    src: '/media/aano-tampa.jpg',
    alt: 'The AANO Tampa chapter page: the chapter crest over the Tampa skyline at dusk.',
    width: 1500,
    height: 900,
  },
};

export const NAR: Entry = {
  title: 'National Albanian Registry',
  blurb:
    'Secretary of the National Albanian Registry — a volunteer-built 501(c)(3) that counts Albanians in the United States so the community cannot be ignored: free, two minutes, your data stays yours.',
  href: 'https://albanianregistry.org',
  image: {
    src: '/media/nar.jpg',
    alt: 'The National Albanian Registry home page: Count Me Albanian.',
    width: 1500,
    height: 900,
  },
};

// The row under the header, the same on every /nalvi page (PERS-25). Each opens
// its own page; `subject` feeds that page's mailto (PERS-17).
export const PM_HREF = '/project-management';
export const CB_HREF = '/computational-biology';
export const VENTURES_HREF = '/ventures';
export const ABOUT_HREF = '/about';
type Topic = { href: string; label: string; subject: string };
export const TOPICS: readonly Topic[] = [
  { href: PM_HREF, label: 'Project Management', subject: 'Project management' },
  {
    href: CB_HREF,
    label: 'Computational Biology',
    subject: 'Computational biology',
  },
  { href: VENTURES_HREF, label: 'New Ventures', subject: 'A new venture' },
  { href: ABOUT_HREF, label: 'About', subject: 'About' },
];
export const SERVICES = TOPICS;
const DOORS_TITLE = 'Three things you can hire me for';
export const GET_LABEL = 'You get';
const ABOUT_LABEL = 'About me';
const ABOUT_TAIL = ' — roles, the community work, publications and talks.';
type Door = {
  href: string;
  label: string;
  body: string;
  get: string;
  image?: Entry['image'];
  /** The card plays this clip, muted and looped, in the thumbnail's place. */
  video?: Entry['video'];
  /** PERS-27 (D-60): a drawn figure in the thumbnail's place. */
  figure?: ReactNode;
};
// PERS-24 (D-57): the landing's three doors, one per offer.
const DOORS: readonly Door[] = [
  {
    href: PM_HREF,
    label: 'Project Management',
    body: 'Project manager and product owner for data science and bioinformatics teams: the backlog, the plan, the milestones and the handover.',
    get: 'A prioritized backlog, a roadmap people can read, and status reports that match reality.',
    figure: <DeliveryMix small />,
  },
  {
    href: CB_HREF,
    label: 'Computational Biology',
    body: 'Pipelines from raw sequencing data to results a team can trust, and 3D animation of proteins from the deposited coordinates.',
    get: 'A workflow that runs on someone else’s machine, or a clip with every motion labeled by how it was obtained.',
    video: BIOS_CELL.video,
  },
  {
    href: VENTURES_HREF,
    label: 'New Ventures',
    body: 'Product owner and build partner for a new idea, from the first conversation to the first users.',
    get: 'A brief, a first version, and the decision record to keep it going.',
    image: BIOS_CELL.figures?.[0],
  },
];
const CLOSE_TITLE = 'Have something to build, analyse, run or show?';
const CLOSE_BODY =
  'Pick the service above, or just write. The first call is free.';

// PERS-28 (D-61): on the landing every button is quiet, the same translucent
// fill; Save Contact sits apart below the other three, a blank button's space
// away, in a fill of its own. The offer pages keep D-49's one filled button.
function Actions() {
  return (
    <div className="nalvi-actions nalvi-actions--quiet">
      <a href={CALENDAR_HREF} className="nalvi-secondary">
        {BOOK_LABEL}
      </a>
      <a href={CONTACT} className="nalvi-secondary">
        {CONTACT_LABEL}
      </a>
      <a
        href={CV_HREF}
        className="nalvi-secondary"
        target="_blank"
        rel="noopener noreferrer"
      >
        {CV_LABEL}
      </a>
      <span className="nalvi-secondary nalvi-actions-gap" aria-hidden="true">
        {VCARD_LABEL}
      </span>
      <a href={VCARD_HREF} className="nalvi-secondary nalvi-secondary--save">
        {VCARD_LABEL}
      </a>
    </div>
  );
}

export function NalviPage({ card = false }: { card?: boolean }) {
  return (
    <div className="nalvi-page">
      <Spotlight />
      {card && (
        <aside className="nalvi-cardprompt" aria-label={CARD_PROMPT}>
          <div className="nalvi-cardprompt-text">
            <strong>{NAME}</strong>
            <span>{CARD_LINE}</span>
            <small>{CARD_NOTE}</small>
          </div>
          <a href={VCARD_HREF} className="nalvi-secondary">
            {CARD_PROMPT}
          </a>
          <CardAutoOpen href={VCARD_HREF} />
        </aside>
      )}
      <div className="nalvi-shell">
        <header className="nalvi-hero">
          <div className="nalvi-hero-backdrop">
            <ClipVideo
              src={HERO_CLIP.src}
              poster={HERO_CLIP.poster}
              width={HERO_CLIP.width}
              height={HERO_CLIP.height}
              label=""
              decorative
            />
          </div>
          <div className="nalvi-id">
            <h1 className="nalvi-name">{NAME}</h1>
            <Actions />
          </div>
          <div className="nalvi-photo">
            {/* biome-ignore lint/performance/noImgElement: one 800 px JPEG, already sized */}
            <img src={PHOTO_SRC} alt={PHOTO_ALT} width={800} height={800} />
          </div>
        </header>
        <nav aria-label="Topics" className="nalvi-topnav">
          <ul>
            {TOPICS.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="nalvi-topnav-link">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nalvi-single">
          <section className="nalvi-intro" aria-label="Introduction">
            <h2 className="nalvi-role">{ROLE}</h2>
            <p className="nalvi-tagline">{TAGLINE}</p>
            {SOCIALS.length > 0 && (
              <ul className="nalvi-socials">
                {SOCIALS.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="nalvi-link"
                      target="_blank"
                      rel="me noopener"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <main>
            <section className="nalvi-doors" aria-labelledby="doors-h">
              <h2 id="doors-h" className="nalvi-section-title nalvi-pm-h2">
                {DOORS_TITLE}
              </h2>
              <ul className="nalvi-pm-grid nalvi-pm-grid--3">
                {DOORS.map((d) => (
                  <li key={d.href} className="nalvi-pm-card nalvi-door">
                    {d.figure && (
                      <a
                        href={d.href}
                        className="nalvi-door-thumb nalvi-door-thumb--figure"
                        tabIndex={-1}
                      >
                        {d.figure}
                      </a>
                    )}
                    {d.video && (
                      <a
                        href={d.href}
                        className="nalvi-door-thumb"
                        tabIndex={-1}
                      >
                        <ClipVideo
                          src={d.video.src}
                          poster={d.video.poster}
                          width={d.video.width}
                          height={d.video.height}
                          label=""
                          decorative
                        />
                      </a>
                    )}
                    {d.image && (
                      <a
                        href={d.href}
                        className="nalvi-door-thumb"
                        tabIndex={-1}
                      >
                        {/* biome-ignore lint/performance/noImgElement: static JPEG/SVG, already sized */}
                        <img
                          src={d.image.src}
                          alt={d.image.alt}
                          width={d.image.width ?? 200}
                          height={d.image.height ?? 120}
                          loading="lazy"
                        />
                      </a>
                    )}
                    <h3 className="nalvi-pm-h3">
                      <a href={d.href} className="nalvi-pm-case-link">
                        {d.label}
                      </a>
                    </h3>
                    <p>{d.body}</p>
                    <p className="nalvi-pm-get">
                      <span>{GET_LABEL}</span>
                      {d.get}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="nalvi-pm-note">
                <a href={ABOUT_HREF} className="nalvi-pm-case-link">
                  {ABOUT_LABEL}
                </a>
                {ABOUT_TAIL}
              </p>
            </section>

            <section className="nalvi-pm-close" aria-labelledby="close-h">
              <h2 id="close-h" className="nalvi-pm-h1 nalvi-pm-h1--close">
                {CLOSE_TITLE}
              </h2>
              <p className="nalvi-pm-lead">{CLOSE_BODY}</p>
              <Actions />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
