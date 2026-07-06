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
  return (
    <>
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
    </>
  )
}
