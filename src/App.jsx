import { useState } from 'react'
import Hero from './components/Hero';
import Nav from "./components/Nav"
import Figures from './components/Figures';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className='w-100 flex flex-justify-center flex-column'>
      
      <header className='w-100 flex flex-column align-center'>
        <Nav />
        <Figures />
        <Hero />
      </header>
      <main className="w-100 flex flex-column align-center">
        <Skills />
        <Projects />
      </main>
    </div>
  )
}

export default App
