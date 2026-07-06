'use client'

/* eslint-disable @next/next/no-img-element */
import Reveal from '@/components/ui/Reveal'
import { PROJECTS } from '@/lib/data'

type Project = (typeof PROJECTS)[number]

function Meta({ project }: { project: Project }) {
  return (
    <p className="label !text-faint mb-4">
      {project.category}
      {'status' in project && ` · ${project.status === 'shipped' ? 'Shipped' : 'Active'}`}
      {'company' in project && ` · via ${(project as { company: string }).company}`}
    </p>
  )
}

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.size === 'large')
  const rest = PROJECTS.filter((p) => p.size !== 'large')

  return (
    <section id="projects" className="rule">
      <div className="mx-auto max-w-[1200px] px-6 py-28 md:py-36">
        <Reveal>
          <p className="label mb-10">03 / Projects</p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24 mb-20">
          <Reveal>
            <h2 className="display text-[clamp(2.2rem,4.5vw,3.8rem)]">
              Things I&apos;ve built &amp; shipped.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-muted text-lg leading-relaxed self-end max-w-md">
              A selection of products, platforms, and AI systems I&apos;ve engineered from idea to production.
            </p>
          </Reveal>
        </div>

        {/* Featured */}
        <div className="space-y-0">
          {featured.map((project) => (
            <Reveal key={project.id} className="rule py-14 grid md:grid-cols-[1.3fr_1fr] gap-10 items-center">
              <div>
                <Meta project={project} />
                <h3 className="display text-4xl mb-6">{project.title}</h3>
                <p className="text-muted leading-relaxed mb-6 max-w-xl">{project.description}</p>
                <p className="label !text-faint !normal-case !tracking-normal mb-8">{project.tech.join(' · ')}</p>
                {project.link !== '#' && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="u-link text-ink text-sm font-medium">
                    View project <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
              {'logo' in project && (
                <div className="hidden md:flex items-center justify-center bg-ink p-16 min-h-[260px]">
                  <img
                    src={(project as { logo: string }).logo}
                    alt={project.title}
                    className="max-w-[55%] max-h-[120px] object-contain"
                  />
                </div>
              )}
            </Reveal>
          ))}
        </div>

        {/* Everything else: bordered grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-line mt-14">
          {rest.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 80} className="border-b border-r border-line p-8 md:p-10 flex flex-col">
              <Meta project={project} />
              <h3 className="display text-xl mb-3">
                {project.link !== '#' ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="u-link">
                    {project.title} <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6 flex-1">{project.description}</p>
              <p className="label !text-faint !normal-case !tracking-normal">{project.tech.join(' · ')}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
