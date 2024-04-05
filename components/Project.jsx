import React from 'react';
import Image from 'next/image';

function Project({ name, project, link, description, techno }) {
  return (
    <div className='basis-1/3  flex-1'>
      <p className='uppercase font-bold mb-2 text-gray-800'>{name}</p>
      <Image
        src={project}
        className='rounded-lg object-cover '
        width={'100%'}
        height={'100%'}
        alt={project}
      />
      <p className='p-4 text-gray-800'>{description}</p>
      <div className='flex justify-between p-8'>
        <div className='flex items-center'>
          {techno?.map((tech, index) => (
            <p
              key={index}
              className='bg-ecru text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded  dark:text-red-600 border-2 border-ecru'
            >
              {tech}
            </p>
          ))}
        </div>
        <a
          target='_blank'
          rel='noreferrer'
          href={link}
          className='bg-[#a39171] hover:bg-[#090806] text-white font-semibold px-4 py-2 rounded-md cursor-pointer'
        >
          View
        </a>
      </div>
    </div>
  );
}

export default Project;
