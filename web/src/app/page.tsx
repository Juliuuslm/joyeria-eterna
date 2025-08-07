import Header from '@/components/ui/Header'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Catalog from '@/components/sections/Catalog'
import Values from '@/components/sections/Values'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/ui/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import SectionDivider from '@/components/ui/SectionDivider'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionDivider variant="diamond" />
        <Services />
        <SectionDivider variant="line" />
        <Catalog />
        <SectionDivider variant="diamond" />
        <About />
        <SectionDivider variant="line" />
        <Testimonials />
        <SectionDivider variant="diamond" />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}