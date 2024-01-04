import React from 'react'
import Navigation from './components/Navigation'
import './App.css';
import Home from './components/Home'
import Projects from './components/Projects';
import About from './components/About'
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsCond from './components/Terms&Cond';

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route exact path='/' element={<>
            <Navigation />
            <Home />
            <Projects />
            <About />
            <Contact />
            <Footer />
          </>} />
          <Route exact path='/termsandcondition' Component={TermsCond} />
          <Route exact path='/privacypolicy' Component={PrivacyPolicy} />
          <Route />
        </Routes>
      </div>
    </>
  )
}

export default App
