import React from 'react'
import About from '../About'
import Skills from '../Skills'
import Banner from './Banner'

const Home = ({ modeOn }) => {
  return (
    <div>
      <Banner modeOn={modeOn}/>
      <About />
      <Skills modeOn={modeOn}/>
    </div>
  );
};

export default Home