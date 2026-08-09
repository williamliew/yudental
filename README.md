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

Contact, book and referral forms are visual-only demos (no backend). Wire Formspree or a Cloudflare Worker when ready.
