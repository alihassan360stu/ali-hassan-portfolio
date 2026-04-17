import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Skills from '@/sections/Skills'
import ProjectsWork from '@/sections/ProjectsWork'
import Experience from '@/sections/Experience'
import Services from '@/sections/Services'
import CallToAction from '@/sections/CallToAction'
import Contact from '@/sections/Contact'
import Footer from '@/sections/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <ProjectsWork />
      <Experience />
      <Services />
      <CallToAction />
      <Contact />
      <Footer />
    </main>
  )
}
