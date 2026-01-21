import Hero from '@/components/sections/Hero'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import ParticleNetwork from '@/components/effects/ParticleNetwork'
import CursorGlow from '@/components/effects/CursorGlow'

export default function Home() {
  return (
    <>
      <ParticleNetwork />
      <CursorGlow />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}