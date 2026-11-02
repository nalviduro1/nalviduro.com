import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { ClipVideo } from '../ClipVideo';
import {
  ABOUT_HREF,
  BOOK_LABEL,
  CALENDAR_HREF,
  CONTACT_LABEL,
  CV_HREF,
  CV_LABEL,
  GET_LABEL,
  mailto,
  NAME,
  SERVICES,
  TOPICS,
} from '../NalviPage';
import { SectionNav } from '../SectionNav';
import { Spotlight } from '../Spotlight';
import {
  BACKGROUND,
  type Case,
  type CiteList,
  type Copy,
  DEFAULT_ENGAGEMENTS,
  FIGURES_LABEL,
  HOME_LABEL,
  isFill,
  GATE_DECIDES,
  METHOD,
  METHOD_PROOF,
  type ServiceSpec,
  SHARED_FAQ,
  TESTIMONIALS,
  WHERE,
} from './shared';

/**
 * PERS-15 (D-48): the markup every /nalvi/<service> page shares. English only and
 * outside the /sq /en routing, like /nalvi (PERS-01), so its strings live here
 * and in shared.ts.
 *
 * Order: the offer, the fields, who it is for, services, how the work runs, ways
 * to engage, selected work, tools and background, FAQ, the ask again. A section
 * with nothing in it is not rendered. Testimonials render only once real, named
 * quotes exist.
 */

export function serviceMetadata(spec: ServiceSpec): Metadata {
  return {
    title: spec.title,
    description: spec.description,
    alternates: { canonical: spec.path },
    openGraph: {
      type: 'profile',
      url: spec.path,
      title: spec.title,
      description: spec.description,
      siteName: NAME,
    },
  };
}

const FILL_LABEL = 'To fill:';

function ToFill({ children }: { children: ReactNode }) {
  return (
    <span className="nalvi-tofill">
      <strong>{FILL_LABEL}</strong> {children}
    </span>
  );
}

function Text({ value }: { value: Copy }) {
  return isFill(value) ? <ToFill>{value.fill}</ToFill> : value;
}

const FIELDS_TITLE = 'What I work on';
const WHO_TITLE = 'Who I help';
const SERVICES_TITLE = 'Services';
const METHOD_TITLE = 'How I work';
const ENGAGE_TITLE = 'Ways to work together';
const WORK_TITLE = 'Selected work';
const CASE_LABELS = {
  problem: 'The problem',
  role: 'My role',
  shipped: 'What shipped',
  changed: 'What changed',
} as const;
const TOOLS_TITLE = 'Tools and background';
const BACKGROUND_LABEL = 'Background';
const TESTIMONIALS_TITLE = 'What people say';
const FAQ_TITLE = 'Questions';
const ROLES_TITLE = 'Roles';
// The About page's sections in order; Writing and the links end Community and Publications.
const ABOUT_SPY_IDS = ['roles', 'work', 'links', 'publications', 'writing'];
const NOW_TITLE = 'What I’m doing now';
const POINTER_LABEL = 'Read the case →';
const COMMUNITY_LABEL = 'Community';
const PUBLICATIONS_LABEL = 'Publications';
const LINKS_TITLE = 'Find them online';

function Actions({ subject }: { subject: string }) {
  return (
    <div className="nalvi-actions">
      <a href={CALENDAR_HREF} className="nalvi-contact">
        {BOOK_LABEL}
      </a>
      <a href={mailto(subject)} className="nalvi-secondary">
        {CONTACT_LABEL}
      </a>
      <a
        href={CV_HREF}
        className="nalvi-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {CV_LABEL}
      </a>
    </div>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="nalvi-pm-section">
      <h2 id={`${id}-h`} className="nalvi-section-title nalvi-pm-h2">
        {title}
      </h2>
      {children}
    </section>
  );
}

function isExternal(href: string): boolean {
  return href.startsWith('http');
}

function CiteItems({ items }: { items: CiteList['items'] }) {
  return (
    <ul className="nalvi-pm-cites">
      {items.map((it) => (
        <li key={it.text}>
          {it.text}
          {it.doi && (
            <>
              {' '}
              <a
                href={`https://doi.org/${it.doi}`}
                className="nalvi-pm-case-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {`doi:${it.doi}`}
              </a>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

function Thumb({
  c,
  link,
}: {
  c: Case;
  link: { href: string; target?: string; rel?: string };
}) {
  if (!c.entry.image) return null;
  return (
    <a {...link} className="nalvi-pm-case-thumb" tabIndex={-1}>
      {/* biome-ignore lint/performance/noImgElement: static JPEG/SVG, already sized */}
      <img
        src={c.entry.image.src}
        alt={c.entry.image.alt}
        width={c.entry.image.width ?? 200}
        height={c.entry.image.height ?? 120}
        loading="lazy"
      />
    </a>
  );
}

// PERS-23 (D-56): a case is told in full on its home page; elsewhere it is a pointer.
function CaseStudy({ c, path }: { c: Case; path: string }) {
  if (path !== c.home) {
    const work = `${c.home}#work`;
    return (
      <article className="nalvi-pm-case nalvi-pm-case--pointer">
        <Thumb c={c} link={{ href: work }} />
        <div>
          <h3 className="nalvi-pm-h3">
            <a href={work} className="nalvi-pm-case-link">
              {c.title}
            </a>
          </h3>
          <p>
            <Text value={c.role} />
          </p>
          <p className="nalvi-pm-note">
            <a href={work} className="nalvi-pm-case-link">
              {POINTER_LABEL}
            </a>
          </p>
        </div>
      </article>
    );
  }
  const external = isExternal(c.entry.href);
  const link = {
    href: c.entry.href,
    target: external ? '_blank' : undefined,
    rel: external ? 'noopener noreferrer' : undefined,
  };
  const { video, figures } = c.entry;
  return (
    <article className="nalvi-pm-case">
      <Thumb c={c} link={link} />
      <div>
        <h3 className="nalvi-pm-h3">
          <a {...link} className="nalvi-pm-case-link">
            {c.title}
          </a>
        </h3>
        <dl className="nalvi-pm-facts">
          <dt>{CASE_LABELS.problem}</dt>
          <dd>{c.problem}</dd>
          <dt>{CASE_LABELS.role}</dt>
          <dd>
            <Text value={c.role} />
          </dd>
          <dt>{CASE_LABELS.shipped}</dt>
          <dd>{c.shipped}</dd>
          <dt>{CASE_LABELS.changed}</dt>
          <dd>
            <Text value={c.changed} />
          </dd>
        </dl>
        {c.tags && c.tags.length > 0 && (
          <ul className="nalvi-tags" aria-label="Tags">
            {c.tags.map((t) => (
              <li key={t} className="nalvi-tag">
                {t}
              </li>
            ))}
          </ul>
        )}
        {video && (
          <figure className="nalvi-clip">
            <ClipVideo
              src={video.src}
              poster={video.poster}
              width={video.width}
              height={video.height}
              label={video.caption}
            />
            <figcaption className="nalvi-figure-caption">
              {video.caption}
            </figcaption>
          </figure>
        )}
        {figures && figures.length > 0 && (
          <div className="nalvi-figures">
            <p className="nalvi-figures-label">{FIGURES_LABEL}</p>
            <ul className="nalvi-figure-list">
              {figures.map((f) => (
                <li key={f.src}>
                  <a
                    href={f.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nalvi-figure"
                  >
                    {/* biome-ignore lint/performance/noImgElement: static SVG, nothing to optimise */}
                    <img
                      src={f.src}
                      alt={f.alt}
                      width={f.width ?? 300}
                      height={f.height ?? 180}
                      loading="lazy"
                    />
                    <span className="nalvi-figure-caption">{f.caption}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}

// PERS-25 (D-58): the links beside the eyebrow, one per section the page shows.
function sectionLinks(spec: ServiceSpec): { id: string; label: string }[] {
  const links: { id: string; label: string }[] = [];
  if (spec.path === ABOUT_HREF) {
    if (spec.roles?.length) links.push({ id: 'roles', label: ROLES_TITLE });
    if (spec.cases.length) links.push({ id: 'work', label: COMMUNITY_LABEL });
    if (spec.lists?.length && spec.listsTitle)
      links.push({ id: 'publications', label: PUBLICATIONS_LABEL });
    return links;
  }
  if (spec.fields?.length) links.push({ id: 'fields', label: FIELDS_TITLE });
  if (spec.who.length) links.push({ id: 'who', label: WHO_TITLE });
  if (spec.services.length)
    links.push({ id: 'services', label: SERVICES_TITLE });
  if (!spec.lean) {
    links.push({ id: 'method', label: METHOD_TITLE });
    links.push({ id: 'engage', label: ENGAGE_TITLE });
  }
  if (spec.cases.length) links.push({ id: 'work', label: WORK_TITLE });
  if (!spec.lean) links.push({ id: 'faq', label: FAQ_TITLE });
  return links;
}

export function ServicePage({ spec }: { spec: ServiceSpec }) {
  const engagements = spec.engagements ?? DEFAULT_ENGAGEMENTS;
  const faq = [...SHARED_FAQ, ...spec.faq];
  const fields = spec.fields ?? [];
  const subject =
    spec.subject ??
    SERVICES.find((s) => s.href === spec.path)?.subject ??
    'Work with me';
  return (
    <div className="nalvi-page">
      <Spotlight />
      <div className="nalvi-pm">
        <header className="nalvi-pm-bar">
          <a href="/" className="nalvi-pm-home">
            <span className="nalvi-pm-home-name">{NAME}</span>
            <span className="nalvi-pm-home-back">{HOME_LABEL}</span>
          </a>
          <nav aria-label="Topics" className="nalvi-topnav">
            <ul>
              {TOPICS.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="nalvi-topnav-link"
                    aria-current={href === spec.path ? 'page' : undefined}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main>
          {spec.topFigure && (
            <figure
              className={`nalvi-pm-figure nalvi-pm-figure--top${spec.topFigure.clip ? ' nalvi-pm-figure--clip' : ''}`}
            >
              <div className="nalvi-pm-figure-scroll">
                {spec.topFigure.figure}
              </div>
              <figcaption>{spec.topFigure.caption}</figcaption>
            </figure>
          )}
          <section
            className={`nalvi-pm-hero${spec.backdrop ? ' nalvi-pm-hero--backdrop' : ''}`}
            aria-labelledby="service-h"
          >
            {spec.backdrop && (
              <div className="nalvi-hero-backdrop nalvi-pm-backdrop">
                <ClipVideo
                  src={spec.backdrop.src}
                  poster={spec.backdrop.poster}
                  width={spec.backdrop.width}
                  height={spec.backdrop.height}
                  label=""
                  decorative
                />
              </div>
            )}
            <div className="nalvi-pm-eyebrowrow">
              <p className="nalvi-pm-eyebrow">{spec.eyebrow}</p>
              <SectionNav
                items={sectionLinks(spec)}
                ids={spec.path === ABOUT_HREF ? ABOUT_SPY_IDS : undefined}
              />
            </div>
            <h1 id="service-h" className="nalvi-pm-h1">
              {spec.headline}
            </h1>
            <p className="nalvi-pm-lead">{spec.lead}</p>
            <Actions subject={subject} />
            {!spec.lean && <p className="nalvi-pm-where">{WHERE}</p>}
          </section>

          {spec.now && (
            <Section id="now" title={NOW_TITLE}>
              <p className="nalvi-now-date">{spec.now.updated}</p>
              <ul className="nalvi-now">
                {spec.now.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </Section>
          )}

          {spec.roles && spec.roles.length > 0 && (
            <Section id="roles" title={ROLES_TITLE}>
              <ul className="nalvi-pm-roles">
                {spec.roles.map((r) => (
                  <li key={r.role + r.org}>
                    <h3 className="nalvi-pm-h3">{`${r.role}, ${r.org}`}</h3>
                    {r.scope && <p>{r.scope}</p>}
                    {r.points && (
                      <ul className="nalvi-pm-who">
                        {r.points.map((pt) => (
                          <li key={pt}>{pt}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {fields.length > 0 && (
            <Section id="fields" title={FIELDS_TITLE}>
              <ul className="nalvi-pm-grid nalvi-pm-grid--4">
                {fields.map((d) => (
                  <li key={d.title} className="nalvi-pm-card">
                    <h3 className="nalvi-pm-h3">{d.title}</h3>
                    <p>{d.body}</p>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {spec.who.length > 0 && (
            <Section id="who" title={WHO_TITLE}>
              <ul className="nalvi-pm-who">
                {spec.who.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            </Section>
          )}

          {spec.services.length > 0 && (
            <Section id="services" title={SERVICES_TITLE}>
              <ul className="nalvi-pm-grid">
                {spec.services.map((s) => (
                  <li key={s.title} className="nalvi-pm-card">
                    <h3 className="nalvi-pm-h3">{s.title}</h3>
                    <p>{s.body}</p>
                    <p className="nalvi-pm-get">
                      <span>{GET_LABEL}</span>
                      <Text value={s.get} />
                    </p>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {!spec.lean && (
            <>
              <Section id="method" title={METHOD_TITLE}>
                <ol className="nalvi-pm-steps">
                  {METHOD.map((m) => (
                    <li key={m.title}>
                      <h3 className="nalvi-pm-h3">{m.title}</h3>
                      <p>{m.question}</p>
                      <p>
                        <strong>You get:</strong> {m.get}
                      </p>
                      {m.gate && (
                        <p className="nalvi-pm-gate">
                          <strong>{m.gate}.</strong> {GATE_DECIDES[m.gate]}
                        </p>
                      )}
                    </li>
                  ))}
                </ol>
                <p className="nalvi-pm-note">{METHOD_PROOF}</p>
              </Section>

              <Section id="engage" title={ENGAGE_TITLE}>
                <ul className="nalvi-pm-grid nalvi-pm-grid--3">
                  {engagements.map((e) => (
                    <li key={e.title} className="nalvi-pm-card">
                      <h3 className="nalvi-pm-h3">{e.title}</h3>
                      <p className="nalvi-pm-length">{e.length}</p>
                      <p>{e.body}</p>
                      <p className="nalvi-pm-price">
                        <Text value={e.price} />
                      </p>
                    </li>
                  ))}
                </ul>
              </Section>
            </>
          )}

          {spec.cases.length > 0 && (
            <Section id="work" title={spec.casesTitle ?? WORK_TITLE}>
              <div className="nalvi-pm-cases">
                {spec.cases.map((c) => (
                  <CaseStudy key={c.title} c={c} path={spec.path} />
                ))}
              </div>
            </Section>
          )}

          {spec.links && spec.links.length > 0 && (
            <Section id="links" title={LINKS_TITLE}>
              <ul className="nalvi-pm-who">
                {spec.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="nalvi-pm-case-link"
                      target={isExternal(l.href) ? '_blank' : undefined}
                      rel={
                        isExternal(l.href) ? 'noopener noreferrer' : undefined
                      }
                    >
                      {l.name}
                    </a>
                    {` — ${l.text}`}
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {spec.lists && spec.lists.length > 0 && spec.listsTitle && (
            <Section id="publications" title={spec.listsTitle}>
              {spec.lists.map((list) => (
                <div key={list.title}>
                  <h3 className="nalvi-pm-h3">{list.title}</h3>
                  <CiteItems items={list.items} />
                </div>
              ))}
            </Section>
          )}

          {!spec.listsTitle &&
            spec.lists?.map((list) => (
              <Section
                key={list.title}
                id={`list-${list.title.toLowerCase().replace(/\W+/g, '-')}`}
                title={list.title}
              >
                <CiteItems items={list.items} />
              </Section>
            ))}

          {spec.pending && (
            <Section
              id={spec.pending.id ?? 'pending'}
              title={spec.pending.title}
            >
              <ToFill>{spec.pending.fill}</ToFill>
            </Section>
          )}

          {!spec.lean && (
            <Section id="tools" title={TOOLS_TITLE}>
              <div className="nalvi-pm-tools">
                {spec.tools.map((t) => (
                  <div key={t.label}>
                    <h3 className="nalvi-pm-label">{t.label}</h3>
                    <ul className="nalvi-tags">
                      {t.tags.map((tag) => (
                        <li key={tag} className="nalvi-tag">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div>
                  <h3 className="nalvi-pm-label">{BACKGROUND_LABEL}</h3>
                  <p>
                    <Text value={spec.background ?? BACKGROUND} />
                  </p>
                </div>
              </div>
            </Section>
          )}

          {TESTIMONIALS.length > 0 && (
            <Section id="testimonials" title={TESTIMONIALS_TITLE}>
              <ul className="nalvi-pm-grid">
                {TESTIMONIALS.map((t) => (
                  <li key={t.name} className="nalvi-pm-card">
                    <blockquote>
                      <p>{t.quote}</p>
                    </blockquote>
                    <p className="nalvi-pm-length">{`${t.name}, ${t.role}`}</p>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {!spec.lean && (
            <Section id="faq" title={FAQ_TITLE}>
              <div className="nalvi-pm-faq">
                {faq.map((f) => (
                  <details key={f.q}>
                    <summary>{f.q}</summary>
                    <p>
                      <Text value={f.a} />
                    </p>
                  </details>
                ))}
              </div>
            </Section>
          )}

          <section className="nalvi-pm-close" aria-labelledby="close-h">
            <h2 id="close-h" className="nalvi-pm-h1 nalvi-pm-h1--close">
              {spec.close.title}
            </h2>
            <p className="nalvi-pm-lead">{spec.close.body}</p>
            <Actions subject={subject} />
          </section>
        </main>
      </div>
    </div>
  );
}
