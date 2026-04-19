# Dormy Web

> Landing page + docs + billing dashboard for **Dormy AI** (heydormy.ai).

## Status

**v0.1 — in active development (Week 1)**.

## Dev

```bash
pnpm install
pnpm dev
# → http://localhost:3000
```

## Stack

- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS v4** (CSS-first config via `@theme` in `app/globals.css`)
- **shadcn/ui** minimal set (button, card, dialog, input, label, badge, separator, tabs, tooltip, sonner)
- **v5 brand system** (Coral `#E8735A` / Navy `#1B2B4B` / Cream · DM Serif Display + DM Sans)

## Routes

- `/` — landing (To-Agent positioning + MCP install one-liner)
- `/docs` — MCP + CLI docs (Week 2)
- `/pricing` — Free (BYOK) vs Pro (Credits + 5% markup)
- `/dashboard` — API key + credits + usage (Week 4, requires sign-in)

## Brand assets

- Active: `public/wordmark-*.svg`, `public/d-mark-*.svg`, `public/favicon-*.png`
- Full set (includes banners): `brand/v5/`

## License

Apache 2.0.
