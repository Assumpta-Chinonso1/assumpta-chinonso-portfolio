import React from 'react'
import Navbar from './Components/Navbar'
import Intro from './Components/Intro/Intro'
import Skills from './Components/Skill/Skills'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div className='App'>

        <Navbar/>
        <Intro/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App
