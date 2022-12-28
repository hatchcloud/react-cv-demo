import { useState } from 'react'
import Hero from './components/Hero';
import Nav from "./components/Nav"
import Figures from './components/Figures';
import Skills from './components/Skills';

function App() {
  const main = "main";
  return (
    <div className="App w-100 flex flex-justify-center">
      <Nav />
      <main role={main} className="w-100 flex flex-column align-center">
        <Figures />
        <Hero />
        <Skills />
      </main>
    </div>
  )
}

export default App
