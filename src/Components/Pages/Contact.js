import React from 'react';

const Contact = () => {
    const modeOn = localStorage.getItem('modeOn');
  return (
    <>
      <div className='my-20 mx-10'>
        <h2 className='text-center text-2xl font-bold my-5'>
          <span className='text-rose-500'>Contact</span> With me
        </h2>
        <div
          class={`${
            modeOn === 'true' ? 'bg-[rgba(0,0,0,0.3)]' : ''
          }   "block p-6 rounded-lg shadow-lg  max-w-md mx-auto  " `}
        >
          <form>
            <div class='form-group mb-6'>
              <input
                type='text'
                class='form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-rose-600 focus:outline-none'
                id='exampleInput7'
                placeholder='Name'
              />
            </div>
            <div class='form-group mb-6'>
              <input
                type='email'
                class='form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-rose-600 focus:outline-none'
                id='exampleInput8'
                placeholder='Email address'
              />
            </div>
            <div class='form-group mb-6'>
              <textarea
                class='
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-rose-600 focus:outline-none
      '
                id='exampleFormControlTextarea13'
                rows='3'
                placeholder='Message'
              ></textarea>
            </div>
            <div class='form-group form-check text-center mb-6'>
              <input
                type='checkbox'
                class='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-rose-600 checked:border-rose-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer'
                id='exampleCheck87'
                checked
              />
              <label
                class='form-check-label inline-block text-gray-800'
                for='exampleCheck87'
              >
                Send me a copy of this message
              </label>
            </div>
            <button
              type='button'
              class='
      w-full
      px-6
      py-2.5
      bg-rose-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-rose-700 hover:shadow-lg
      focus:bg-rose-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-rose-800 active:shadow-lg
      transition
      duration-150
      ease-in-out'
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact