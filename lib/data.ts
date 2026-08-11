export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Practice', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Stack', href: '#stack' },
]

export const HERO_ROLES = [
  'Founder',
  'Mechanical Engineer',
  'AI Builder',
  'Full Stack Engineer',
  'Product Architect',
  'Creative Technologist',
]

export const TICKER = [
  'AI Agent Systems',
  '✳',
  'Full Stack Engineering',
  '✳',
  'Mechanical Engineering',
  '✳',
  'Three.js / WebGL',
  '✳',
  'South Africa',
  '✳',
  'Bespoke Applications Labs',
  '✳',
]

export const STATS = [
  { value: '14', label: 'Projects shipped' },
  { value: '6', label: 'Agents running' },
  { value: '3+', label: 'Years building' },
  { value: '2', label: 'App stores live' },
]

export const SERVICES = [
  {
    number: '01',
    title: 'AI Application Development',
    description:
      'Intelligent, AI-native applications powered by Claude, custom LLM pipelines, and multi-agent orchestration — rapid prototype to production platform.',
    tags: ['Claude API', 'LLM Pipelines', 'Hermes', 'Archon'],
  },
  {
    number: '02',
    title: 'Full Stack Engineering',
    description:
      'End-to-end web and mobile with React, Next.js, Node.js, Expo, and Convex. Zero to production, built for scale and longevity.',
    tags: ['React', 'Next.js', 'Node.js', 'Expo / RN'],
  },
  {
    number: '03',
    title: 'Business Automation',
    description:
      'Turning every manual process into a systemic bug — then fixing it. CRMs, agent pipelines, social engines, document generation, workflow orchestration.',
    tags: ['CRM', 'Pipelines', 'pgboss', 'Hono'],
  },
  {
    number: '04',
    title: 'Creative Technology',
    description:
      'Immersive 3D web experiences and interactive UX. WebGL, GSAP, and Three.js pushed to the edge of what a browser will do.',
    tags: ['Three.js', 'WebGL', 'GSAP', 'Framer Motion'],
  },
  {
    number: '05',
    title: 'Platform & Product Strategy',
    description:
      'Architecture decisions, stack selection, and digital transformation for African SMEs — MVP scoping through enterprise system design.',
    tags: ['Architecture', 'Consulting', 'SaaS', 'Africa Tech'],
  },
  {
    number: '06',
    title: 'AI Agent Systems',
    description:
      'Autonomous agent networks — CEO agents, social agents, network agents. Full multi-agent orchestration with real business impact.',
    tags: ['Multi-Agent', 'Docker', 'Claude Code', 'GitHub Actions'],
  },
]

/* Three featured, chosen for external proof — press, app stores, live users.
   Everything else is an index row; equal weight destroys the hierarchy. */
export const FEATURED = [
  {
    title: 'CarShareNova',
    category: 'Marketplace · Mobile · Web',
    status: 'Shipped',
    link: 'https://carsharenova.com',
    logo: '/logos/carsharenova-ink.png',
    shot: '[ product ] — CarShareNova app on iPhone,\nheld in-car, 240+ vehicle listings visible.',
    description:
      "South Africa's peer-to-peer car rental marketplace — 240+ cars across Johannesburg, Cape Town, and Pretoria. Owners list free, renters book in minutes, every trip insured by Old Mutual Insure. Featured on CNBC Africa, 702, Moneyweb, and ITWeb.",
    tech: ['Next.js', 'React Native', 'Node.js', 'TypeScript', 'AWS'],
  },
  {
    title: 'Msaada',
    category: 'Gig Economy · Platform',
    status: 'Shipped',
    link: 'https://msaada.app/',
    logo: '/logos/msaada.png',
    shot: '[ documentary ] — SA gig courier on a scooter,\ngolden hour, phone mounted on handlebars.',
    description:
      'Empowers gig workers across Uber Eats, Bolt, PicknPay ASAP and Mr D — rent-to-own gear, flexible payment plans, task management, and earnings tracking. Live in production serving thousands.',
    tech: ['React', 'Node.js', 'TypeScript', 'AWS', 'GraphQL'],
  },
  {
    title: 'BespokeHQ',
    category: 'AI Platform · Agent Orchestration',
    status: 'Active',
    link: 'https://github.com/BespokeAppsLab',
    logo: '',
    shot: '[ interface ] — dark agent dashboard, task queue,\nlive container logs streaming. Screen capture.',
    description:
      'The Agent Intelligence Layer behind Bespoke Applications Labs. A self-hostable, two-layer agent server that accepts tasks via chat, Telegram, webhook, or cron — then dispatches ephemeral Docker containers running Claude Code to execute them autonomously.',
    tech: ['Next.js', 'Docker', 'Claude Code', 'Drizzle', 'Vercel AI SDK'],
  },
]

/* Descriptions sourced from the Bespoke wiki (Projects/*), not invented.
   FRIDAY and NOVA moved out of this list into SWARM below so they are not
   listed twice. Canonical spellings per wiki: Malume (not Malome),
   bonramCRM, 555chess. */
export const PROJECT_INDEX = [
  {
    title: 'Malume',
    category: 'Mobile · SaaS · Transport',
    short: 'School transport platform — live child tracking, digital agreements, recurring billing.',
    link: '#work',
  },
  {
    title: 'bonramCRM',
    category: 'AI · CRM · Email Intelligence',
    short: 'Inbox classified by a local model into Convex; agents read records, never mail.',
    link: '#work',
  },
  {
    title: 'School Record',
    category: 'EdTech · Multi-tenant SaaS',
    short: 'Multi-tenant school management for South African primary schools.',
    link: '#work',
  },
  {
    title: 'The Safety Shelf',
    category: 'Ecommerce · AI · Publishing',
    short: "AI-illustrated children's safety bookstore with audiobooks and translations.",
    link: 'https://www.safety-shelf.co.za',
  },
  {
    title: '555chess',
    category: 'EdTech · Chess Academy',
    short: 'Every move timed to the millisecond, so coaches teach from evidence not impressions.',
    link: '#work',
  },
  {
    title: 'Kolada',
    category: 'Hospitality · Web + Mobile',
    short: 'Ibiza-inspired hospitality platform in a Turborepo monorepo.',
    link: '#work',
  },
  {
    title: 'Bonram',
    category: 'Luxury · Hire · Portal',
    short: 'Quote-first institutional luxury portal with live inventory.',
    link: '#work',
  },
  {
    title: 'Brushstrokes',
    category: 'Web · Design Review',
    short: 'Versioned design review and structured client feedback.',
    link: '#work',
  },
  {
    title: 'NUM Case Portal',
    category: 'Enterprise · Legal Systems',
    short: 'Case management for the National Union of Mineworkers.',
    link: 'https://technanimals.com/',
  },
  {
    title: 'NSFAS Admin Portal',
    category: 'GovTech · EdTech',
    short: 'Student accommodation allocation for national financial aid.',
    link: 'https://technanimals.com/',
  },
]

/* The hero lattice is literally this swarm (DESIGN.md §3) — until now the
   page never paid that metaphor off. FRIDAY and NOVA are sourced from their
   wiki pages; ULTRON has no product page and its line needs confirming. */
export const SWARM = [
  {
    name: 'FRIDAY',
    role: 'Operations',
    description:
      'The CEO agent. Pipeline monitoring, lead intake, morning briefs, weekly reviews, and orchestration of the other agents.',
    facts: ['Hermes runtime', 'Reports daily', 'Never sleeps'],
  },
  {
    name: 'NOVA',
    role: 'Content',
    description:
      'Social strategist and execution agent. Drafts, quality-reviews, and routes content across five networks — nothing publishes without CRM approval.',
    facts: ['5 networks', 'CRM-gated', 'Reports to FRIDAY'],
  },
  {
    name: 'ULTRON',
    role: 'Architecture',
    description:
      'Systems architect and auditor. Design review, security verification, and architecture decision records before anything ships.',
    facts: ['Double-audit', 'Security review', 'ADRs'],
  },
]

export const SKILL_GROUPS = [
  {
    category: 'Frontend',
    skills: ['React 19', 'Next.js 16', 'TypeScript', 'Tailwind v4', 'Framer Motion', 'GSAP'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Hono', 'Express', 'PostgreSQL', 'SQLite / libSQL', 'Convex'],
  },
  {
    category: 'Mobile',
    skills: ['Expo 54', 'React Native', 'NativeWind', 'EAS Build', 'iOS', 'Android'],
  },
  {
    category: 'AI / LLM',
    skills: ['Claude API', 'Hermes', 'Archon', 'Gemini', 'LLM Pipelines', 'Prompt Engineering'],
  },
  {
    category: '3D / Creative',
    skills: ['Three.js', 'React Three Fiber', 'WebGL / GLSL', 'ScrollTrigger', 'Blender'],
  },
  {
    category: 'DevOps',
    skills: ['Docker', 'GitHub Actions', 'Vercel', 'MinIO', 'Drizzle ORM', 'pgboss'],
  },
  // Only the tools you named — everything else in a mechanical group (FEA,
  // GD&T, a qualification) would be invented, so it stays out until confirmed.
  {
    category: 'Mechanical / CAD',
    skills: ['SolidWorks', 'Pro/ENGINEER', 'Mathcad', 'SKF'],
  },
]

/* `period` is optional so a role can ship before its dates are confirmed —
   an invented date on a CV is worse than a missing one. `tags` reuses the
   existing pill style to carry a role's specialisms. */
export type Role = {
  title: string
  company: string
  period?: string
  description: string
  tags?: string[]
}

export const EXPERIENCE: Role[] = [
  {
    title: 'Founder & CEO',
    company: 'Bespoke Applications Labs',
    period: '2023 — Present',
    description:
      'Leading a portfolio of AI-powered products, SaaS platforms, and autonomous agent systems serving clients across South Africa. Built bonramCRM, Malume, School Record, The Safety Shelf, and 555chess from scratch — alongside the autonomous agent swarm that runs the studio itself: FRIDAY, NOVA, and ULTRON.',
  },
  {
    title: 'Software Engineer',
    company: 'Technanimals',
    period: '2024 — 2025',
    description:
      'Engineering at a South African software house, contributing to production systems serving thousands of users and major SA institutions — the Msaada gig-worker platform, the NUM Case Management System, and the NSFAS student accommodation portal.',
  },
  {
    title: 'Mechanical Technician',
    company: 'Exxaro Coal',
    period: '2017 — 2022',
    description:
      'Mechanical engineering on production plant — design work, condition monitoring, and planned maintenance. Vibration analysis is failure prediction; maintenance planning is the discipline of designing manual intervention out of a system rather than scheduling more of it. The thesis this studio runs on started here.',
    tags: ['Mechanical Design', 'Vibration Analysis', 'Maintenance Planning'],
  },
]

export const SOCIAL = {
  github: 'https://github.com/BespokeAppsLab',
  linkedin: 'https://www.linkedin.com/in/lucas-semenya-50665564/',
  email: 'lucas@bespokeapps.co.za',
  domain: 'lucassemenya.co.za',
  // www, not the apex: bespokeapps.co.za redirects http -> https and then
  // fails to complete TLS, so the bare domain is a dead link today.
  company: 'https://www.bespokeapps.co.za',
  companyName: 'Bespoke Applications Labs',
}
