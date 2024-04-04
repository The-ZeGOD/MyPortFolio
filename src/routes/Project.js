import React from 'react'

import Nav from '../components/NavBar/Nav'
import Footer from '../components/FooterSection/FooterSection';
import Mainsection from '../components/Mainsection/Mainsection';
import Projects from "../components/Projects/Projects"

const Project = () => {
  return (
    <div>
      <Nav />
      <Mainsection heading = "Projects" paragraph = "Some of my recent works!"/>
      <Projects />
      <Footer />
    </div>
  )
}

export default Project;