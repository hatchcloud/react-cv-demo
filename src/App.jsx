import { useState } from 'react'
import Hero from './components/Hero';
import Nav from "./components/Nav"
import Figures from './components/Figures';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  
  const [projects, setProjects] = useState([
    {
      img: 'project-1',
      title: 'DESIGN PORTFOLIO',
      languages: 'HTML CSS'
    },
    {
      img: 'project-2',
      title: 'E-LEARNING LANDING PAGE',
      languages: 'HTML CSS'
    },
    {
      img: 'project-3',
      title: 'TODO WEB APP',
      languages: 'HTML CSS JAVASCRIPT'
    },
    {
      img: 'project-4',
      title: 'ENTERTAINMENT WEB APP',
      languages: 'HTML CSS JAVASCRIPT'
    },
    {
      img: 'project-5',
      title: 'MEMORY GAME',
      languages: 'HTML CSS JAVASCRIPT'
    },
    {
      img: 'project-6',
      title: 'ART GALLERY SHOWCASE',
      languages: 'HTML CSS JAVASCRIPT'
    }
  ])
  return (
    <div className='w-100 flex flex-justify-center flex-column'>
      
      <header className='w-100 flex flex-column align-center'>
        <Nav />
        <Figures />
        <Hero />
      </header>
      <main className="w-100 flex flex-column align-center">
        <Skills />
        <Projects 
          projects = {projects}
        />
      </main>
      <footer className="w-100 flex flex-column align-center dark-gray pb-3">
        <Contact />
        <Nav />
      </footer>
    </div>
  )
}

export default App
