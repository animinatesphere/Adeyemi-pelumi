import Nav from './components/Nav'
import ScrollProgress from './components/ScrollProgress'
import Marquee from './components/Marquee'
import Hero from './components/Hero'
import About from './components/About'
import CaseStudy from './components/CaseStudy'
import Work from './components/Work'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <CaseStudy />
        <Work />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
