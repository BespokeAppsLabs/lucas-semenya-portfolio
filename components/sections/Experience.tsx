'use client'

import Reveal from '@/components/ui/Reveal'
import { EXPERIENCE } from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience" className="rule">
      <div className="mx-auto max-w-[1200px] px-6 py-28 md:py-36">
        <Reveal>
          <p className="label mb-10">05 / Experience</p>
        </Reveal>

        <Reveal>
          <h2 className="display text-[clamp(2.2rem,4.5vw,3.8rem)] mb-20 max-w-3xl">
            Where I&apos;ve made my mark.
          </h2>
        </Reveal>

        <div className="divide-y divide-line border-y border-line">
          {EXPERIENCE.map((exp, i) => (
            <Reveal key={exp.title} delay={i * 80} className="py-12 grid md:grid-cols-[220px_1fr] gap-6">
              <p className="label">{exp.period}</p>
              <div>
                <h3 className="display text-2xl mb-1">{exp.title}</h3>
                <p className="text-muted font-medium mb-5">
                  {'companyUrl' in exp ? (
                    <a
                      href={(exp as { companyUrl: string }).companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="u-link hover:text-ink"
                    >
                      {exp.company} <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    exp.company
                  )}
                </p>
                <p className="text-muted leading-relaxed max-w-2xl">{exp.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
