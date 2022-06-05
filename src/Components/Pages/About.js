import React from 'react';
import myPic from '../../assets/my_pic.jpg';
const About = () => {
  return (
    <div className='w-[80%] mx-auto'>
      <h2 className='text-center text-2xl font-bold'>
        <span className='text-rose-500'>About</span> me
      </h2>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-1 mt-10'>
        <div className=''>
          <img
            src={myPic}
            class='max-w-sm object-cover h-[330px]  mx-auto m-0  rounded-lg shadow-2xl'
            alt=''
          />
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            temporibus facilis perferendis, eum sunt accusamus necessitatibus?
            Temporibus architecto porro perferendis blanditiis nulla fugiat esse
            odio! Inventore non, iste perferendis veniam quis assumenda dolorem
            ad corporis voluptatibus minus vero accusamus, corrupti veritatis
            saepe consequuntur a illo officiis reiciendis aut. Libero,
            asperiores!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
