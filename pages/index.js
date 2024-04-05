import Head from 'next/head';
import ToggleButton from '../components/ToggleButton.jsx';
import { FaXTwitter } from 'react-icons/fa6';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from 'next/image';
import profileimg from '../public/Design sans titre.png';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import projet1 from '../public/projet1.png';
import projet3 from '../public/projet3.png';
import projet4 from '../public/projet4.png';
import projet5 from '../public/projet5.png';
import projet6 from '../public/projet6.png';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nesrine Hadboun Portfolio</title>
        <meta
          name='description'
          content='Generated by create next app'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='px-10 md:px-20 lg:px-20'>
        <section className=' mb-10'>
          <nav className='py-10 mb-6 flex justify-between'>
            <ToggleButton />
            <ul className=' flex items-center'>
              <li>
                <a
                  target='_blank'
                  rel='noreferrer'
                  className='bg-[#a39171] text-white px-4 py-2 rounded ml-8'
                  href='https://drive.google.com/file/d/12_88leRtKCyY_BbKIIAogkgh8mkKL1Gl/view'
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className='flex items-center justify-center bg-[#f5ebe0] p-6 rounded-md text-gray-800 '>
            <div>
              <div className='text-center p-10 py-10 '>
                <h2 className=' text-5xl py-2 text-[#b08968] font-medium md:text-6xl'>
                  Nesrine Hadboun
                </h2>
                <h3 className='text-2xl py-2 md:text-3xl'>
                  Frontend Developer .
                </h3>
                <p className='text-md py-5 leading-8  md:text-xl max-w-lg mx-auto'>
                  Hello! I am from France and I have lived in Sweden
                  since 2022 with my family. Previously, I have done
                  various jobs such as perfumery saleswoman, spa
                  manager or tramway driver! With my previous
                  background, I have decided to transition into
                  frontend development and I am excited to show my
                  creativity through my work.
                </p>
                <p>
                  If you would love to work with me, please{' '}
                  <a
                    href='mailto:nesrine.hadboun@live.fr'
                    className='bg-[#a39171] text-white px-4 py-2 rounded ml-8'
                  >
                    Get in touch
                  </a>
                </p>
              </div>
              <div className='text-5xl flex justify-center gap-16 py-3 text-ecru'>
                <a href='https://twitter.com/Codes_ness'>
                  <FaXTwitter />
                </a>
                <a href='https://www.linkedin.com/in/nesrine-hadboun-84b7054b/'>
                  <AiFillLinkedin />
                </a>
                <a href='https://github.com/Nesrinemh'>
                  <AiFillGithub />
                </a>
              </div>
            </div>
            <div className='relative mx-auto bg-gradient-to-b from-ecru rounded-full w-80 h-80 mt-20 overflow-hidden mb-10 sm:h-20 sm:w-20 md:h-44 md:w-44 lg:h-80 lg:w-80 xl:h-96 xl:w-96'>
              <Image src={profileimg} fill alt='profil' />
            </div>
          </div>
        </section>
        <section>
          <div className='p-4 rounded-md'>
            <h3 className='text-3xl font-bold py-3 uppercase tracking-wide'>
              skills
            </h3>
            <p className='text-lg leading-8 text-gray-80'>
              Below, you will see some of my skills learned and used
              in my last training at the{' '}
              <span className='text-[#7f5539] '>
                Scrimba Bootcamp{' '}
              </span>{' '}
              (got the certification in 2023) as well as other skills
              where I am currently training at{' '}
              <span className='text-[#7f5539] '>
                Hyper Island School
              </span>
              .
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center bg-[#f5ebe0] shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <div className='flex justify-center '>
                <Image
                  alt='img'
                  src={design}
                  width={100}
                  height={100}
                />
              </div>
              <h3 className='text-lg font-medium pt-8 pb-2  text-gray-800'>
                Beautiful Designs
              </h3>
              <p className='py-2 text-gray-800'>
                Creating elegant designs suited for your needs design
                theory.
              </p>
              <h4 className='py-4 text-[#a39171] uppercase font-bold '>
                Design tools I use
              </h4>
              <p className='text-gray-800 py-1'>CSS</p>
              <p className='text-gray-800 py-1'>Tailwind</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>
            <div className='text-center bg-[#f5ebe0] shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <div className='flex justify-center'>
                <Image
                  src={code}
                  width={100}
                  height={100}
                  alt='img'
                />
              </div>
              <h3 className='text-lg font-medium pt-8 pb-2 text-gray-800'>
                Technologies
              </h3>
              <p className='py-2 text-gray-800'>
                Using latest technologies to create
              </p>
              <h4 className='py-4 text-[#a39171] uppercase font-bold'>
                Techno I use
              </h4>
              <p className='text-gray-800 py-1'>HTML / CSS</p>
              <p className='text-gray-800 py-1'>Javascript</p>
              <p className='text-gray-800 py-1'>React</p>
            </div>
            <div className='text-center bg-[#f5ebe0]    shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <div className='flex justify-center'>
                <Image
                  src={consulting}
                  width={100}
                  height={100}
                  alt='img'
                  priority
                />
              </div>
              <h3 className='text-gray-800 text-lg font-medium pt-8 pb-2'>
                Dev environment
              </h3>
              <p className='py-2 text-gray-800'>
                Tools that allow me to optimize my work and
                collaborate.
              </p>
              <h4 className='py-4  text-[#a39171] uppercase font-bold'>
                Daily tools
              </h4>
              <p className='text-gray-800 py-1'>Git / Github</p>
              <p className='text-gray-800 py-1'>Vercel / Netlify</p>
              <p className='text-gray-800 py-1'>VS Code</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-4 mb-8 uppercase font-bold tracking-wide'>
              Some projects I’ve Built
            </h3>
          </div>
          <div className='flex flex-col  gap-10 lg:flex-row lg:flex-wrap bg-[#f5ebe0] p-10 mb-10 rounded-md'>
            <div className='basis-1/3  flex-1'>
              <p className='uppercase font-bold mb-2 text-gray-800'>
                Todo List
              </p>
              <Image
                src={projet1}
                className='rounded-lg object-cover '
                width={'100%'}
                height={'100%'}
                alt={projet1}
              />
              <p className='p-4 text-gray-800'>
                {' '}
                Fullstack Todo List App Using React, Express.js,
                PostgreSQL.{' '}
              </p>
              <div className='flex justify-between p-8'>
                <div className='flex items-center'>
                  <p className='bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded  dark:text-red-600 border border-red-400'>
                    React
                  </p>
                  <p className='bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded  dark:text-red-600 border border-red-400'>
                    Express.js
                  </p>
                  <p className='bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded  dark:text-red-600 border border-red-400'>
                    PostgreSQL
                  </p>
                </div>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://todolist-fullstack-asng.vercel.app/'
                  className='bg-[#a39171] hover:bg-[#090806] text-white font-semibold px-4 py-2 rounded-md cursor-pointer'
                >
                  View
                </a>
              </div>
            </div>
            <div className='basis-1/3 flex-1'>
              <p className='uppercase font-bold mb-2 text-gray-800'>
                tic tac toe
              </p>
              <Image
                src={projet3}
                alt={projet3}
                className='rounded-lg   object-cover '
                width={'100%'}
                height={'100%'}
              />
              <p className='p-4 text-gray-800'>
                React documentation tutoriel. Fundamental to building
                any React app, deep understanding of React:
                components, hooks, props...
              </p>
              <div className='flex justify-between p-8'>
                <div className='flex items-center'>
                  <p className='bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded  dark:text-red-600 border border-red-400'>
                    React
                  </p>
                </div>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://remarkable-dolphin-1f4414.netlify.app/'
                  className='bg-[#a39171] hover:bg-[#090806] text-white font-semibold px-4 py-2 rounded-md cursor-pointer'
                >
                  View
                </a>
              </div>
            </div>
            <div className='basis-1/3 flex-1'>
              <p className='uppercase font-bold mb-2 text-gray-800'>
                countries quiz
              </p>
              <Image
                src={projet4}
                alt={projet4}
                className='rounded-lg   object-cover '
                width={'100%'}
                height={'100%'}
              />
              <p className='p-4 text-gray-800'>
                Group Project (3 students) during Javascript module.
                We had 3 weeks to build a game using javascipt
                fundamentals.
              </p>
              <div className='flex justify-between p-8'>
                <div className='flex items-center'>
                  <p className='bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded  dark:text-red-600 border border-red-400'>
                    Rest Countries API
                  </p>
                  <p className='bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:text-red-600 border border-red-400'>
                    Javascript
                  </p>
                </div>

                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://dynamic-kitten-a71626.netlify.app/'
                  className='bg-[#a39171] hover:bg-[#090806] text-white font-semibold px-4 py-2 rounded-md cursor-pointer'
                >
                  View
                </a>
              </div>
            </div>
            <div className='basis-1/3 flex-1'>
              <p className='uppercase font-bold mb-2 text-gray-800'>
                hinder
              </p>
              <Image
                src={projet5}
                alt={projet5}
                className='rounded-lg   object-cover '
                width={'100%'}
                height={'100%'}
              />
              <p className='p-4 text-gray-800'>
                Group Project (4 students) during React module. We had
                2.5 weeks to build an app using React fundamentals. I
                worked on Login/Logout pages & Matches page.
              </p>
              <div className='flex justify-between p-8'>
                <div className='flex items-center'>
                  <p className='bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded  dark:text-red-600 border border-red-400'>
                    React
                  </p>
                  <p className='bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:text-red-600 border border-red-400'>
                    Tailwind
                  </p>
                  <p className='bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:text-red-600 border border-red-400'>
                    API
                  </p>
                </div>

                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://hinder-hyperisland.netlify.app/'
                  className='bg-[#a39171] hover:bg-[#090806] text-white font-semibold px-4 py-2 rounded-md cursor-pointer'
                >
                  View
                </a>
              </div>
            </div>
            <div className='basis-1/3 flex-1'>
              <p className='uppercase font-bold mb-2 text-gray-800'>
                pet finder
              </p>
              <Image
                src={projet6}
                alt={projet6}
                className='rounded-lg   object-cover '
                width={'100%'}
                height={'100%'}
              />
              <p className='p-4 text-gray-800'>
                Group Project (4 students) during SEO & accessibility
                module. We had 2.5 weeks to build an app optimized
                using SEO tools. I worked on the Header which included
                the navbar and the hero.
              </p>
              <div className='flex justify-between p-8'>
                <div className='flex items-center'>
                  <p className='bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded  dark:text-red-600 border border-red-400'>
                    React
                  </p>
                  <p className='bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:text-red-600 border border-red-400'>
                    Tailwind
                  </p>
                </div>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://hyper-island-petfinder.vercel.app/'
                  className='bg-[#a39171] hover:bg-[#090806] text-white font-semibold px-4 py-2 rounded-md cursor-pointer'
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
