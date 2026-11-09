import { MotionConfig } from 'framer-motion'
import Backdrop from './components/Backdrop'
import BackToTop from './components/BackToTop'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    // reducedMotion="user": visitors who turn on "reduce motion" get fades without movement.
    <MotionConfig reducedMotion="user">
      <Backdrop />
      <Nav />
      <main className="overflow-x-clip">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </MotionConfig>
  )
}

export default App
