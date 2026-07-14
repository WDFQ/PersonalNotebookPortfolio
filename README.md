# Jeff Jia — Portfolio

## What's on the site

*   **Hero** — My name, location, and a typewriter tagline cycling through my roles (software engineering student, software intern at MEA Mobile, CS lab assistant, music tutor), framed as a handwritten "note to self".
*   **About** — My journey and background: studying on the International Entrance and Vice-Chancellor's International Excellence scholarships, my internship at MEA Mobile building TestPilot, tutoring first-year students in C#, configuring MikroTik routers during a networking summer in Fujian, tutoring music to students aged 5 to 75, and volunteering with WESMO, Waikato's Formula SAE team.
*   **Skills** — Grouped by the languages I think in (Python, Java, C#, JavaScript, TypeScript, SQL, Bash), my development toolbox (React, Node.js, AWS, MySQL, Unity, VMware, Linux, MCP, Docker, Firebase), and my spoken languages (English, Mandarin Chinese).
*   **Experience** — A timeline of my five roles: Software Intern at MEA Mobile, CS Lab Assistant at Waikato, Network Intern at Amoy Oriental Prospect Technology, Music Tutor at Waikato Community School of Music, and volunteer club member with WESMO.
*   **Projects** — A breakdown of four builds I engineered:

| Project | What it does |
| --- | --- |
| **RevDex** | A Pokédex-style car-spotting app I built—photograph a vehicle and Gemini Flash identifies its make, model, and year, saving it to a digital garage[cite: 1]. |
| **TestPilot** | An end-to-end/UI testing MCP server I built at MEA Mobile, using a modular AI-agent approach to cut manual QA effort[cite: 1]. |
| **Suppsense** | A tool to scan a supplement barcode for its ingredients and get an AI summary grounded in real-time web search, which I built to debunk supplement misinformation[cite: 1]. |
| **Remote Subnet Connection** | My routing, NAT, and WireGuard tunnels project on MikroTik routers for inter-subnet and remote communication[cite: 1]. |

*   **Contact** — Direct links to my email, phone, LinkedIn, and GitHub[cite: 1].

## Under the hood

I engineered the application using **React 19 + TypeScript + Vite + Tailwind CSS v4**[cite: 1]. Animations are designed to respect `prefers-reduced-motion`[cite: 1].

```bash
npm install
npm run dev        # dev server with HMR → http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
npm run lint       # oxlint
