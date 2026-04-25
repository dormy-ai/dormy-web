# Dormy Brand Assets

## Current Version: v6

| Folder | Contents | Status |
|---|---|---|
| `v6/` | **Current brand** — new "D." mark + hybrid favicon system + wordmark (unchanged from v5) | ✅ Active |
| `v5/` | Previous brand — solid sans D mark | 🗄️ Superseded |
| `banner/` | **Current banners** — form banners (light/dark), social headers (X, LinkedIn, Reddit) | ✅ Active |
| `logo 2.1/` | Source for the new D mark used in v6 (`D.svg`) + comparison work | 📌 Source |
| `miromind-reference/` | Design reference (logo sizing inspiration) | 📌 Reference |
| `archive/` | All previous versions — v0 through v4.1, fnl, and generator scripts | 🗄️ Archive |

---

## v6 — what changed vs v5

- **D mark:** new "D." letterform with period dot, two-tone Coral embossing. Replaces v5's solid sans D.
- **Favicon system:** hybrid — 16/32 px use simpler "D only" mark (no period) for browser-tab legibility; 180/192/512 px use the full "D." mark.
- **Convention shift on colorways:** v5 colorways were sticker-style (each variant is a colored tile with the mark inside). v6 colorways are transparent-bg with the mark in the named color — more flexible, drop into any background.
- **Wordmark:** unchanged. Still v5 Outfit-Bold "Dormy" lockup, copied verbatim into `v6/`.

---

## v6 Asset Map

### D Mark (icon only) — full "D." with period dot
| File | Mark color | Use |
|---|---|---|
| `v6/d-mark-transparent.svg/.png` | Coral two-tone (#E8735A + #C85A42 shadow) | Primary, on cream/white |
| `v6/d-mark-cream.svg/.png` | Cream `#FDFCFA` mono | On navy/dark backgrounds |
| `v6/d-mark-dark.svg/.png` | Navy `#1B2B4B` mono | On light/cream/coral backgrounds |
| `v6/d-mark-white.svg/.png` | White `#FFFFFF` mono | On dark/coral backgrounds |

All d-mark SVGs use square viewBox `0 -23.625 233.75 233.75` (mark fills full width, ~80% height). PNGs rendered at 765×765.

### Wordmark — copied verbatim from v5
| File | Use |
|---|---|
| `v6/wordmark-transparent.svg/.png` | General use — navbar, console header |
| `v6/wordmark-cream.svg/.png` | On dark/navy backgrounds (sticker-style with cream tile) |
| `v6/wordmark-dark.svg/.png` | On light/cream backgrounds (sticker-style with dark tile) |
| `v6/wordmark-white.svg/.png` | On dark backgrounds (sticker-style with white tile) |

### Favicons — hybrid system
| File | Source | Notes |
|---|---|---|
| `v6/favicon-16.png` | `_favicon-small.svg` (D only, mono Coral) | Browser tab — period dropped for max legibility |
| `v6/favicon-32.png` | `_favicon-small.svg` (D only, mono Coral) | Pinned tab / retina 16 |
| `v6/favicon-180.png` | `d-mark-transparent.svg` (D. with dot, Coral two-tone) | Apple touch icon |
| `v6/favicon-192.png` | `d-mark-transparent.svg` (D. with dot, Coral two-tone) | PWA Android |
| `v6/favicon-512.png` | `d-mark-transparent.svg` (D. with dot, Coral two-tone) | PWA splash + OG/Twitter card |

`_favicon-small.svg` is the build-source for 16/32 (D-only, no period). Keep alongside the rendered PNGs in case you regenerate.

### Preview
Open `v6/preview.html` in a browser for the full asset showcase.

---

## Brand Colors (unchanged)

| Name | Hex | Usage |
|---|---|---|
| Coral | `#E8735A` | Primary accent, CTAs, highlights, mark |
| Coral-dark | `#C85A42` | Two-tone shadow on the new D mark |
| Navy | `#1B2B4B` | Dark UI, backgrounds, headings, mono mark |
| Cream | `#FDFCFA` | Page background, mono mark on dark bgs |
| White | `#FFFFFF` | Cards, light surfaces, mono mark on dark bgs |

---

## In-Code Usage

- **Navbar / Console header:** `v6/wordmark-transparent.svg` at `h-12` (48px)
- **Footer:** `v6/wordmark-transparent.svg` at `h-7` (28px)
- **Favicons:** wired in `dormy-web/app/layout.tsx`, served from `dormy-web/public/`. To activate v6 favicons in production, copy `v6/favicon-*.png` → `dormy-web/public/`.
- **D mark in product UI:** use `v6/d-mark-transparent.svg` (Coral two-tone). For navy/dark contexts, use `v6/d-mark-cream.svg`.

---

## Archive Contents

Previous versions preserved for reference in `archive/`:

| Folder | Notes |
|---|---|
| `archive/v0/` | Original icon mark + lockup designs |
| `archive/v1/` | First full logo system |
| `archive/v2/` | Do-mark experiments |
| `archive/v2.bkp/` | v2 backup |
| `archive/v3/` | Wordmark system with lockups |
| `archive/v4/` | Pre-v4.1 wordmark |
| `archive/v4.1/` | Last version before v5 color update |
| `archive/fnl/` | Old "final" lockup (superseded by v5) |
| `archive/generators/` | Python scripts used to generate old versions |
