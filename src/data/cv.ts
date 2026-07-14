/*
  All site content lives here, extracted from JeffJiacv.pdf (repo root).
  Nothing below should state a fact that is not on the CV — if you update
  the CV, update this file to match.
*/

export const profile = {
  fullName: 'Muboyu (Jeff) Jia',
  shortName: 'Jeff Jia',
  firstName: 'Jeff',
  // Cycled by the hero typewriter — all roles are taken verbatim from the CV.
  roles: [
    'Software Engineering Student',
    'Software Intern @ MEA Mobile',
    'CS Lab Assistant',
    'Music Tutor',
  ],
  location: 'Hamilton, New Zealand',
  phone: '027 246 1142',
  email: 'Jjia060102@gmail.com',
  linkedin: 'https://linkedin.com/in/jeff-jia-155210356/',
  github: 'https://github.com/WDFQ',
  githubHandle: 'WDFQ',
  // Short intro shown in the hero. Wording is original; facts are from the CV.
  tagline:
    'Third-year software engineering student at the University of Waikato, building AI-powered apps and developer tooling.',
} as const

/*
  Bio wording is written for the site, but every claim traces back to the CV
  (study year, internship, lab assistant role, networking internship,
  music tutoring, WESMO, languages).
*/
export const about = {
  paragraphs: [
    'I’m a third-year software engineering student at the University of Waikato in Hamilton, New Zealand, studying on the International Entrance Scholarship and a Vice-Chancellor’s International Excellence Scholarship.',
    'Most recently I interned at MEA Mobile, where I built TestPilot — an MCP server for automated end-to-end and UI testing, designed around a modular AI-agent approach to cut down manual QA effort. On campus I work as a Computer Science lab assistant, tutoring first-year students in C# from their first variable declaration through to OOP.',
    'Before that I spent a summer as a network intern in Fujian, China, configuring MikroTik routers — firewalls, routing, PPPoE, and WireGuard VPN tunnels. Outside of tech I tutor music to students aged 5 to 75, and I volunteer with WESMO, Waikato’s Formula SAE team, helping with chassis work and the team website. I speak English and Mandarin Chinese.',
  ],
} as const

export const education = {
  institution: 'The University of Waikato',
  location: 'Hamilton, New Zealand',
  degree: 'Software Engineering — Third Year',
  period: '2024 – Present',
  coursework: [
    'Data Structures & Algorithms',
    'Software Design',
    'Web Development',
    'Artificial Intelligence',
    'Databases',
    'Networks & System Architecture',
    'Engineering & Business',
  ],
  scholarships: [
    'International Entrance Scholarship (2024–2026)',
    'Vice-Chancellor’s International Excellence Scholarship (2024)',
  ],
} as const

export interface SkillGroup {
  label: string
  note: string
  skills: readonly string[]
}

export const skillGroups: readonly SkillGroup[] = [
  {
    label: 'Languages',
    note: 'the ones I think in',
    skills: ['Python', 'Java', 'C#', 'JavaScript', 'TypeScript', 'SQL', 'Bash'],
  },
  {
    label: 'Technologies',
    note: 'the toolbox',
    skills: [
      'React',
      'Node.js',
      'AWS (EC2, S3)',
      'MySQL',
      'Unity',
      'VMware',
      'Linux',
      'MCP',
      'Docker',
      'Firebase',
    ],
  },
  {
    label: 'Spoken',
    note: 'human languages',
    skills: ['English', 'Mandarin Chinese'],
  },
] as const

export interface ExperienceEntry {
  company: string
  role: string
  period: string
  location: string
  summary: string
  tag?: string
}

export const experience: readonly ExperienceEntry[] = [
  {
    company: 'MEA Mobile',
    role: 'Software Intern',
    period: 'Nov 2025 – Feb 2026',
    location: 'Hamilton, New Zealand',
    summary:
      'Collaborated with the QA team to deliver TestPilot, an AI testing agent that reduces QA workload. Gained a broad understanding of MEA Mobile’s business operations and product ecosystem.',
  },
  {
    company: 'University of Waikato',
    role: 'Computer Science Lab Assistant',
    period: 'Feb 2025 – Present',
    location: 'Hamilton, New Zealand',
    summary:
      'Tutor first-year students in C# and Visual Studio, covering topics from basic variable declarations to complex OOP concepts.',
  },
  {
    company: 'Amoy Oriental Prospect Technology',
    role: 'Network Intern',
    period: 'Dec 2024 – Feb 2025',
    location: 'Fujian, China',
    summary:
      'Worked on networking and routing of the company’s internal subnet using MikroTik RouterOS — configuring firewalls, routing, PPPoE dial-up connections, and WireGuard VPN tunnels.',
  },
  {
    company: 'Waikato Community School of Music',
    role: 'Music Tutor',
    period: 'Jun 2023 – Present',
    location: 'Hamilton, New Zealand',
    summary:
      'Deliver interactive music lessons to students ranging from age 5 to 75, working with diverse backgrounds.',
  },
  {
    company: 'WESMO (Formula SAE Team)',
    role: 'Junior Club Member',
    period: 'Feb 2024 – Present',
    location: 'Hamilton, New Zealand',
    summary:
      'Assist with chassis tasks and collaborate with the software group on the team’s website.',
    tag: 'Volunteering',
  },
] as const

export interface Project {
  name: string
  year: string
  description: string
  tech: readonly string[]
  /* Key into the placeholder screenshot map in Projects.tsx. */
  image: 'revdex' | 'testpilot' | 'suppsense' | 'subnet'
  imageAlt: string
}

/* The CV lists no repo/demo links for individual projects, so cards render without them. */
export const projects: readonly Project[] = [
  {
    name: 'RevDex',
    year: 'Ongoing',
    description:
      'A Pokedex-inspired car-spotting mobile app: photograph a vehicle and the Gemini Flash API identifies its make, model, and year. Firebase Auth and Firestore power user accounts and a persistent digital garage of spotted cars.',
    tech: ['React Native', 'TypeScript', 'Expo', 'Firebase', 'Gemini API'],
    image: 'revdex',
    imageAlt:
      'Placeholder mockup of the RevDex mobile app: a dark camera screen with an orange shutter button and a grid of spotted-car cards.',
  },
  {
    name: 'TestPilot',
    year: '2025',
    description:
      'An automated end-to-end and UI testing MCP server built during my internship at MEA Mobile. Designed with a modular, AI-agent approach to streamline QA workflows and significantly reduce manual testing effort.',
    tech: ['TypeScript', 'Node.js', 'AWS S3', 'MCP', 'Claude'],
    image: 'testpilot',
    imageAlt:
      'Placeholder mockup of the TestPilot dashboard: a dark test-runner interface with a sidebar and rows of passing test results.',
  },
  {
    name: 'Suppsense',
    year: '2025',
    description:
      'Scan a supplement barcode to retrieve its ingredient list and get an AI-generated summary grounded in real-time web searches. Built to debunk misinformation surrounding supplements.',
    tech: ['HTML/CSS', 'Node.js', 'AWS EC2', 'MySQL', 'ChatGPT API'],
    image: 'suppsense',
    imageAlt:
      'Placeholder mockup of the Suppsense web app: a light interface with a barcode scan panel and an ingredient summary list.',
  },
  {
    name: 'Remote Subnet Connection',
    year: '2024',
    description:
      'Configured routing, NAT, and WireGuard tunnels on virtual and physical MikroTik routers to enable inter-subnet and remote subnet communication in a real-world environment.',
    tech: ['RouterOS', 'VMware ESXi'],
    image: 'subnet',
    imageAlt:
      'Placeholder mockup of a network topology diagram: router nodes connected by tunnel links on a dark background.',
  },
] as const
