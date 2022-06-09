import React from 'react';

const Header = ({setModeOn}) => {

  const modeOn = localStorage.getItem('modeOn')

  return (
    <div className={`${modeOn === 'true' ? 'text-white' : 'to-slate-900'}`}>
      <nav
        class='
                relative
                w-full
                items-center
                justify-between
                py-4
                text-gray-500
                hover:text-gray-700
                focus:text-gray-700
                navbar navbar-expand-lg navbar-light
                '
      >
        <div className='container w-full mx-auto flex  justify-between'>
          <div class='px-6 w-full'>
            <button
              class='
                navbar-toggler
                text-gray-500
                border-0
                hover:shadow-none hover:no-underline
                py-2
                px-2.5
                bg-transparent
                focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
            '
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='bars'
                class='w-6'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 448 512'
              >
                <path
                  fill='currentColor'
                  d='M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z'
                ></path>
              </svg>
            </button>
            <div class='collapse navbar-collapse ' id='navbarSupportedContent'>
              <a class='text-xl text-black' href='#'>
                Iraz
              </a>
              <ul class='navbar-nav flex flex-col pl-0 list-style-none ml-auto'>
                <li class='nav-item px-2'>
                  <a
                    class={` nav-link`}
                    aria-current='page'
                    href='#home'
                  >
                    Home
                  </a>
                </li>
                <li class='nav-item pr-2'>
                  <a
                    class={` p-0`}
                    href='#about'
                  >
                    About me
                  </a>
                </li>
                <li class='nav-item pr-2'>
                  <a
                    class={`nav-link  p-0`}
                    href='#skill'
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <div class='flex justify-center'>
                    <div class='form-check form-switch'>
                      <input
                        class='form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain checked:bg-rose-600 bg-gray-300 focus:outline-none cursor-pointer shadow-sm'
                        type='checkbox'
                        role='switch'
                        id='flexSwitchCheckDefault'
                        onChange={(e) => {
                          setModeOn(e.target.checked);
                          localStorage.setItem("modeOn",e.target.checked);
                        }}
                      />
                      <label
                        class={` 'form-check-label inline-block'`}
                        for='flexSwitchCheckDefault'
                      >
                        Dark mode
                      </label>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
