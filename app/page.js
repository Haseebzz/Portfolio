import Image from 'next/image'
import Navbar from './components/Navbar'
import About from './components/About'
import Main from './components/Main'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main>
     <Navbar/>
     <Main/>
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>
    </main>
  )
}
