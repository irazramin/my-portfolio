import React, { useState } from 'react';
import facebook from "./assets/facebook.png";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import twitter from "./assets/twitter.png";
import Home from './Components/Pages/Home/Home';
import Header from './Components/Shared/Header';

function App() {
  const [modeOn,setModeOn] = useState(false);
  return (
    <div
      className={`${
        modeOn ? 'bg-slate-900 text-white' : 'bg-stone-50 text-slate-900'
      }`}
    >
      <Header setModeOn={setModeOn} modeOn={modeOn} />
      <Home setModeOn={setModeOn} modeOn={modeOn} />

      <div className='bg-white p-2 shadow-lg fixed lg:left-5 rounded-lg top-[200px] border-b-4 border-rose-700'>
        <img className='my-5' src={facebook} alt='' />
        <img className='my-5' src={twitter} alt='' />
        <img className='my-5' src={linkedin} alt='' />
        <img className='my-5' src={github} alt='' />
      </div>
    </div>
  );
}

export default App;
