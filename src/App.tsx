import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-scrap-sm focus:border-2 focus:border-ink focus:bg-highlight focus:px-4 focus:py-2 focus:font-bold"
      >
        Skip to content
      </a>

      {/* notebook page furniture: red margin line + punched holes */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-y-0 left-0 z-30 hidden md:block">
        <span className="absolute inset-y-0 left-14 w-0.5 bg-red/50" />
        <span className="absolute left-4 top-[18%] h-5 w-5 rounded-full border-2 border-paper-deep bg-paper-mid shadow-inner" />
        <span className="absolute left-4 top-[48%] h-5 w-5 rounded-full border-2 border-paper-deep bg-paper-mid shadow-inner" />
        <span className="absolute left-4 top-[78%] h-5 w-5 rounded-full border-2 border-paper-deep bg-paper-mid shadow-inner" />
      </div>

      <Nav />

      <main id="main" className="md:pl-16">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <div className="md:pl-16">
        <Footer />
      </div>
    </>
  )
}

export default App
