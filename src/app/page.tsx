import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Skills from '@/sections/Skills'
import FeaturedProjects from '@/sections/FeaturedProjects'
import AutomationSystems from '@/sections/AutomationSystems'
import Experience from '@/sections/Experience'
import Services from '@/sections/Services'
import Contact from '@/sections/Contact'
import Footer from '@/sections/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <AutomationSystems />
      <Experience />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
