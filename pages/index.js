import Head from 'next/head';
import ToggleButton from '../components/ToggleButton.jsx';
import { FaXTwitter } from 'react-icons/fa6';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from 'next/image';
import profileimg from '../public/Design sans titre.png';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import projet2 from '../public/projet2.png';
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

      <main className='  px-10  md:px-20 lg:px-40'>
        <section className=' min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <ToggleButton />
            <ul className=' flex items-center'>
              <li>
                <a
                  target='_blank'
                  rel='noreferrer'
                  className='bg-gradient-to-r from-asparagus to-shamrock text-white px-4 py-2 rounded ml-8'
                  href='https://drive.google.com/file/d/1SE1M1ssHfj4W-vv0j4Gzmrs1O3MLKCEm/view'
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10 py-10'>
            <h2 className=' text-5xl py-2 text-[#b08968] font-medium md:text-6xl'>
              Nesrine Hadboun
            </h2>
            <h3 className='text-2xl py-2 md:text-3xl'>
              Frontend Developer .
            </h3>
            <p className='text-md py-5 leading-8  md:text-xl max-w-lg mx-auto'>
              Hello! Im a web developer focused on building beautiful
              interfaces & experiences. Previously, I have done
              various jobs such as perfumery saleswoman, esthetician
              or tramway driver! All this professional experiences
              allowed me to forge myself and to find today a job that
              really motivates me!
            </p>
            <p>Get in touch 👉🏼 Nesrine.hadboun@live.fr</p>
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
          <div className='relative mx-auto bg-gradient-to-b from-ecru rounded-full w-80 h-80 mt-20 overflow-hidden  md:h-96 md:w-96'>
            <Image src={profileimg} fill alt='profil' />
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-3'>Skills</h3>
            <p className='text-md leading-8 text-gray-80'>
              Here are in a few words the skills I acquired during my
              last training with{' '}
              <span className='text-shamrock '>
                Scrimba Bootcamp{' '}
              </span>{' '}
              (got the certification in 2023) as well as other skills
              where I am currently training at{' '}
              <span className='text-shamrock '>
                Hyper Island School
              </span>
              .
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center    shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <div className='flex justify-center'>
                <Image
                  alt='img'
                  src={design}
                  width={100}
                  height={100}
                />
              </div>
              <h3 className='text-lg font-medium pt-8 pb-2 text-gray-800'>
                Beautiful Designs
              </h3>
              <p className='py-2 text-gray-800'>
                Creating elegant designs suited for your needs design
                theory.
              </p>
              <h4 className='py-4 text-shamrock'>
                Design tools I use
              </h4>
              <p className='text-gray-800 py-1'>CSS</p>
              <p className='text-gray-800 py-1'>Tailwind</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>
            <div className='text-center    shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
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
              <h4 className='py-4  text-shamrock'>Techno I use</h4>
              <p className='text-gray-800 py-1'>Javascript</p>
              <p className='text-gray-800 py-1'>React</p>
              <p className='text-gray-800 py-1'>Next.js</p>
            </div>
            <div className='text-center    shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
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
              <h4 className='py-4  text-shamrock'>Daily tools</h4>
              <p className='text-gray-800 py-1'>Github</p>
              <p className='text-gray-800 py-1'>Vercel</p>
              <p className='text-gray-800 py-1'>VS Code</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-4 mb-8'>
              Some Things I’ve Built
            </h3>
          </div>
          <div className='flex flex-col  gap-10 lg:flex-row lg:flex-wrap '>
            <div className='basis-1/3  flex-1'>
              <Image
                src={projet2}
                className='rounded-lg object-cover '
                width={'100%'}
                height={'100%'}
                alt={projet2}
              />
              <p> Description of the project </p>
              <div className='flex justify-between p-8'>
                <div className='flex'>
                  <p className='bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded  dark:text-red-600 border border-red-400'>
                    React
                  </p>
                </div>

                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://tasktracker-iota.vercel.app/'
                  className='bg-shamrock hover:bg-red-500 text-white font-semibold px-4 rounded-full cursor-pointer'
                >
                  View
                </a>
              </div>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                src={projet3}
                alt={projet3}
                className='rounded-lg   object-cover '
                width={'100%'}
                height={'100%'}
              />
              <p> Description of the project </p>
              <div className='flex justify-between p-8'>
                <div className='flex'>
                  <p className='bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded  dark:text-red-600 border border-red-400'>
                    React
                  </p>
                </div>

                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://remarkable-dolphin-1f4414.netlify.app/'
                  className='bg-shamrock hover:bg-red-500 text-white font-semibold px-4 rounded-full cursor-pointer'
                >
                  View
                </a>
              </div>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                src={projet4}
                alt={projet4}
                className='rounded-lg   object-cover '
                width={'100%'}
                height={'100%'}
              />
              <p> Description of the project </p>
              <div className='flex justify-between p-8'>
                <div className='flex'>
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
                  className='bg-shamrock hover:bg-red-500 text-white font-semibold px-4 rounded-full cursor-pointer'
                >
                  View
                </a>
              </div>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                src={projet5}
                alt={projet5}
                className='rounded-lg   object-cover '
                width={'100%'}
                height={'100%'}
              />
              <p> Description of the project </p>
              <div className='flex justify-between p-8'>
                <div className='flex'>
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
                  className='bg-shamrock hover:bg-red-500 text-white font-semibold px-4 rounded-full cursor-pointer'
                >
                  View
                </a>
              </div>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                src={projet6}
                alt={projet6}
                className='rounded-lg   object-cover '
                width={'100%'}
                height={'100%'}
              />
              <p> Description of the project </p>
              <div className='flex justify-between p-8'>
                <div className='flex'>
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
                  href='https://hyper-island-petfinder.vercel.app/'
                  className='bg-shamrock hover:bg-red-500 text-white font-semibold px-4 rounded-full cursor-pointer'
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
