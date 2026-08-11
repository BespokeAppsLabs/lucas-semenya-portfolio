'use client'

import Navbar from '@/components/ui/Navbar'
import Marquee from '@/components/ui/Marquee'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import WhatIDo from '@/components/sections/WhatIDo'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/ui/Footer'
import { useMotion } from '@/lib/motion'

export default function Home() {
  useMotion()

  return (
    <div style={{ position: 'relative', background: '#EDE9E1', overflowX: 'clip' }}>
      <div className="grid-overlay" />

      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <WhatIDo />
        <Projects />
        {/* Skills renders Experience inside the same ink section. */}
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
