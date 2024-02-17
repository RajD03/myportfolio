import React from 'react'
import Nav from './components/Nav'
import Home from './components/home'
import './App.css'
import Projects from './components/project'
import Skills from './components/skills'
import Contact from './components/Contact'
import Footer from './components/footer'

const App = () => {
    return (
        <>
            <Nav />
            <Home />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </>
    )
}

export default App
