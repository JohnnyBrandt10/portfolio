import Loader from '@/components/Loader'
import Cursor from '@/components/Cursor'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Work from '@/components/Work'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollInit from '@/components/ScrollInit'

export default function Home() {
  return (
    <>
      <Loader />
      <Cursor />
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Work />
        <Services />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <a title='home' href="#home" className="scrollup" id="scroll-up">
        <i className="ri-arrow-up-line"></i>
      </a>
      <ScrollInit />
    </>
  )
}