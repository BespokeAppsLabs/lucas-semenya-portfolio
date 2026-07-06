'use client'

import Reveal from '@/components/ui/Reveal'
import { SERVICES, SOCIAL } from '@/lib/data'

export default function WhatIDo() {
  return (
    <section id="services" className="rule bg-surface">
      <div className="mx-auto max-w-[1200px] px-6 py-28 md:py-36">
        <Reveal>
          <p className="label mb-10">02 / What I do</p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24 mb-20">
          <Reveal>
            <h2 className="display text-[clamp(2.2rem,4.5vw,3.8rem)]">
              Every product I build solves a real problem.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-muted text-lg leading-relaxed self-end max-w-md">
              From AI systems that think autonomously to mobile apps that thousands rely on daily —
              here&apos;s the full scope of what I bring to every engagement.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-line">
          {SERVICES.map((service, i) => (
            <Reveal key={service.number} delay={(i % 3) * 80} className="border-b border-r border-line p-8 md:p-10 group">
              <p className="label !text-faint mb-8">{service.number}</p>
              <h3 className="display text-2xl mb-4 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted text-[15px] leading-relaxed mb-8">{service.description}</p>
              <p className="label !text-faint !normal-case !tracking-normal">{service.tags.join(' · ')}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="rule mt-20 pt-10 flex flex-wrap items-end justify-between gap-8">
            <h3 className="display text-3xl">Have a project in mind?</h3>
            <a href={`mailto:${SOCIAL.email}`} className="btn-ink">
              Start a project <span aria-hidden="true">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
