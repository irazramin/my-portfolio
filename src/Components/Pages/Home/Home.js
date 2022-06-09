import React from 'react'
import Footer from '../../Shared/Footer';
import About from '../About'
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
      <Footer/>
    </div>
  );
};

export default Home