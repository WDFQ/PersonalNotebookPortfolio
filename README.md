# Jeff Jia — Portfolio

My personal portfolio site, built with React 19 + TypeScript + Vite + Tailwind CSS v4.

## Tech Stack

- **React 19** — UI library
- **TypeScript** — type safety across components and logic
- **Vite** — dev server and build tooling
- **Tailwind CSS v4** — styling
- **oxlint** — linting

Animations throughout the site are designed to respect `prefers-reduced-motion`.

## Built with Claude Code

This project was built using [Claude Code](https://docs.claude.com/en/docs/claude-code/overview) as my implementation partner. I drove the architecture, design decisions, content, and direction of the project. Claude Code handled the main heavy lifting of turning my visions into working code. Things like scaffolding components, wiring up Tailwind styling, implementing animations, debugging, and iterating on details as I evolved the design.

In practice this meant:

- I defined what each section/component should do and how it should feel.
- Claude Code wrote and refactored the React/TypeScript implementation.
- I reviewed, tested, and steered further iterations.

## Getting Started

```bash
npm install
npm run dev        # dev server with HMR → http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
npm run lint        # oxlint
```
