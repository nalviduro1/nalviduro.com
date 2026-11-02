# nalviduro.com

Nalvi Duro's personal site. Next.js 16 (App Router), TypeScript, Tailwind v4, pnpm. No database, no accounts.

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm check      # typecheck + lint + build
```

Moved here from `pakezdrite.com/nalvi` (pakezdrite `D-65` / `PERS-30`). Pages live in `app/`; the page's palette is in `app/nalvi.css`; media, figures, the CV, the vCard and the QR wallpapers are in `public/`. The old `/nalvi/…` addresses redirect (`next.config.ts`); `pakezdrite.com/nalvi/…` redirects here, and must keep doing so because the wallpaper QR codes print `pakezdrite.com/nalvi/card`.

Deploys from `main` on Railway. The render frames of the BIOS walker animation are not in this repo.
