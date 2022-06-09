import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Typing } from 'react-typing';

const Banner = ({ modeOn }) => {
  return (
    <div
      id='home'
      className='h-[80vh] w-[80%] mx-auto text-center lg:text-left duration-500'
    >
      <div class='mt-[100px]'>
        <h4 className='text-xl font-medium text-rose-600'>Hello! Myself</h4>
        <Typing key={500}>
          {' '}
          <h2 className='lg:text-6xl text-5xl  font-bold '>
            Iraz Ramin Bayejid
          </h2>
        </Typing>

        <h4 className='lg:mt-10 mt-8 lg:text-3xl text-2xl font-bold text-rose-600'>
          Frontend Developer
        </h4>
        <p className=' lg:text-[19px] text-base'>WebDeveloper | Programmer</p>
        <div className='flex mt-2 lg:justify-start justify-center'>
          <p className='text-base'>Follow me -----</p>
          <div className='ml-5 flex'>
            <a
              target='_blank'
              href='https://github.com/irazramin'
              className='text-2xl mx-2'
              rel='noreferrer'
            >
              <FaGithub />
            </a>
            <a
              target='_blank'
              href='https://www.linkedin.com/in/irazraminb/'
              className='text-2xl mx-2'
              rel='noreferrer'
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className='mt-6'>
          <button
            type='button'
            class='inline-block font-bold px-7 py-3 ml-0 mx-2 bg-rose-600 text-white  text-sm leading-snug uppercase rounded shadow-md hover:bg-rose-700 hover:shadow-lg focus:bg-rose-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-rose-800 active:shadow-lg transition duration-150 ease-in-out'
          >
            Get Resume
          </button>
          <a href='#about'>
            <button
              type='button'
              class='inline-block font-bold px-7 py-3 mx-2 border-2 border-rose-500 text-rose-500  text-sm leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
            >
              About me
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner