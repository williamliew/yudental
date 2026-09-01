# Yu Dental Laboratory

Marketing site for Yu Dental Laboratory, Wellington NZ. Built with Next.js 15 (static export), TypeScript, Tailwind CSS v4, deployed to Cloudflare Pages.

## Stack

- Next.js 15 App Router (`output: 'export'`)
- TypeScript (strict)
- Tailwind CSS v4
- Biome (lint/format)
- Vitest + Playwright

## Commands

```bash
npm run dev        # local development
npm run build      # static export to out/
npm run lint       # Biome check
npm run test       # Vitest component tests
npm run test:e2e   # Playwright (builds out/ first via webServer)
```

## Cloudflare Pages

- Build command: `npm run build`
- Output directory: `out`
- Node.js 20+

Legacy static HTML/CSS is preserved in `legacy/` for reference.

## Forms

### Referral form (`/denture-referrals/`)

Submissions are sent via [Web3Forms](https://web3forms.com) (text fields only). Referral letters and PDFs are requested separately after submit; no file upload on the form.

**Setup:**

1. Create an access key at [web3forms.com](https://web3forms.com) using the clinic inbox that should receive referrals.
2. Enable **hCaptcha** in the Web3Forms dashboard (Settings → Block Spam).
3. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.
4. On Cloudflare Pages, add the same variable under Settings → Environment variables, then redeploy.

The notification inbox is configured in the Web3Forms dashboard only; it is not displayed on the public site while using a personal address. When a domain email (e.g. `referrals@yudental.co.nz`) is ready, set `referralsEmail` and `showReferralsEmailOnSite: true` in `src/lib/site.ts`.

### Booking (`/book/`)

Halaxy online booking iframe (external).

## Theme preview (temporary)

A fixed **Theme preview** dropdown (bottom-right) lets the client compare four colour palettes:

- Clinical Blue (current default)
- Sage & Stone
- Steel Professional
- Warm Ivory

Choice is saved in `localStorage` (`yu-dental-theme-preview`). Palettes are defined in [`src/lib/themes.ts`](src/lib/themes.ts) and [`src/app/globals.css`](src/app/globals.css) via `data-theme` on `<html>`.

**After the client picks a palette**, remove the preview UI and collapse to a single theme:

1. Delete [`src/components/theme/ThemePreviewSwitcher.tsx`](src/components/theme/ThemePreviewSwitcher.tsx) and its import from [`src/app/layout.tsx`](src/app/layout.tsx).
2. Delete [`src/components/theme/ThemeInitScript.tsx`](src/components/theme/ThemeInitScript.tsx) if no longer needed.
3. Keep only the chosen palette values in `:root` in `globals.css`; remove other `[data-theme="…"]` blocks.
4. Remove `src/lib/themes.ts` preview exports if unused, or keep palette constants only.
