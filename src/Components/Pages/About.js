import React from 'react';
import myPic from '../../assets/my_pic.jpg';
const About = () => {
  return (
    <div id='about' className='w-[80%] mx-auto'>
      <h2 className='text-center text-2xl font-bold my-5'>
        <span className='text-rose-500'>About</span> me
      </h2>
      <div className='flex gap-10 lg:flex-row flex-col'>
        <div className=''>
          <img
            src={myPic}
            class='max-w-sm object-cover h-[330px]  mx-auto m-0  rounded-lg shadow-2xl'
            alt=''
          />
        </div>
        <div className='lg:w-[500px] text-start w-full mx-auto'>
          <p className='leading-8 text-lg font-medium'>
            I'm a front-end developer who works with HTML, CSS, UI libraries
            (Bootstrap5, TailwindCSS), JavaScript, ReactJS, NodeJS, MongoDB, and
            ExpressJS with dedication and hardworking seeking good opportunities
            to prove my skills, looking for a responsible position to gain
            practical experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
