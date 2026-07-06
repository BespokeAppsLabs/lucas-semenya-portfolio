'use client'

import Reveal from '@/components/ui/Reveal'
import { SKILL_GROUPS } from '@/lib/data'

export default function Skills() {
  return (
    <section id="skills" className="rule bg-surface">
      <div className="mx-auto max-w-[1200px] px-6 py-28 md:py-36">
        <Reveal>
          <p className="label mb-10">04 / Skills &amp; stack</p>
        </Reveal>

        <Reveal>
          <h2 className="display text-[clamp(2.2rem,4.5vw,3.8rem)] mb-20 max-w-3xl">
            Tools of the trade.
          </h2>
        </Reveal>

        <div className="divide-y divide-line border-y border-line">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.category} delay={i * 50} className="py-8 grid md:grid-cols-[220px_1fr] gap-4 items-baseline">
              <h3 className="label">{group.category}</h3>
              <p className="text-muted text-lg">{group.skills.join(' · ')}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
