export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'What I Do', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const HERO_ROLES = ['Founder', 'AI Builder', 'Engineer', 'Technologist', 'Creator']

export const SERVICES = [
  {
    number: '01',
    title: 'AI Application Development',
    description:
      'Building intelligent, AI-native applications powered by Claude, custom LLM pipelines, and multi-agent orchestration systems that think and act autonomously.',
    tags: ['Claude API', 'LLM Pipelines', 'Vector DB', 'RAG'],
    color: '#00FFD1',
  },
  {
    number: '02',
    title: 'Full Stack Engineering',
    description:
      'End-to-end web and mobile development with React, Next.js, Node.js, and React Native — from zero to production-scale, built to last.',
    tags: ['React', 'Next.js', 'Node.js', 'React Native'],
    color: '#FFB800',
  },
  {
    number: '03',
    title: 'Business Automation',
    description:
      'Digitizing manual processes with purpose-built software — CRMs, fleet systems, inventory management, and intelligent workflow automation.',
    tags: ['CRM', 'Fleet Mgmt', 'Automation', 'Integration'],
    color: '#A855F7',
  },
  {
    number: '04',
    title: 'Creative Technology',
    description:
      'Immersive 3D web experiences, interactive UX, and visually extraordinary digital products that set benchmarks and earn industry recognition.',
    tags: ['Three.js', 'WebGL', 'GSAP', 'Framer Motion'],
    color: '#FF6B6B',
  },
  {
    number: '05',
    title: 'Digital Strategy & Consulting',
    description:
      'Technology consulting for SMEs across Africa and beyond — architecture decisions, stack selection, and digital transformation at scale.',
    tags: ['Architecture', 'Consulting', 'Scale', 'Africa Tech'],
    color: '#22D3EE',
  },
  {
    number: '06',
    title: 'AI Agent Systems',
    description:
      'Designing and deploying autonomous AI agent networks — from single-purpose tools to full multi-agent orchestration platforms with real business impact.',
    tags: ['Multi-Agent', 'Orchestration', 'Claude', 'MCP'],
    color: '#F97316',
  },
]

export const PROJECTS = [
  {
    id: 1,
    title: 'Makalani Fleet',
    category: 'Full Stack · Mobile',
    description:
      'Comprehensive fleet & bus management platform with real-time tracking, route optimization, driver management, and parent communication portals.',
    tech: ['React', 'Node.js', 'MySQL', 'React Native'],
    color: '#00FFD1',
    size: 'large',
    link: '#',
  },
  {
    id: 2,
    title: 'Bespoke CRM',
    category: 'AI · Automation',
    description:
      'AI-powered email triage system with automated lead scoring, draft generation, and a 10-stage intelligent inbox pipeline running on Claude.',
    tech: ['Next.js', 'Claude AI', 'PostgreSQL', 'Gmail API'],
    color: '#FFB800',
    size: 'medium',
    link: '#',
  },
  {
    id: 3,
    title: 'FRIDAY Agent',
    category: 'AI Systems',
    description:
      'Autonomous AI CEO agent with strategic reasoning, multi-agent orchestration, and full business intelligence stack.',
    tech: ['Claude API', 'Node.js', 'Multi-Agent', 'MCP'],
    color: '#A855F7',
    size: 'medium',
    link: '#',
  },
  {
    id: 4,
    title: 'Bespoke Mall',
    category: 'Platform · Marketplace',
    description:
      'Town-square marketplace with AI product discovery, swipe-drop mechanics, and vendor analytics dashboard.',
    tech: ['Next.js', 'Convex', 'Stripe', 'AI'],
    color: '#22D3EE',
    size: 'small',
    link: '#',
  },
  {
    id: 5,
    title: 'No Pattern Cafe',
    category: 'Mobile App',
    description:
      'Full-featured cafe management and ordering app with POS integration and real-time order tracking.',
    tech: ['React Native', 'Node.js', 'Sanity'],
    color: '#FF6B6B',
    size: 'small',
    link: '#',
  },
  {
    id: 6,
    title: 'Brushstrokes',
    category: 'Web · Design',
    description:
      'Immersive creative agency website with gallery, portfolio showcase, and booking system for a South African art studio.',
    tech: ['Next.js', 'Sanity', 'Framer Motion'],
    color: '#F97316',
    size: 'small',
    link: '#',
  },
]

export const SKILL_GROUPS = [
  {
    category: 'Frontend',
    color: '#00FFD1',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    color: '#FFB800',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MySQL', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'Mobile',
    color: '#A855F7',
    skills: ['React Native', 'Expo', 'iOS', 'Android'],
  },
  {
    category: 'AI / LLM',
    color: '#22D3EE',
    skills: ['Claude API', 'LLM Pipelines', 'AI Agents', 'Prompt Engineering', 'RAG', 'Vector DB'],
  },
  {
    category: '3D / Creative',
    color: '#FF6B6B',
    skills: ['Three.js', 'React Three Fiber', 'GSAP', 'WebGL', 'Framer Motion', 'Blender'],
  },
  {
    category: 'Tools & DevOps',
    color: '#F97316',
    skills: ['Git', 'Docker', 'Vercel', 'Sanity', 'Supabase', 'GitHub Actions'],
  },
]

export const EXPERIENCE = [
  {
    title: 'Founder & CEO',
    company: 'Bespoke Applications Labs',
    period: '2023 – Present',
    description:
      'Building AI-powered software products and leading a portfolio of web, mobile, and AI agent projects for clients across South Africa and beyond. Everything from CRMs and fleet systems to autonomous AI agent platforms.',
    type: 'founder',
    color: '#00FFD1',
  },
  {
    title: 'Full Stack Developer',
    company: 'Makalani Bus Service',
    period: '2023 – Present',
    description:
      'Architected and developed a complete fleet management platform from ground up — driver apps, parent portals, admin dashboards, real-time tracking, and route optimization serving thousands of users.',
    type: 'work',
    color: '#FFB800',
  },
  {
    title: 'React Native Developer',
    company: 'No Pattern Cafe',
    period: '2023',
    description:
      'Built cross-platform mobile ordering and cafe management application with POS integration, real-time order tracking, and staff management flows.',
    type: 'work',
    color: '#A855F7',
  },
]

export const SOCIAL = {
  github: 'https://github.com/BespokeAppsLab',
  linkedin: 'https://linkedin.com/in/lucas-semenya',
  email: 'thereshi.l@gmail.com',
}
