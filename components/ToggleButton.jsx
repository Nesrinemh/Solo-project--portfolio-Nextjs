'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import { MdOutlineLightMode } from 'react-icons/md';
import { MdDarkMode } from 'react-icons/md';

const Button = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <button
      onClick={() =>
        theme == 'dark' ? setTheme('light') : setTheme('dark')
      }
      className='bg-[#F87667] text-white px-4 py-2 rounded ml-8'
    >
      {theme === 'dark' ? <MdOutlineLightMode /> : <MdDarkMode />}
    </button>
  );
};

export default Button;
