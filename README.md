# Jeff Jia — Portfolio

Personal portfolio site for Muboyu (Jeff) Jia, built with **React 19 +
TypeScript + Vite + Tailwind CSS v4**. The visual direction is loosely adapted
from the "Scribbled Notebook Portfolio" Stitch design system: cream paper,
ink-blue headlines, margin-red accents, ruled lines, masking tape, and hard
"stacked paper" shadows.

## Running it

```bash
npm install
npm run dev        # dev server with HMR → http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
npm run lint       # oxlint
```

## Where things live

| Path | What it is |
| --- | --- |
| `src/data/cv.ts` | **All site content**, extracted from `JeffJiacv.pdf`. Edit this one file to update text anywhere on the site. |
| `src/components/` | One component per section (Hero, About, Skills, Experience, Projects, Contact) plus shared bits (Reveal, Tape, SectionHeading, Nav, Footer). |
| `src/index.css` | Design tokens (colors, fonts, shadows) and all animation keyframes. |
| `src/assets/placeholders/` | Placeholder project "screenshots" (see below). |
| `.claude/skills/verify/` | Recipe for building + visually smoke-testing the site with Playwright. |

## ⚠️ Placeholders to replace

1. **Project screenshots** — all four images in `src/assets/placeholders/`
   (`revdex.svg`, `testpilot.svg`, `suppsense.svg`, `subnet.svg`) are abstract
   SVG mockups, each marked with a `PLACEHOLDER` comment. Swap them for real
   screenshots and update the imports + alt text in
   `src/components/Projects.tsx` (which also carries a `PLACEHOLDER IMAGES`
   comment) and `src/data/cv.ts`.
2. **Project links** — the CV lists no repo/demo URLs per project, so project
   cards intentionally have none; only a general GitHub profile link is shown.
   Add a `link` field in `src/data/cv.ts` and render it in `Projects.tsx` when
   ready.
3. **Invented wording (facts are real, phrasing is not)** — the hero tagline,
   About paragraphs, the Contact blurb, the yellow "note to self" sticky in the
   hero, and the "margin note, pg. 42" quote card in Contact are original
   copy written for the site. Every factual claim traces to the CV, but review
   the voice and adjust.
4. **No contact form** — the CV includes email/phone/LinkedIn/GitHub, so the
   Contact section uses direct links instead of a form (nothing fake to wire
   up). If you'd rather have a form, it needs a backend or a service like
   Formspree.

## Notes

- Fonts (Bricolage Grotesque, Courier Prime) load from Google Fonts — for a
  fully offline build, self-host them.
- `playwright` is a devDependency used only for visual verification (it drives
  the system Edge browser; no browser download).
- Animations respect `prefers-reduced-motion`.
