import { Line } from 'rc-progress';
import React, { useState } from 'react';

const Skills = () => {
  const [allSkills,setAllSkills] = useState([])
  const skills = [
    {
      skillName : "React.Js",
      percentage:70,
      type:"ftd"
    },
    {
      skillName : "Node.Js",
      percentage:40,
      type:"bkd"

    },
    {
      skillName : "Express.Js",
      percentage:40,
      type:"bkd"
    },
    {
      skillName : "Javascript",
      percentage:80,
      type:"pro"
    },
    {
      skillName : "Html",
      percentage:90,
      type:"ftd"

    },
    {
      skillName : "Css",
      percentage:70,
      type:"ftd"

    },
    {
      skillName : "Github",
      percentage:60,
      type:"tools"

    },
    {
      skillName : "TailwindCSS",
      percentage:90,
      type:"ftd"
    },
  ]
  return (
    <div className='w-[80%] mx-auto my-28'>
      <h2 className='text-2xl font-bold uppercase text-center'>
        my <span className='text-rose-500'>Skills</span>
      </h2>
      <div className='mt-5'>
        <button
          onClick={() => {
            setAllSkills(skills);
          }}
          type='button'
          class='inline-block mx-2 focus:bg-red-500 focus:text-white px-6 py-2 border-2  border-rose-500 text-rose-400 font-medium text-sm leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
        >
          All
        </button>
        <button
          onClick={() => {
            const filterSkill = skills.filter((skill) => skill.type === 'ftd');
            setAllSkills(filterSkill);
          }}
          type='button'
          class='inline-block mx-2 focus:bg-red-500 focus:text-white px-6 py-2 border-2  border-rose-500 text-rose-400 font-medium text-sm leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
        >
          Frontend
        </button>
        <button
          onClick={() => {
            const filterSkill = skills.filter((skill) => skill.type === 'bkd');
            setAllSkills(filterSkill);
          }}
          type='button'
          class='inline-block mx-2 focus:bg-red-500 focus:text-white px-6 py-2 border-2  border-rose-500 text-rose-400 font-medium text-sm leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
        >
          Backend
        </button>
        <button
          onClick={() => {
            const filterSkill = skills.filter((skill) => skill.type === 'pro');
            setAllSkills(filterSkill);
          }}
          type='button'
          class='inline-block mx-2 focus:bg-red-500 focus:text-white px-6 py-2 border-2  border-rose-500 text-rose-400 font-medium text-sm leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
        >
          Programming
        </button>
        <button
          onClick={() => {
            const filterSkill = skills.filter((skill) => skill.type === 'tools');
            setAllSkills(filterSkill);
          }}
          type='button'
          class='inline-block mx-2 focus:bg-red-500 focus:text-white px-6 py-2 border-2  border-rose-500 text-rose-400 font-medium text-sm leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
        >
          Tools
        </button>
      </div>
      <div className='mt-3'>
        <div className='grid grid-cols-1 lg:grid-cols-2  gap-5'>
          {allSkills.map((skill) => {
            return (
              <>
                <div className='bg-zinc-200 h-[80px] relative flex flex-col justify-between rounded-md'>
                  <div className='px-5 pt-5 flex justify-between items-center'>
                    <h2 className='text-base text-slate-800 font-bold'>
                      {skill.skillName}
                    </h2>
                    <p className='text-base text-slate-800 font-bold'>
                      {skill.percentage}%
                    </p>
                  </div>
                  <div className='relative bottom-0 left-0'>
                    <Line
                      percent={skill.percentage}
                      strokeWidth={2.5}
                      strokeColor='rgb(225, 29, 72)'
                    />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills