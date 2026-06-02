export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'What I Do', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const HERO_ROLES = [
  'Founder',
  'AI Builder',
  'Full Stack Engineer',
  'Product Architect',
  'Creative Technologist',
]

export const SERVICES = [
  {
    number: '01',
    title: 'AI Application Development',
    description:
      'Building intelligent, AI-native applications powered by Claude, custom LLM pipelines, and multi-agent orchestration systems — from rapid prototypes to production platforms.',
    tags: ['Claude API', 'LLM Pipelines', 'OpenClaw', 'Archon'],
    color: '#00FFD1',
  },
  {
    number: '02',
    title: 'Full Stack Engineering',
    description:
      'End-to-end web and mobile development with React, Next.js, Node.js, Expo, and Convex — zero to production, built for scale and longevity.',
    tags: ['React', 'Next.js', 'Node.js', 'Expo / RN'],
    color: '#FFB800',
  },
  {
    number: '03',
    title: 'Business Automation',
    description:
      'Turning every manual process into a systemic bug — then fixing it. CRMs, agent pipelines, social media engines, document generation, and workflow orchestration.',
    tags: ['CRM', 'Pipeline Automation', 'pgboss', 'Hono'],
    color: '#A855F7',
  },
  {
    number: '04',
    title: 'Creative Technology',
    description:
      'Immersive 3D web experiences, interactive UX, and extraordinary digital products that win awards. WebGL, GSAP, and Three.js at the cutting edge.',
    tags: ['Three.js', 'WebGL', 'GSAP', 'Framer Motion'],
    color: '#FF6B6B',
  },
  {
    number: '05',
    title: 'Platform & Product Strategy',
    description:
      'Architecture decisions, tech stack selection, and digital transformation for African SMEs — from MVP scoping to enterprise-scale system design.',
    tags: ['Architecture', 'Consulting', 'SaaS', 'Africa Tech'],
    color: '#22D3EE',
  },
  {
    number: '06',
    title: 'AI Agent Systems',
    description:
      'Designing and deploying autonomous agent networks — CEO agents, social media agents, network agents — full multi-agent orchestration platforms with real business impact.',
    tags: ['Multi-Agent', 'Docker', 'Claude Code', 'GitHub Actions'],
    color: '#F97316',
  },
]

export const PROJECTS = [
  // ── LARGE (featured) ──────────────────────────────────────────────────────
  {
    id: 0,
    title: 'CarShareNova',
    category: 'Marketplace · Mobile · Web',
    description:
      'South Africa\'s peer-to-peer car rental marketplace — connecting vehicle owners directly with verified renters. Browse 240+ cars from economy to luxury supercars across Johannesburg, Cape Town, and Pretoria. Owners list for free, renters book in minutes, and every trip is covered by commercial insurance underwritten by Old Mutual Insure. iOS and Android apps live. Featured on CNBC Africa, 702 Money Show, Moneyweb, and ITWeb.',
    tech: ['Next.js', 'React Native', 'Node.js', 'TypeScript', 'AWS'],
    color: '#FF6B6B',
    size: 'large',
    status: 'shipped',
    company: 'Technanimals',
    link: 'https://carsharenova.com',
    logo: '/logos/carsharenova.png',
  },
  {
    id: 2,
    title: 'Malome — Scholar Route Pro',
    category: 'Mobile · SaaS · Transport',
    description:
      'Multi-tenant B2B2C school transport platform. Parents get real-time child tracking. Drivers get route management and live session tools. Operators get full fleet visibility. Built on Expo 54, Convex real-time DB, and Clerk auth — deployed on both iOS and Android via EAS.',
    tech: ['Expo 54', 'React Native', 'Convex', 'Clerk', 'NativeWind', 'Google Maps'],
    color: '#FFB800',
    size: 'medium',
    status: 'active',
    link: '#',
  },

  // ── MEDIUM ────────────────────────────────────────────────────────────────
  {
    id: 3,
    title: 'Bespoke CRM',
    category: 'AI · Automation · SaaS',
    description:
      'Agent-first CRM with a fully automated 10-stage email triage pipeline and AI social media content engine powered by Gemini Imagen 4. Built on @geekmidas/toolbox — a TypeScript monorepo framework authored by Lucas. The only human touch points are approval gates.',
    tech: ['TypeScript', 'Hono', 'PostgreSQL', 'Gemini', 'pgboss', 'MinIO'],
    color: '#A855F7',
    size: 'medium',
    status: 'active',
    link: '#',
  },
  {
    id: 4,
    title: 'Bespoke Mall',
    category: 'Platform · Retail OS',
    description:
      'Digital Operating System for retail spaces. Provides free POS + marketplace tools to informal traders to capture intent data. Runs 11 × 4K screens across 8 SA locations. Includes a Credit Footprint Engine generating verifiable sales history for unbanked vendors.',
    tech: ['Next.js', 'React Native', 'Convex', 'Flutterwave', 'Orange Pi 5+'],
    color: '#22D3EE',
    size: 'medium',
    status: 'active',
    link: '#',
  },
  {
    id: 5,
    title: 'FRIDAY — CEO Agent',
    category: 'AI Agents · Orchestration',
    description:
      'Bespoke Applications Labs\' autonomous CEO agent. Runs on OpenClaw. Handles pipeline monitoring, lead intake, morning briefs, weekly reviews, and orchestrates the full agent swarm. Tightly integrated with Bespoke CRM. Reports daily. Never sleeps.',
    tech: ['OpenClaw', 'Archon', 'Claude API', 'Kokoro TTS', 'Bespoke CRM'],
    color: '#F97316',
    size: 'medium',
    status: 'active',
    link: '#',
  },

  // ── SMALL ─────────────────────────────────────────────────────────────────
  {
    id: 1,
    title: 'BespokeHQ',
    category: 'AI Platform · Agent Orchestration',
    description:
      'The Agent Intelligence Layer powering Bespoke Applications Labs. A self-hostable, two-layer AI agent server built on Next.js that accepts tasks via chat, Telegram, webhooks, or cron. Dispatches ephemeral Docker containers running Claude Code to execute tasks autonomously — the backbone of a fully automated business.',
    tech: ['Next.js', 'Node.js', 'Docker', 'Claude Code', 'SQLite / Drizzle', 'Vercel AI SDK'],
    color: '#00FFD1',
    size: 'small',
    status: 'active',
    link: 'https://github.com/BespokeAppsLab',
  },
  {
    id: 6,
    title: 'Kolada Platform',
    category: 'Hospitality · Web + Mobile',
    description:
      'Full-stack hospitality platform — DC-10 Ibiza-inspired landing page and a React Native mobile app, built as a Turborepo monorepo with Next.js 16 and Expo.',
    tech: ['Next.js 16', 'Expo', 'Turborepo', 'Tailwind v4'],
    color: '#FF6B6B',
    size: 'small',
    status: 'active',
    link: '#',
  },
  {
    id: 7,
    title: 'Bonram',
    category: 'Luxury · Hire · Portal',
    description:
      'Digital-first "Institutional Luxury" service portal for event and plant hire. Quote-First workflow for B2B/Government and luxury B2C clients. Real-time inventory availability with Convex.',
    tech: ['Next.js', 'Convex', 'TypeScript', 'Tailwind'],
    color: '#A855F7',
    size: 'small',
    status: 'active',
    link: '#',
  },
  {
    id: 8,
    title: 'Brushstrokes',
    category: 'Web · Design Review Platform',
    description:
      'Design review and feedback platform — artists upload assets, clients submit structured feedback per design. Project workspaces, versioned assets, and binary reaction engine.',
    tech: ['Next.js 16', 'React 19', 'Prisma 7', 'libSQL / Turso'],
    color: '#00FFD1',
    size: 'small',
    status: 'active',
    link: '#',
  },
  {
    id: 9,
    title: 'NOVA — Social Agent',
    category: 'AI Agent · Content',
    description:
      'Bespoke\'s Social Media Strategist agent. Drafts, quality-reviews, and routes content across LinkedIn, X, Instagram, Facebook, and TikTok. All posts CRM-approved before publish.',
    tech: ['OpenClaw', 'Claude API', 'Archon', 'Bespoke CRM'],
    color: '#22D3EE',
    size: 'small',
    status: 'active',
    link: '#',
  },
  {
    id: 10,
    title: 'Bespoke Networks',
    category: 'Infrastructure · AI-Managed',
    description:
      'AI-managed smart-network lab unit. Minimises manual network admin by deploying specialised agents for infrastructure audits, bandwidth scaling, and security hardening.',
    tech: ['Docker', 'BMAD', 'BespokeHQ', 'Network Agents'],
    color: '#FFB800',
    size: 'small',
    status: 'active',
    link: '#',
  },

  // ── TECHNANIMALS (client work, 2024–2025) ─────────────────────────────────
  {
    id: 11,
    title: 'Msaada',
    category: 'Gig Economy · Platform',
    description:
      'Empowers gig workers across Uber Eats, Bolt, PicknPay ASAP, Mr D and more — rent-to-own gear, flexible payment plans, task management, and earnings tracking. Live in production serving thousands of SA gig workers.',
    tech: ['React', 'Node.js', 'TypeScript', 'AWS', 'GraphQL'],
    color: '#22D3EE',
    size: 'large',
    status: 'shipped',
    company: 'Technanimals',
    link: 'https://msaada.app/',
    logo: '/logos/msaada.png',
  },
  {
    id: 12,
    title: 'NUM Case Portal',
    category: 'Enterprise · Legal Systems',
    description:
      'Case Management System for the National Union of Mineworkers — centralised platform for initiating, tracking, and resolving legal cases involving lawyers, advocates, arbitrators, and service providers.',
    tech: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS'],
    color: '#F97316',
    size: 'small',
    status: 'shipped',
    company: 'Technanimals',
    link: 'https://technanimals.com/',
  },
  {
    id: 13,
    title: 'NSFAS Admin Portal',
    category: 'GovTech · EdTech',
    description:
      'Student Accommodation Management System for the National Student Financial Aid Scheme — real-time availability tracking, automated allocation, and comprehensive reporting for SA educational institutions.',
    tech: ['Angular', 'TypeScript', 'Node.js', 'AWS', 'GraphQL'],
    color: '#A855F7',
    size: 'small',
    status: 'shipped',
    company: 'Technanimals',
    link: 'https://technanimals.com/',
  },
]

export const SKILL_GROUPS = [
  {
    category: 'Frontend',
    color: '#00FFD1',
    skills: ['React 19', 'Next.js 16', 'TypeScript', 'Tailwind v4', 'Framer Motion', 'GSAP'],
  },
  {
    category: 'Backend',
    color: '#FFB800',
    skills: ['Node.js', 'Hono', 'Express', 'PostgreSQL', 'SQLite / libSQL', 'Convex'],
  },
  {
    category: 'Mobile',
    color: '#A855F7',
    skills: ['Expo 54', 'React Native', 'NativeWind', 'EAS Build', 'iOS', 'Android'],
  },
  {
    category: 'AI / LLM',
    color: '#22D3EE',
    skills: ['Claude API', 'OpenClaw', 'Archon', 'Gemini', 'LLM Pipelines', 'Prompt Engineering'],
  },
  {
    category: '3D / Creative',
    color: '#FF6B6B',
    skills: ['Three.js', 'React Three Fiber', 'WebGL / GLSL', 'GSAP ScrollTrigger', 'Blender'],
  },
  {
    category: 'DevOps & Tools',
    color: '#F97316',
    skills: ['Docker', 'GitHub Actions', 'Vercel', 'MinIO', 'Drizzle ORM', 'pgboss'],
  },
]

export const EXPERIENCE = [
  {
    title: 'Founder & CEO',
    company: 'Bespoke Applications Labs',
    period: '2023 – Present',
    description:
      'Leading a portfolio of AI-powered products, SaaS platforms, and autonomous agent systems serving clients across South Africa. Built BespokeHQ (AI orchestration platform), Bespoke CRM, Bespoke Mall, Malome, and the full agent swarm — FRIDAY, NOVA, ULTRON — from scratch.',
    type: 'founder',
    color: '#00FFD1',
  },
  {
    title: 'Software Engineer',
    company: 'Technanimals',
    companyUrl: 'https://technanimals.com/',
    period: '2024 – 2025',
    description:
      'Part of the engineering team at a Johannesburg software house. Contributed to production systems serving thousands of users and major SA institutions — including the Msaada gig-worker platform, the NUM Case Management System for the National Union of Mineworkers, and the NSFAS student accommodation admin portal.',
    type: 'work',
    color: '#22D3EE',
  },
]

export const SOCIAL = {
  github: 'https://github.com/BespokeAppsLab',
  linkedin: 'https://www.linkedin.com/in/lucas-semenya-50665564/', // set profile to public in LinkedIn settings
  email: 'lucas@bespokeapps.co.za',
  domain: 'lucassemenya.co.za',
}
