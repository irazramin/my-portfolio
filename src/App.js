import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import facebook from "./assets/facebook.png";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import twitter from "./assets/twitter.png";
import Blogs from './Components/Pages/Blogs';
import Home from './Components/Pages/Home/Home';
import Header from './Components/Shared/Header';

function App() {
  const [modeOn,setModeOn] = useState(false);
  const modeOn1 = localStorage.getItem('modeOn');
  
  return (
    <div
      className={`${
        modeOn1 === 'true'
          ? 'bg-slate-900 text-white'
          : 'bg-stone-50 text-slate-900'
      }`}
    >
      <Header setModeOn={setModeOn} />
      {/* <Home setModeOn={setModeOn} /> */}

      <Routes>
        <Route path='/' element={<Home setModeOn={setModeOn}/>}></Route>
        <Route path='/blog' element={<Blogs />}></Route>
      </Routes>

      <div className='bg-white p-2 shadow-lg fixed lg:left-5 rounded-lg top-[200px] border-b-4 border-rose-700 lg:block hidden'>
        <img className='my-5' src={facebook} alt='' />
        <img className='my-5' src={twitter} alt='' />
        <img className='my-5' src={linkedin} alt='' />
        <img className='my-5' src={github} alt='' />
      </div>
    </div>
  );
}

export default App;
