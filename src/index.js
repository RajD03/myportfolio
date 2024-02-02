import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './Nav';
import Section_1 from './Section_1';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import img1 from './images/my_image.jpg';


ReactDOM.render(
  <>
    <Nav></Nav>
    <div className='front'>
      <Section_1></Section_1>
      <img src={img1} className='raj' />
    </div>
    <Projects></Projects>  
    <About></About>
    <Contact></Contact>
    
    {/* <Heading></Heading>
    <Para /> */}

  </>,document.getElementById('root')
);

