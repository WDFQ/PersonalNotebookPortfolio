---
name: verify
description: Build, launch, and visually drive the portfolio site to verify changes.
---

# Verifying the portfolio site

Single-page React app (Vite + TS + Tailwind v4). Surface = pixels in a browser.

## Build & launch

```bash
npm run build            # tsc -b && vite build — catches TS + Tailwind errors
npm run dev -- --port 5199 --strictPort   # dev server (run in background)
```

## Drive it

Playwright is a devDependency and uses the system Edge browser — no browser
download needed:

```js
const browser = await chromium.launch({ channel: 'msedge', headless: true })
```

Gotchas learned the hard way:

- **Run driver scripts from the repo root** (ESM resolves `playwright` from the
  script's location, not cwd). Copy the script into the repo, run, delete.
- **The page uses CSS `scroll-behavior: smooth`.** Rapid programmatic
  `window.scrollTo` calls cancel each other and sections never enter the
  viewport, so IntersectionObserver reveals don't fire and full-page
  screenshots show blank sections. Set
  `document.documentElement.style.scrollBehavior = 'auto'` before stepped
  scrolling.
- Reveal animations key off an `in-view` class (see `src/index.css`); after a
  full stepped scroll, assert no `.reveal`/`.reveal-pop` element still has
  computed `opacity !== '1'`.

## Flows worth driving

- Desktop 1440px, tablet 834px, mobile 390px screenshots.
- First Tab press must focus the "Skip to content" link.
- Mobile: `button[aria-controls="mobile-menu"]` toggles menu; Escape closes it.
- `reducedMotion: 'reduce'` context: h1 must have computed opacity 1.
- Anchor-nav clicks (`a[href="#projects"]` etc.) land with sticky-nav offset.
