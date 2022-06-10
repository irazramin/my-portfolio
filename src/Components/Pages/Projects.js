import { useEffect, useState } from 'react';
const Projects = () => {
  const modeOn = localStorage.getItem('modeOn');
  const [projects, setProjects] = useState([]);
  const [projectDetails, setProjectDetails] = useState({});

  useEffect(() => {
    fetch('projects.json')
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const handleProjectDetails = (id) => {
    console.log(id);
    const projectsDetails = projects.find((project) => project.id === id);
    setProjectDetails(projectsDetails);
  };
  console.log(projectDetails.Links);
  return (
    <div className='w-[80%] mx-auto my-20' id='project'>
      <h2 className='text-center text-2xl font-bold my-5'>
        My <span className='text-rose-500'>Project</span>
      </h2>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
        {projects?.map((project) => {
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
                    src={project.img[0]}
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
                    <button
                      type='button'
                      class='inline-block m-2 px-2 py-1 border-2 border-rose-600 text-rose-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
                      data-bs-toggle='modal'
                      data-bs-target='#exampleModalLg'
                      onClick={() => handleProjectDetails(project?.id)}
                    >
                      More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div
        class='modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto'
        id='exampleModalLg'
        tabindex='-1'
        aria-labelledby='exampleModalLgLabel'
        aria-modal='true'
        role='dialog'
      >
        <div class='modal-dialog modal-lg relative w-auto pointer-events-none'>
          <div class='modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-clip-padding rounded-md outline-none text-current'>
            <div
              class={`${
                modeOn === 'true'
                  ? 'bg-slate-900 text-white'
                  : 'bg-white text-slate-900'
              } modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md`}
            >
              <h5
                class='text-xl font-medium leading-normal '
                id='exampleModalLgLabel'
              >
                {projectDetails.projectName} Details
              </h5>
              <button
                type='button'
                class='btn-close box-content w-4 h-4 p-1  border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100  hover:opacity-75 hover:no-underline'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div
              class={`${
                modeOn === 'true'
                  ? 'bg-slate-900 text-white'
                  : 'bg-white text-slate-900'
              }  modal-body relative p-4`}
            >
              <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                {projectDetails?.img?.map((img) => (
                  <img src={img} alt='' />
                ))}
              </div>
              <p className='mt-5'>{projectDetails.desc}</p>
              <p className='mt-10'>
                <span className='text-rose-500'> Technology used :</span>{' '}
                <small>{projectDetails.technologies}</small>
              </p>

              {projectDetails.Links && <div className='mt-5'>
                <button
                  type='button'
                  class='inline-block m-2 px-2 py-1 border-2 border-rose-600 text-rose-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
                >
                  <a
                    href={projectDetails.Links[0].frontend}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {projectDetails.Links[0].backend ? 'Frontend' : 'Github'}
                  </a>
                </button>
                {projectDetails.Links[0].backend && (
                  <button
                    type='button'
                    class='inline-block m-2 px-2 py-1 border-2 border-rose-600 text-rose-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
                  >
                    <a
                      href={projectDetails.Links[0].backend}
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
                    href={projectDetails.Links[0].live}
                    target='_blank'
                    rel='noreferrer'
                  >
                    live
                  </a>
                </button>
              </div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
