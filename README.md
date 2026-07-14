# Jeff Jia — Portfolio

The personal portfolio site for **Muboyu (Jeff) Jia**, a third-year software
engineering student at the University of Waikato in Hamilton, New Zealand. It's
a single-page site styled like a scribbled paper notebook — cream paper,
ink-blue headlines, margin-red accents, ruled lines, masking tape, and hard
"stacked paper" shadows — that walks a visitor through who Jeff is and what he's
built.

## What's on the site

**Hero** — Jeff's name, location, and a typewriter tagline that cycles through
his roles (software engineering student, software intern at MEA Mobile, CS lab
assistant, music tutor), framed as a handwritten "note to self."

**About** — A short bio: studying on the International Entrance and
Vice-Chancellor's International Excellence scholarships, an internship at MEA
Mobile building TestPilot, tutoring first-year students in C#, a networking
summer in Fujian configuring MikroTik routers, tutoring music to students aged
5 to 75, and volunteering with WESMO, Waikato's Formula SAE team.

**Skills** — Grouped as the languages he thinks in (Python, Java, C#,
JavaScript, TypeScript, SQL, Bash), the toolbox (React, Node.js, AWS, MySQL,
Unity, VMware, Linux, MCP, Docker, Firebase), and spoken languages (English,
Mandarin Chinese).

**Experience** — A timeline of five roles: Software Intern at MEA Mobile, CS Lab
Assistant at Waikato, Network Intern at Amoy Oriental Prospect Technology, Music
Tutor at Waikato Community School of Music, and volunteer club member with
WESMO.

**Projects** — Four featured builds:

| Project | What it does |
| --- | --- |
| **RevDex** | A Pokédex-style car-spotting app — photograph a vehicle and Gemini Flash identifies its make, model, and year, saved to a digital garage. |
| **TestPilot** | An end-to-end/UI testing MCP server built at MEA Mobile, using a modular AI-agent approach to cut manual QA effort. |
| **Suppsense** | Scan a supplement barcode for its ingredients and an AI summary grounded in real-time web search, built to debunk supplement misinformation. |
| **Remote Subnet Connection** | Routing, NAT, and WireGuard tunnels on MikroTik routers for inter-subnet and remote communication. |

**Contact** — Direct links to Jeff's email, phone, LinkedIn, and GitHub.

## Under the hood

Built with **React 19 + TypeScript + Vite + Tailwind CSS v4**. Animations respect
`prefers-reduced-motion`.

```bash
npm install
npm run dev        # dev server with HMR → http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
npm run lint       # oxlint
```

All site content lives in a single file, `src/data/cv.ts` — edit it to change any
text on the site. Each section is one component under `src/components/`, and the
design tokens and animation keyframes live in `src/index.css`.

## Placeholders to replace

- **Project screenshots** — the four images in `src/assets/placeholders/` are
  abstract SVG mockups. Swap them for real screenshots and update the imports
  and alt text in `src/components/Projects.tsx` and `src/data/cv.ts`.
- **Project links** — cards render without repo/demo links; add a `link` field
  in `src/data/cv.ts` and render it in `Projects.tsx` when URLs are ready.
- **Invented wording** — the hero tagline, About paragraphs, Contact blurb, and
  the handwritten sticky/quote cards are original copy. Every factual claim
  traces to the CV, but the voice is worth a review.
