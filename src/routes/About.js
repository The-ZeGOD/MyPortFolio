import React from 'react'
import Nav from '../components/NavBar/Nav'
import Footer from '../components/FooterSection/FooterSection';
import Mainsection from '../components/Mainsection/Mainsection';
import AboutContent from '../components/AboutContent/AboutContent';

const About = () => {
  return (
    <div>
      <Nav />
      <Mainsection heading = "About" paragraph = "I am a skilled developer crafting innovative digital solutions."/>
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About