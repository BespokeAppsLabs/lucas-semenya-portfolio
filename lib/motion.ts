'use client'

import { useEffect } from 'react'

/**
 * One scroll listener and one IntersectionObserver for the whole page.
 * Mounted once from the page root — per-component observers were the thing
 * DESIGN.md §9 called out as the port's main risk.
 *
 * [data-parallax="n"]  translated by progress × n × -160px
 * [data-reveal]        faded + risen once, then unobserved
 */
export function useMotion() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const root = document.documentElement
    root.dataset.motion = 'on'

    // ── Reveal ──
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          e.target.classList.add('is-in')
          io.unobserve(e.target)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el))

    // ── Parallax ──
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'))
    let pending = false

    const onScroll = () => {
      if (pending) return
      pending = true
      requestAnimationFrame(() => {
        pending = false
        const vh = window.innerHeight
        for (const el of nodes) {
          const r = el.getBoundingClientRect()
          if (r.bottom < -200 || r.top > vh + 200) continue
          const factor = parseFloat(el.dataset.parallax || '0')
          const progress = (r.top + r.height / 2 - vh / 2) / vh
          el.style.transform = `translate3d(0,${(progress * factor * -160).toFixed(2)}px,0)`
        }
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
      delete root.dataset.motion
    }
  }, [])
}

/** Scroll position of the window, for anything that needs to read it in a rAF. */
export const scrollProgress = () => window.scrollY / (window.innerHeight || 1)
