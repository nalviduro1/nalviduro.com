# nalviduro.com — rules for this folder

> Read this, then `STATE.md`, then act. This is a small, static consulting site. Keep it that way.

## What this is

The consulting front door. Clients hire Nalvi here (launch / project-management consulting, bioinformatics and pipeline work). Hosting and managing client websites is a *separate* product on pakezdrite.com (tenants of the pakëzdritë platform) — this site only links to it. Decisions PA-32..PA-35 in `~/Desktop/PA/DECISIONS.md`.

## Hard rules

- Static only. No accounts, no payments, no forms that store data, no client data of any kind. Booking = Calendly link. Contact = mailto.
- The copy's source of truth is `content/` (`OFFER.md`, `case-studies/*.md`, `BIO.md`). Edit content there first, then mirror into `site/`. Never let `site/index.html` drift from `content/`.
- Case studies name a client only after that client has said yes in writing (note the date in the case-study file). Until then the study is anonymised ("a Tampa entertainment company").
- No bioinformatics jargon in the launch-consulting track and vice versa. Two tracks, one operator.
- Deploy = push to `main` → Cloudflare Pages. Push only on Nalvi's explicit yes (same rule as pakëzdritë).
- Nothing financial here (rates may be stated as "from $X" only once Nalvi sets them; PA-10 still applies to everything else).

## Layout

| Path | Holds |
|---|---|
| `CLAUDE.md` | this file |
| `STATE.md` | one-screen status, rewritten at the end of every session |
| `content/OFFER.md` | the offer: who, what, method, packages, next step — the master copy |
| `content/BIO.md` | the operator bio, track record with numbers |
| `content/case-studies/<slug>.md` | one per engagement; frontmatter `public: yes/no` and `client_ok: <date>` |
| `site/` | the deployable static site (`index.html`, `style.css`, `assets/`). Cloudflare Pages root = `site/` |
| `scripts/` | helpers (none yet) |

## Session protocol

Start: read `STATE.md`; check `content/` vs `site/` for drift. End: rewrite `STATE.md`; append a line to `~/Desktop/PA/log/<today>.md`; update `~/Desktop/PA/briefs/nalviduro.md` if anything durable changed.

## Stack decisions

- Plain HTML + CSS, one page to start, Google Fonts only. No framework, no build step — the site must stay editable in five minutes a quarter.
- Add pages only when a case study is long enough to need one (`site/work/<slug>.html`).
- Domain: nalviduro.com registered at Cloudflare 2026-10-28, auto-renews 2027-10-28. DNS → Cloudflare Pages project `nalviduro`.
