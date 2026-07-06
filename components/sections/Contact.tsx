'use client'

import { FormEvent, useState } from 'react'
import Reveal from '@/components/ui/Reveal'
import { SOCIAL } from '@/lib/data'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('sent')
      } else {
        const body = await res.json().catch(() => ({}))
        setErrorMsg(body.error ?? 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Network error. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="rule bg-surface">
      <div className="mx-auto max-w-[1200px] px-6 py-28 md:py-36">
        <Reveal>
          <p className="label mb-10">06 / Contact</p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <Reveal>
              <h2 className="display text-[clamp(2.2rem,4.5vw,3.8rem)] mb-8">
                Let&apos;s build something great.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-muted text-lg leading-relaxed max-w-md mb-10">
                Have a project, idea, or opportunity? I&apos;d love to hear about it.
                Drop a message and I&apos;ll get back to you within 24 hours.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <ul className="space-y-3">
                {[
                  { label: SOCIAL.email, href: `mailto:${SOCIAL.email}` },
                  { label: 'GitHub', href: SOCIAL.github },
                  { label: 'LinkedIn', href: SOCIAL.linkedin },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="u-link text-ink text-sm font-medium"
                    >
                      {link.label} <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={100}>
            {status === 'sent' ? (
              <div className="border border-line p-12 text-center">
                <h3 className="display text-2xl mb-3">Message sent.</h3>
                <p className="text-muted">Thanks for reaching out. I&apos;ll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="contact-name" className="label block mb-2">Name</label>
                    <input id="contact-name" type="text" name="name" required placeholder="Your name" className="field" />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="label block mb-2">Email</label>
                    <input id="contact-email" type="email" name="email" required placeholder="your@email.com" className="field" />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-subject" className="label block mb-2">Subject</label>
                  <input id="contact-subject" type="text" name="subject" placeholder="What's this about?" className="field" />
                </div>
                <div>
                  <label htmlFor="contact-message" className="label block mb-2">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project, idea, or opportunity…"
                    className="field resize-y min-h-[120px]"
                  />
                </div>

                {status === 'error' && <p className="text-sm text-red-800">{errorMsg}</p>}

                <button type="submit" disabled={status === 'sending'} className="btn-ink disabled:opacity-60">
                  {status === 'sending' ? 'Sending…' : status === 'error' ? 'Try again →' : 'Send message →'}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
