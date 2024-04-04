import React from 'react'
import Nav from '../components/NavBar/Nav'
import HeroImg from '../components/HeroSection/HeroImg'
import Projects from '../components/Projects/Projects';
import Footer from '../components/FooterSection/FooterSection';


const Home = () => {
  return (
    <div>
      <Nav/>
      <HeroImg/>
      <Projects />
      <Footer/>
    </div>
  );
};

export default Home;