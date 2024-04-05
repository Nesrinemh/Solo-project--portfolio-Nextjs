import React from 'react';

function Skills({ title, tool1, tool2, tool3, svg }) {
  return (
    <div class='col-span-4 sm:col-span-2 lg:col-span-1 relative px-5 pt-10 pb-2 flex flex-col justify-start items-center border-2 border-ecru rounded-xl text-gray-900'>
      {svg}
      <h2 class='my-1 gradient-red text-base uppercase tracking-wide'>
        {title}
      </h2>
      <ul class='py-2 text-center text-sm'>
        <li className='p-2'>{tool1}</li>
        <li className='p-2'>{tool2}</li>
        <li className='p-2'>{tool3}</li>
      </ul>
    </div>
  );
}

export default Skills;
