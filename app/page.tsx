'use client'

import { useState, useCallback } from 'react'
import Preloader from '@/components/ui/Preloader'
import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import WhatIDo from '@/components/sections/WhatIDo'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/ui/Footer'

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  const handlePreloaderDone = useCallback(() => {
    setLoaded(true)
  }, [])

  return (
    <>
      {!loaded && <Preloader onDone={handlePreloaderDone} />}

      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.5s ease',
          pointerEvents: loaded ? 'auto' : 'none',
        }}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <WhatIDo />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
