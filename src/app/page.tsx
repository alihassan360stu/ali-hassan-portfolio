import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Skills from '@/sections/Skills'
import FeaturedProjects from '@/sections/FeaturedProjects'
import OtherProjects from '@/sections/OtherProjects'
import AutomationSystems from '@/sections/AutomationSystems'
import Experience from '@/sections/Experience'
import Services from '@/sections/Services'
import Testimonials from '@/sections/Testimonials'
import Contact from '@/sections/Contact'
import Footer from '@/sections/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <OtherProjects />
      <AutomationSystems />
      <Experience />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
