'use client'

import { useRef, useEffect, FormEvent, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SOCIAL } from '@/lib/data'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current?.children ?? [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 80%' },
        }
      )

      gsap.fromTo(
        formRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: formRef.current, start: 'top 80%' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    // In production, wire up to your preferred email service
    await new Promise((r) => setTimeout(r, 1500))
    setStatus('sent')
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '16px 20px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 12,
    color: 'var(--white)',
    fontSize: 15,
    fontFamily: 'var(--font-space-grotesk)',
    outline: 'none',
    transition: 'border-color 0.3s ease, background 0.3s ease',
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      style={{
        padding: '140px 24px',
        background: 'var(--bg)',
        position: 'relative',
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,255,209,0.04), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Heading */}
        <div ref={headingRef} style={{ marginBottom: 72, textAlign: 'center' }}>
          <div className="section-label" style={{ marginBottom: 24, justifyContent: 'center' }}>
            <span style={{ width: 24, height: 1, background: 'var(--teal)', display: 'block' }} />
            Get In Touch
            <span style={{ width: 24, height: 1, background: 'var(--teal)', display: 'block' }} />
          </div>
          <h2
            style={{
              fontSize: 'clamp(40px, 6vw, 90px)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 1.0,
              marginBottom: 20,
            }}
          >
            Let&apos;s build
            <br />
            <span className="gradient-text">something great.</span>
          </h2>
          <p
            style={{
              fontSize: 'clamp(15px, 1.8vw, 18px)',
              color: 'rgba(240,240,248,0.45)',
              lineHeight: 1.65,
              maxWidth: 480,
              margin: '0 auto',
            }}
          >
            Have a project, idea, or opportunity? I&apos;d love to hear about it.
            Drop a message and I&apos;ll get back to you within 24 hours.
          </p>

          {/* Quick links */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginTop: 32, flexWrap: 'wrap' }}>
            {[
              { label: 'thereshi.l@gmail.com', href: `mailto:${SOCIAL.email}` },
              { label: 'GitHub', href: SOCIAL.github },
              { label: 'LinkedIn', href: SOCIAL.linkedin },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: 'rgba(240,240,248,0.4)',
                  letterSpacing: '0.03em',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#00FFD1')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(240,240,248,0.4)')}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        {status === 'sent' ? (
          <div
            style={{
              textAlign: 'center',
              padding: '60px 40px',
              borderRadius: 20,
              border: '1px solid rgba(0,255,209,0.2)',
              background: 'rgba(0,255,209,0.04)',
            }}
          >
            <div style={{ fontSize: 48, marginBottom: 20 }}>✨</div>
            <h3
              style={{
                fontSize: 28,
                fontWeight: 800,
                letterSpacing: '-0.02em',
                marginBottom: 12,
                color: '#00FFD1',
              }}
            >
              Message sent!
            </h3>
            <p style={{ color: 'rgba(240,240,248,0.5)', fontSize: 16 }}>
              Thanks for reaching out. I&apos;ll get back to you shortly.
            </p>
          </div>
        ) : (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'rgba(240,240,248,0.4)',
                    marginBottom: 10,
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  style={inputStyle}
                  onFocus={(e) => {
                    const el = e.target as HTMLInputElement
                    el.style.borderColor = 'rgba(0,255,209,0.4)'
                    el.style.background = 'rgba(0,255,209,0.04)'
                  }}
                  onBlur={(e) => {
                    const el = e.target as HTMLInputElement
                    el.style.borderColor = 'rgba(255,255,255,0.08)'
                    el.style.background = 'rgba(255,255,255,0.04)'
                  }}
                />
              </div>
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'rgba(240,240,248,0.4)',
                    marginBottom: 10,
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  style={inputStyle}
                  onFocus={(e) => {
                    const el = e.target as HTMLInputElement
                    el.style.borderColor = 'rgba(0,255,209,0.4)'
                    el.style.background = 'rgba(0,255,209,0.04)'
                  }}
                  onBlur={(e) => {
                    const el = e.target as HTMLInputElement
                    el.style.borderColor = 'rgba(255,255,255,0.08)'
                    el.style.background = 'rgba(255,255,255,0.04)'
                  }}
                />
              </div>
            </div>

            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'rgba(240,240,248,0.4)',
                  marginBottom: 10,
                }}
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="What's this about?"
                style={inputStyle}
                onFocus={(e) => {
                  const el = e.target as HTMLInputElement
                  el.style.borderColor = 'rgba(0,255,209,0.4)'
                  el.style.background = 'rgba(0,255,209,0.04)'
                }}
                onBlur={(e) => {
                  const el = e.target as HTMLInputElement
                  el.style.borderColor = 'rgba(255,255,255,0.08)'
                  el.style.background = 'rgba(255,255,255,0.04)'
                }}
              />
            </div>

            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'rgba(240,240,248,0.4)',
                  marginBottom: 10,
                }}
              >
                Message
              </label>
              <textarea
                name="message"
                required
                placeholder="Tell me about your project, idea, or opportunity..."
                rows={6}
                style={{ ...inputStyle, resize: 'vertical', minHeight: 160 }}
                onFocus={(e) => {
                  const el = e.target as HTMLTextAreaElement
                  el.style.borderColor = 'rgba(0,255,209,0.4)'
                  el.style.background = 'rgba(0,255,209,0.04)'
                }}
                onBlur={(e) => {
                  const el = e.target as HTMLTextAreaElement
                  el.style.borderColor = 'rgba(255,255,255,0.08)'
                  el.style.background = 'rgba(255,255,255,0.04)'
                }}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              style={{
                padding: '18px 48px',
                borderRadius: 100,
                background:
                  status === 'sending'
                    ? 'rgba(0,255,209,0.3)'
                    : 'linear-gradient(135deg, #00FFD1, #00c4a0)',
                color: '#020208',
                fontWeight: 700,
                fontSize: 16,
                letterSpacing: '0.02em',
                border: 'none',
                alignSelf: 'flex-start',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease',
                cursor: status === 'sending' ? 'wait' : 'pointer',
                opacity: status === 'sending' ? 0.7 : 1,
                fontFamily: 'var(--font-space-grotesk)',
              }}
              onMouseEnter={(e) => {
                if (status !== 'sending') {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(-2px)'
                  el.style.boxShadow = '0 8px 30px rgba(0,255,209,0.4)'
                }
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = 'none'
              }}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message →'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
