import Image from 'next/image'
import { SOCIAL, STATS } from '@/lib/data'

export default function About() {
  return (
    <section id="about" className="section">
      <p className="eyebrow" style={{ marginBottom: 48 }}>
        01 — The operator
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
          gap: 64,
          alignItems: 'start',
        }}
      >
        {/* The two columns counter-move — 0.06 against -0.05. */}
        <div data-parallax="0.06">
          <h2
            className="display"
            data-reveal
            style={{
              fontSize: 'clamp(2rem,4.4vw,4rem)',
              lineHeight: 0.95,
              marginBottom: 32,
              textWrap: 'balance',
              textTransform: 'none',
            }}
          >
            Every manual process is a systemic bug.
          </h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              maxWidth: 620,
              fontSize: '1.08rem',
              lineHeight: 1.65,
              color: 'rgba(20,18,14,0.72)',
              textWrap: 'pretty',
            }}
          >
            <p style={{ margin: 0 }}>
              I&rsquo;m Lucas Semenya, founder of{' '}
              <a
                href={SOCIAL.company}
                target="_blank"
                rel="noopener noreferrer"
                className="plain-link"
                style={{ color: '#14120E', fontWeight: 700 }}
              >
                Bespoke Applications Labs ↗
              </a>{' '}
              — a studio
              building AI-powered products, SaaS platforms, and autonomous agent systems for clients
              across South Africa. I&rsquo;m based between Limpopo and Gauteng, working across
              Lephalale, Polokwane, Pretoria, Johannesburg, North West, and Mpumalanga.
            </p>
            <p style={{ margin: 0 }}>
              My work sits where artificial intelligence meets product engineering. I don&rsquo;t
              automate tasks; I retire them. FRIDAY runs the pipeline. NOVA runs the content. I build
              the machines that run the business.
            </p>
            <p style={{ margin: 0 }}>
              Before the Labs I shipped production systems at Technanimals serving thousands of users
              and national institutions — NSFAS, the National Union of Mineworkers, and the Msaada
              gig-worker platform.
            </p>
            <p style={{ margin: 0 }}>
              I came to software from the plant floor. As a mechanical technician at{' '}
              <strong style={{ color: '#14120E' }}>Exxaro Coal</strong> I did mechanical design,
              vibration analysis, and maintenance planning — and that is where the thesis started.
              Vibration analysis is failure prediction. Maintenance planning is the discipline of
              designing manual intervention out of a system instead of scheduling more of it. I build
              software the same way.
            </p>
          </div>

          <a href="#contact" className="rule-link" style={{ marginTop: 36 }}>
            Work with me →
          </a>
        </div>

        <div data-parallax="-0.05" style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div className="shot" style={{ aspectRatio: '4/5', padding: 0, overflow: 'hidden' }}>
            <Image
              src="/images/Lucas_profile_swarm_4x5.png"
              alt="Lucas Semenya standing with the FRIDAY, ULTRON, and NOVA robot agents"
              fill
              sizes="(max-width: 703px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>

          <dl
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 0,
              margin: 0,
              borderTop: '1px solid rgba(20,18,14,0.2)',
            }}
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                style={{ padding: '22px 18px 22px 0', borderBottom: '1px solid rgba(20,18,14,0.2)' }}
              >
                <dd
                  className="display"
                  style={{ fontSize: '2.6rem', lineHeight: 1, marginBottom: 8 }}
                >
                  {s.value}
                </dd>
                <dt
                  className="mono"
                  style={{ fontSize: 10, letterSpacing: '0.16em', color: 'rgba(20,18,14,0.5)' }}
                >
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
