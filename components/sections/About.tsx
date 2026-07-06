'use client'

import Reveal from '@/components/ui/Reveal'

const STATS = [
  { value: '3+', label: 'Years building' },
  { value: '10+', label: 'Active projects' },
  { value: '6', label: 'AI agents running' },
  { value: '5+', label: 'Clients' },
]

const FOCUS = ['BespokeHQ', 'Malome Mobile', 'Bespoke CRM', 'OpenClaw Agents', 'Next.js 16', 'Expo 54', 'Convex', 'WebGL']

export default function About() {
  return (
    <section id="about" className="rule">
      <div className="mx-auto max-w-[1200px] px-6 py-28 md:py-36">
        <Reveal>
          <p className="label mb-10">01 / About</p>
        </Reveal>

        <div className="grid md:grid-cols-[1.4fr_1fr] gap-16 md:gap-24">
          <div>
            <Reveal>
              <h2 className="display text-[clamp(2.2rem,4.5vw,3.8rem)] mb-10">
                I build intelligent systems that move the world forward.
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <div className="space-y-5 text-muted text-lg leading-relaxed max-w-xl">
                <p>
                  I&apos;m Lucas Semenya — founder of{' '}
                  <span className="text-ink font-medium">Bespoke Applications Labs</span>, where I lead
                  the development of AI-powered products, full-stack platforms, and autonomous agent systems.
                </p>
                <p>
                  My work sits at the intersection of artificial intelligence and product engineering.
                  I believe every manual process is a systemic bug waiting to be solved — and I build
                  software that solves them permanently.
                </p>
                <p>
                  From mobile and web applications to AI CEO agents, I ship products that operate at
                  scale and create real impact for businesses across South Africa and beyond.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-line mt-10"
              >
                Work with me <span aria-hidden="true">→</span>
              </a>
            </Reveal>
          </div>

          <div>
            <Reveal delay={100}>
              <dl className="grid grid-cols-2">
                {STATS.map((stat, i) => (
                  <div key={stat.label} className={`py-8 pr-6 rule ${i % 2 === 1 ? 'pl-6 border-l border-line' : ''}`}>
                    <dd className="display text-5xl mb-2">{stat.value}</dd>
                    <dt className="label !text-faint">{stat.label}</dt>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={200}>
              <div className="rule pt-8 mt-0">
                <p className="label mb-5">Current focus</p>
                <ul className="flex flex-wrap gap-x-4 gap-y-2">
                  {FOCUS.map((tech) => (
                    <li key={tech} className="text-sm text-muted">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
