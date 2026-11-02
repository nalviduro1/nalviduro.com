# nalviduro.com — rules for this folder

> Read this, then `STATE.md`, then act. This is a small consulting site with no database and no accounts. Keep it that way.

## What this is

The consulting front door. Clients hire Nalvi here (launch / project-management consulting, bioinformatics and pipeline work). Hosting and managing client websites is a *separate* product on pakezdrite.com (tenants of the pakëzdritë platform) — this site only links to it. Decisions PA-32..PA-35 in `~/Desktop/PA/DECISIONS.md`.

## Hard rules

- No database, no accounts, no payments, no forms that store data, no client data of any kind. Booking = link to a Google Calendar appointment schedule. Contact = mailto.
- The copy's source of truth is `content/` (`OFFER.md`, `case-studies/*.md`, `BIO.md`). Edit content there first, then mirror into `app/`. Never let the pages in `app/` drift from `content/`.
- Case studies name a client only after that client has said yes in writing (note the date in the case-study file). Until then the study is anonymised ("a Tampa entertainment company").
- No bioinformatics jargon in the launch-consulting track and vice versa. Two tracks, one operator.
- Deploy = push to `main` → Railway. Push only on Nalvi's explicit yes (same rule as pakëzdritë).
- Nothing financial here (rates may be stated as "from $X" only once Nalvi sets them; PA-10 still applies to everything else).

## Layout

| Path | Holds |
|---|---|
| `CLAUDE.md` | this file |
| `STATE.md` | one-screen status, rewritten at the end of every session |
| `content/OFFER.md` | the offer: who, what, method, packages, next step — the master copy |
| `content/BIO.md` | the operator bio, track record with numbers |
| `content/case-studies/<slug>.md` | one per engagement; frontmatter `public: yes/no` and `client_ok: <date>` |
| `app/` | the deployable site: Next.js 16 App Router, pages in `app/`, palette in `app/nalvi.css`, media and the vCard in `public/` |
| `site/` | legacy static scaffold, not deployed; to be deleted once its copy is ported into `app/` |
| `scripts/` | helpers (none yet) |

## Session protocol

Start: read `STATE.md`; check `content/` vs `app/` for drift; run `pnpm check` before any push. End: rewrite `STATE.md`; append a line to `~/Desktop/PA/log/<today>.md`; update `~/Desktop/PA/briefs/nalviduro.md` if anything durable changed.

## Stack decisions

- Next.js 16 (App Router), TypeScript, Tailwind v4, pnpm (see `README.md`). Moved here from `pakezdrite.com/nalvi` (pakezdrite D-65 / PERS-30). No database, no accounts.
- Keep `pakezdrite.com/nalvi/…` redirects in `next.config.ts` working: the printed wallpaper QR codes point at `pakezdrite.com/nalvi/card`.
- Anything only Nalvi can supply is a `{ fill }` value in `app/services/shared.ts`; it shows as a marked placeholder on the page until filled.
- Booking: one constant, `BOOKING_URL` in `app/NalviPage.tsx` (Google Calendar appointment schedule). Contact: `nalviduro1@gmail.com` via mailto.
- Domain: nalviduro.com registered at Cloudflare 2026-10-28, auto-renews 2027-10-28. Hosting: Railway, deploys from `main`.
