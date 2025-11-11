import React from 'react'

import Navbar from './components/Navbar/navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Projects from "./components/projects/projects.jsx"
import Services from './components/Services/Services.jsx'
import Contact from './components/Contact/Contact.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
      
    </div>
  )
}

export default App