'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { NAV_LINKS, SOCIAL } from '@/lib/data'

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 2.5, ease: 'power3.out' }
    )

    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        ref={navRef}
        style={{ opacity: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-6'
        }`}
      >
        <div
          className={`mx-auto max-w-7xl px-6 flex items-center justify-between transition-all duration-500 ${
            scrolled ? 'glass rounded-2xl py-3 mx-4' : ''
          }`}
        >
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group"
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: 'linear-gradient(135deg, #00FFD1, #FFB800)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: 14,
                color: '#020208',
                letterSpacing: '-0.02em',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              className="group-hover:scale-110"
            >
              LS
            </div>
            <span
              style={{
                fontWeight: 600,
                fontSize: 18,
                color: 'rgba(240,240,248,0.6)',
                letterSpacing: '0.01em',
                transition: 'color 0.3s',
              }}
              className="group-hover:text-white hidden sm:block"
            >
              Lucas Semenya
            </span>
          </button>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                style={{
                  fontSize: 17,
                  fontWeight: 500,
                  color: 'rgba(240,240,248,0.55)',
                  letterSpacing: '0.02em',
                  transition: 'color 0.3s ease',
                  position: 'relative',
                  paddingBottom: 4,
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#f0f0f8')}
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = 'rgba(240,240,248,0.55)')
                }
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`mailto:${SOCIAL.email}`}
              style={{
                padding: '10px 22px',
                borderRadius: 100,
                background: 'linear-gradient(135deg, #00FFD1, #00c4a0)',
                color: '#020208',
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: '0.02em',
                transition: 'opacity 0.3s ease, transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                ;(e.target as HTMLElement).style.opacity = '0.85'
                ;(e.target as HTMLElement).style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                ;(e.target as HTMLElement).style.opacity = '1'
                ;(e.target as HTMLElement).style.transform = 'translateY(0)'
              }}
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              style={{
                display: 'block',
                width: 24,
                height: 2,
                background: menuOpen ? '#00FFD1' : '#f0f0f8',
                borderRadius: 2,
                transition: 'all 0.3s ease',
                transform: menuOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: 24,
                height: 2,
                background: menuOpen ? '#00FFD1' : '#f0f0f8',
                borderRadius: 2,
                transition: 'all 0.3s ease',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block',
                width: 24,
                height: 2,
                background: menuOpen ? '#00FFD1' : '#f0f0f8',
                borderRadius: 2,
                transition: 'all 0.3s ease',
                transform: menuOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 40,
          background: 'rgba(2, 2, 8, 0.98)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 40,
          transition: 'opacity 0.4s ease, transform 0.4s ease',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-20px)',
        }}
      >
        {NAV_LINKS.map((link) => (
          <button
            key={link.href}
            onClick={() => handleNavClick(link.href)}
            style={{
              fontSize: 'clamp(28px, 6vw, 48px)',
              fontWeight: 700,
              color: '#f0f0f8',
              letterSpacing: '-0.02em',
              transition: 'color 0.3s',
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#00FFD1')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#f0f0f8')}
          >
            {link.label}
          </button>
        ))}
        <a
          href={`mailto:${SOCIAL.email}`}
          style={{
            marginTop: 20,
            padding: '14px 40px',
            borderRadius: 100,
            background: 'linear-gradient(135deg, #00FFD1, #00c4a0)',
            color: '#020208',
            fontWeight: 700,
            fontSize: 16,
          }}
        >
          Let&apos;s Talk
        </a>
      </div>
    </>
  )
}
