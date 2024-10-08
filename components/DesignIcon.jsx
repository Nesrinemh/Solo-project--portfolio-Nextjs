import React from 'react';

function DesignIcon() {
  return (
    <span class='absolute -top-6 p-3 border-2 border-ecru rounded-full bg-ecru'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        aria-hidden='true'
        class='w-7 h-7 text-yellow-640'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
        ></path>
      </svg>
    </span>
  );
}

export default DesignIcon;
