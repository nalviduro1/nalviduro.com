# STATE — nalviduro.com — as of 2026-11-02 (end of session)

**Status:** live Next.js site on Railway (repo `nalviduro1/nalviduro.com`, deploys from `main`). The old static scaffold is merged in; `site/` is legacy and still in the repo, not deployed. Pushed through `d773128`; commits `0f952f8`, `29b3723` and this STATE commit are local only.

## Plan (`POSITIONING_PLAN.MD`)
- Done: 1 (home h1: "I help owner-operators turn their vision into reality."), 3 (method ladder follows PLAYBOOK), 4 (`/work/ticketing`), 5 (events in BIO + About).
- Partial: 6 (BIO track record from files; construction PM numbers missing), 7 (draft at `/notes/rent-or-own-ticketing`, noindex, unlinked), 8 (booking, email, prices done; 10 "To fill" boxes remain), 10 (GitHub and pakezdrite.com linked).
- Open, needs a decision: 9 (two-track word rule does not map onto this site; see plan note), 2 (pakëzdritë numbers).

## Now (owner: Nalvi)
- Push the three local commits when you say yes.
- Send: pakëzdritë numbers (item 2); construction PM years, largest project, team size (item 6); LinkedIn and ORCID (item 10); reference client and date (item 10).
- Edit the rent-or-own note, then say "publish" so I link it and drop noindex.
- Answer the 10 "To fill" boxes or tell me to hide those sections (`grep -rn "{ fill:" app`).
- Confirm the About sentence "I organised its women's networking event" and the Oct 17 attendance (BIO TODO).
- Decide item 9.

## Open questions
- `pakezdrite.com/nalvi` → nalviduro.com redirect is in place per the repo README; the plan's "D-nn in pakëzdritë" may already be done.
- Lint (`pnpm check`) fails on `biome check`: formatting in our `.md` files, `biome.json` version, three CSS specificity warnings. Typecheck and build pass. Check whether Railway runs lint.
- Is the Oct 4 Student Summit ever to be claimed? Briefs say Nalvi attended only.

## Done
- 2026-11-02 — scaffold; merged with the Next.js site; booking link (Google Calendar appointment schedule), email, prices; CLAUDE.md rewritten for Next.js/Railway; plan items 1, 3, 4, 5.
