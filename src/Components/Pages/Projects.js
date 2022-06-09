import React from 'react';

const Projects = () => {
    const modeOn = localStorage.getItem('modeOn')
  const projects = [
    {
      projectName: 'Thermoparts House',
      desc: 'This website is made for, the customer can order all kinds of parts which is related to Air Conditions(AC). There are two-part to this website one is the normal user can order products and another one is admin. Admin can add new parts, order shipped, and delete products.',
      technologies:
        'ReactJs, NodeJs, MongoDB, TailwindCSS,  React query, Firebase Authentication',
      Links: [
        {
          frontend: `https://github.com/irazramin/Thermoparts-house`,
          backend: `https://github.com/irazramin/Thermoparts-house-backend`,
          live: `https://ac-manufacture.web.app/`,
        },
      ],
      img: `https://i.ibb.co/T2HDbD7/project1.jpg`,
    },
    {
      projectName: 'Perfumes Hut',
      desc: 'This is a perfume based inventory system,where you will get variant types of perfumes.You can put your own product and deliver them and again restock products.',
      technologies:
        'ReactJs, NodeJs, MongoDB, TailwindCSS, Firebase Authentication',
      Links: [
        {
          frontend: `https://github.com/irazramin/perfumeshut-`,
          backend: `https://github.com/irazramin/Perfumeshuts-backend`,
          live: `https://warehouse-client-side.web.app/`,
        },
      ],
      img: `https://i.ibb.co/SKSnm5M/project2.jpg`,
    },
    {
      projectName: 'Weddography',
      desc: 'A professional photographer who gives service to people. People can purchase different packages from the website. ',
      technologies:
        'ReactJs, React router, TailwindCSS, Firebase Authentication',
      Links: [
        {
          frontend: `https://github.com/irazramin/Weddography`,
          backend: ``,
          live: `https://weddography-2e501.web.app/`,
        },
      ],
      img: `https://i.ibb.co/8X0v1hj/project3.jpg`,
    },
    {
      projectName: 'Thermoparts House',
      desc: 'This website is made for, the customer can order all kinds of parts which is related to Air Conditions(AC). There are two-part to this website one is the normal user can order products and another one is admin. Admin can add new parts, order shipped, and delete products.',
      technologies:
        'ReactJs, NodeJs, MongoDB, TailwindCSS,  React query, Firebase Authentication',
      Links: [
        {
          frontend: `https://github.com/irazramin/Thermoparts-house`,
          backend: `https://github.com/irazramin/Thermoparts-house-backend`,
          live: `https://ac-manufacture.web.app/`,
        },
      ],
      img: `https://i.ibb.co/T2HDbD7/project1.jpg`,
    },
    {
      projectName: 'Thermoparts House',
      desc: 'This website is made for, the customer can order all kinds of parts which is related to Air Conditions(AC). There are two-part to this website one is the normal user can order products and another one is admin. Admin can add new parts, order shipped, and delete products.',
      technologies:
        'ReactJs, NodeJs, MongoDB, TailwindCSS,  React query, Firebase Authentication',
      Links: [
        {
          frontend: `https://github.com/irazramin/Thermoparts-house`,
          backend: `https://github.com/irazramin/Thermoparts-house-backend`,
          live: `https://ac-manufacture.web.app/`,
        },
      ],
      img: `https://i.ibb.co/T2HDbD7/project1.jpg`,
    },
  ];
  return (
    <div className='w-[80%] mx-auto my-20' id='project'>
      <h2 className='text-center text-2xl font-bold my-5'>
        My <span className='text-rose-500'>Project</span> 
      </h2>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
        {projects.map((project) => {
          return (
            <div class='flex justify-center'>
              <div
                class={`${
                  modeOn === 'true' ? 'bg-[rgba(0,0,0,0.3)]' : 'bg-stone-50'
                } 'rounded-lg shadow-lg bg-white max-w-xs '`}
              >
                <a
                  href='#!'
                  data-mdb-ripple='true'
                  data-mdb-ripple-color='light'
                >
                  <img
                    class='rounded-t-lg h-[200px] object-cover'
                    src={project.img}
                    alt=''
                  />
                </a>
                <div class='p-6'>
                  <h5 class='text-xl font-semibold mb-2'>
                    {project.projectName}
                  </h5>
                  <p class='text-sm mb-4'>
                    {project.desc.length > 80
                      ? project.desc.slice(0, 80)
                      : project.desc}
                  </p>
                  {/* <p className='text-sm'><span className='text-rose-500 font-semibold'>Technologies: </span> {project.technologies}</p> */}
                  <div className='mt-5'>
                    <button
                      type='button'
                      class='inline-block m-2 px-2 py-1 border-2 border-rose-600 text-rose-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
                    >
                      <a
                        href={project.Links[0].frontend}
                        target='_blank'
                        rel='noreferrer'
                      >
                        {project.Links[0].backend ? 'Frontend' : 'Github'}
                      </a>
                    </button>
                    {project?.Links[0].backend && (
                      <button
                        type='button'
                        class='inline-block m-2 px-2 py-1 border-2 border-rose-600 text-rose-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
                      >
                        <a
                          href={project.Links[0].backend}
                          target='_blank'
                          rel='noreferrer'
                        >
                          Backend
                        </a>
                      </button>
                    )}
                    <button
                      type='button'
                      class='inline-block m-2 px-2 py-1 border-2 border-rose-600 text-rose-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
                    >
                      <a
                        href={project.Links[0].live}
                        target='_blank'
                        rel='noreferrer'
                      >
                        live
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
