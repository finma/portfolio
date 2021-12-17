/* eslint-disable @next/next/no-img-element */
// import { About } from '../About/About';
import Image from 'next/image';

import ArrowLink from '@/components/links/ArrowLink';

export const AboutDetail = () => {
  return (
    <div className='container relative m-auto w-full h-full'>
      <div className='sticky top-20'>
        <ArrowLink direction='left' className='text-white' href='/'>
          Back to Home
        </ArrowLink>
      </div>

      <section className='flex flex-col-reverse flex-wrap justify-around w-full h-screen'>
        <div className='flex justify-center items-start px-6 w-full h-1/3 lg:justify-start lg:items-center lg:px-0 lg:w-1/2 lg:h-full'>
          <div className='flex flex-col space-y-4 w-full lg:space-y-8'>
            <div className='space-y-1 w-full lg:space-y-5'>
              <h1 className='text-2xl font-semibold tracking-wider text-white md:text-4xl lg:text-8xl'>
                About Me
              </h1>
            </div>
            <div className='space-y-2 w-full md:space-y-4'>
              <div className='bg-red-custom w-[60px] h-1 rounded-r-full rounded-l-full md:h-[5px] md:w-[88px]'></div>
              <div className='bg-red-custom ml-[30px] w-[60px] h-1 rounded-r-full rounded-l-full md:h-[5px] md:ml-[44px] md:w-[88px]'></div>
            </div>
            <div className='w-full'>
              <h2 className='text-sm font-medium tracking-wider text-white md:text-2xl md:leading-relaxed'>
                I love Coding, Technology, <br /> and Learn New Things.
              </h2>
            </div>
            <div className='w-full'></div>
          </div>
        </div>
        <div className='flex justify-center items-center w-full h-2/3 lg:w-1/2 lg:h-full'>
          <div className='image-container flex justify-center items-center p-6 w-full h-full md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px] lg:p-0'>
            <img
              src='/images/profile.webp'
              alt=''
              className='image w-full h-full rounded-md shadow-xl'
            />
          </div>
        </div>
      </section>

      <div className='mt-32 w-full'>
        <section className='flex flex-col mb-32 w-full h-full lg:flex-row'>
          <div className='px-10 mb-16 w-full h-full lg:px-0 lg:mb-0 lg:w-1/2'>
            <h3 className='tracking-[0.15em] text-2xl font-normal text-white uppercase lg:text-4xl'>
              <span className='text-red-custom font-semibold'>01</span> Who I Am
            </h3>
          </div>
          <div className='px-10 w-full h-full lg:px-12 lg:w-1/2'>
            <p className='leading-[1.4rem] text-sm font-light tracking-wider text-white lg:leading-[2rem] lg:text-base lg:text-justify'>
              Hello, my name is Firman Maulana. I am 19 years old and live in
              Indonesia. I am currently studying as a student at the Faculty of
              Engineering, majoring in Information Technology at the Siliwangi
              University.
            </p>
          </div>
        </section>
        <section className='flex flex-col mb-32 w-full h-full'>
          <div className='px-10 mb-16 w-full h-full lg:px-0 lg:mb-0 lg:w-1/2'>
            <h3 className='tracking-[0.15em] text-2xl font-normal text-white uppercase lg:text-4xl'>
              <span className='text-red-custom font-semibold'>02</span> Passion
            </h3>
          </div>
          <div className='flex flex-col justify-evenly mt-20 w-full h-full lg:flex-row'>
            <div className='w-[300px]'>
              <div className='h-[120px] image-container w-full'>
                <Image
                  src='/icons/coding.png'
                  alt=''
                  layout='fill'
                  className='image'
                />
              </div>
              <div className='mt-4 space-y-2 w-full'>
                <h3 className='text-red-custom tracking-[0.5rem] font-semibold text-center uppercase'>
                  Coding
                </h3>
                <p className='leading-[1.4rem] text-sm font-light tracking-wider text-center text-white lg:leading-[2rem] lg:text-base'>
                  I started like coding since I was in college. From there I
                  learned programming languages and structural algorithms. I had
                  a hard time at first, but when I tried again and again I ended
                  up liking it
                </p>
              </div>
            </div>
            <div className='w-[300px]'>
              <div className='h-[120px] image-container w-full'>
                <Image
                  src='/icons/cpu.png'
                  alt=''
                  layout='fill'
                  className='image'
                />
              </div>
              <div className='mt-4 space-y-2 w-full'>
                <h3 className='text-red-custom tracking-[0.5rem] font-semibold text-center uppercase'>
                  TECHNOLOGY
                </h3>
                <p className='leading-[1.4rem] text-sm font-light tracking-wider text-center text-white lg:leading-[2rem] lg:text-base'>
                  Technology is the sum of every technique, skill, method, and
                  process used in the production of goods or services. Over
                  time, technology is developing. I&lsquo;m very interested in
                  technology, I can&lsquo;t wait to see what technology will
                  look like in the future
                </p>
              </div>
            </div>
            <div className='w-[300px]'>
              <div className='h-[120px] image-container w-full'>
                <Image
                  src='/icons/learning.png'
                  alt=''
                  layout='fill'
                  className='image'
                />
              </div>
              <div className='mt-4 space-y-2 w-full'>
                <h3 className='text-red-custom tracking-[0.5rem] font-semibold text-center uppercase'>
                  Learn New Things
                </h3>
                <p className='leading-[1.4rem] text-sm font-light tracking-wider text-center text-white lg:leading-[2rem] lg:text-base'>
                  “The more that you read, the more things you will know. The
                  more that you learn, the more places you&lsquo;ll go.” <br />{' '}
                  - Dr. Seuss
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
