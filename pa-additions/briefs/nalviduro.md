# nalviduro.com — brief

**What it is.** The consulting front door (PA-32). Clients hire Nalvi here; website hosting/management for clients is a separate product on pakezdrite.com, where client sites run as tenants (PA-33). Own folder `~/Desktop/nalviduro` (symlinked here), own repo `nalviduro1/nalviduro.com`, own `CLAUDE.md`/`STATE.md` (PA-34). Static HTML + CSS, deploy via Cloudflare Pages, push only on Nalvi's yes.

**Where its docs are.** `nalviduro/STATE.md` (truth), `nalviduro/content/` (offer, bio, case studies — the copy's source), `nalviduro/site/` (deployable).

**Status 2026-11-02.** Scaffolded in a cloud session; dropped onto the laptop via `setup.sh`. Not deployed. TODO fields: Calendly URL, email, LinkedIn/ORCID, Discovery+Plan price, case-study numbers, client naming consent.

**Next actions.**
1. Create GitHub repo, push; Cloudflare Pages project `nalviduro` (root `site/`); DNS for nalviduro.com → Pages. Closes the "decide where nalviduro.com points" task.
2. Fill TODOs in `content/OFFER.md`, `content/BIO.md`; mirror into `site/index.html`.
3. 301 `pakezdrite.com/nalvi` → nalviduro.com once live (D-nn in the pakëzdritë repo).
4. Mollaent discovery call → first hosted tenant; `sites/<slug>/` pattern in pakëzdritë (PA-35).

**Todoist.** Career › `nalviduro.com` section.
