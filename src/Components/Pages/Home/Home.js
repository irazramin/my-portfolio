import React from 'react'
import Footer from '../../Shared/Footer';
import About from '../About'
import Contact from '../Contact';
import Projects from '../Projects';
import Skills from '../Skills'
import Banner from './Banner'

const Home = () => {
  const modeOn = localStorage.getItem('modeOn');
  console.log(modeOn)
  return (
    <div>
      <Banner modeOn={modeOn}/>
      <About />
      <Skills modeOn={modeOn}/>
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
};

export default Home