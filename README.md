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

## Colour palette

The site uses the **Steel Professional** palette (cool navy header, steel-teal accents on light surfaces, light cyan accents on dark bands). Tokens live in [`src/app/globals.css`](src/app/globals.css) (`:root` CSS variables). Contrast pairs are checked in [`src/lib/themes.test.ts`](src/lib/themes.test.ts).
