'use client'

import { useEffect } from 'react'

export default function CustomCursor() {
  useEffect(() => {
    const dot = document.getElementById('cursor-dot')
    const ring = document.getElementById('cursor-ring')
    if (!dot || !ring) return

    let ringX = 0
    let ringY = 0
    let dotX = 0
    let dotY = 0
    let rafId: number

    const onMouseMove = (e: MouseEvent) => {
      dotX = e.clientX
      dotY = e.clientY
    }

    const animate = () => {
      // Dot follows exactly
      dot.style.left = `${dotX}px`
      dot.style.top = `${dotY}px`

      // Ring follows with smooth lag
      ringX += (dotX - ringX) * 0.12
      ringY += (dotY - ringY) * 0.12
      ring.style.left = `${ringX}px`
      ring.style.top = `${ringY}px`

      rafId = requestAnimationFrame(animate)
    }

    const onMouseEnterInteractive = () => ring.classList.add('expanded')
    const onMouseLeaveInteractive = () => ring.classList.remove('expanded')

    document.addEventListener('mousemove', onMouseMove)
    rafId = requestAnimationFrame(animate)

    const interactives = document.querySelectorAll('a, button, [data-hover]')
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterInteractive)
      el.addEventListener('mouseleave', onMouseLeaveInteractive)
    })

    // Observe DOM changes to bind to new interactive elements
    const observer = new MutationObserver(() => {
      document.querySelectorAll('a, button, [data-hover]').forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive)
        el.removeEventListener('mouseleave', onMouseLeaveInteractive)
        el.addEventListener('mouseenter', onMouseEnterInteractive)
        el.addEventListener('mouseleave', onMouseLeaveInteractive)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div id="cursor-dot" />
      <div id="cursor-ring" />
    </>
  )
}
