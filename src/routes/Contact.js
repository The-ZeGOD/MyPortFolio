import React from 'react'
import Nav from '../components/NavBar/Nav'
import Footer from '../components/FooterSection/FooterSection';
import Mainsection from '../components/Mainsection/Mainsection';
import ContactMe from '../components/ContactMe/ContactMe';

const Contact = () => {
  return (
    <div>
      <Nav />
      <Mainsection heading = "Contact Me" paragraph = "Have questions or inquiries? Reach out to us anytime." />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default Contact