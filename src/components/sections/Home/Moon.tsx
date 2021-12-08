/* eslint-disable @next/next/no-img-element */
// import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const Moon = () => {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const parallax = (e: MouseEvent) => {
    const x = (window.innerWidth - e.pageX * 1) / 100;
    const y = (window.innerHeight - e.pageY * 1) / 100;

    setOffsetX(x);
    setOffsetY(y);
  };

  useEffect(() => {
    window.addEventListener('mousemove', parallax);
  }, []);

  return (
    <div className='flex overflow-hidden absolute w-full h-screen lg:justify-end lg:items-center'>
      <motion.div
        variants={variants}
        initial='hidden'
        whileInView='show'
        className='flex relative justify-center items-center w-full h-1/2 lg:w-1/2 lg:h-screen'
        style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
      >
        <motion.div
          variants={animation}
          className='image-container mt-10 w-full h-full'
        >
          {/* <Image
            src='/images/Moon.webp'
            alt=''
            priority
            layout='fill'
            className='image'
          /> */}
          <img src='/images/Moon.webp' alt='' className='w-full' />
        </motion.div>
        <div className='grid absolute top-0 grid-cols-2 mt-10 w-full h-full'>
          <motion.div variants={animation} className='relative w-full h-full'>
            <div className='absolute w-full h-full'>
              <div
                className='image-container top-[4rem] w-full h-full lg:left-[-5rem] lg:top-[5rem]'
                style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
              >
                {/* <Image
                  src='/images/Cloud1.webp'
                  alt=''
                  priority
                  layout='fill'
                  className='image'
                /> */}
                <img src='/images/Cloud1.webp' alt='' />
              </div>
            </div>
          </motion.div>
          <motion.div variants={animation} className='relative w-full h-full'>
            <div
              style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
              className='absolute w-full h-full'
            >
              <div className='image-container overflow-hidden w-full h-full lg:top-[0] lg:right-0'>
                {/* <Image
                  src='/images/Cloud2.webp'
                  alt=''
                  priority
                  layout='fill'
                  className='image'
                /> */}
                <img src='/images/Cloud2.webp' alt='' />
              </div>
            </div>
          </motion.div>
          <motion.div variants={animation} className='relative w-full h-full'>
            <div
              style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
              className='absolute w-full h-full lg:right-[0] lg:top-[3rem]'
            >
              <div className='image-container top-[2rem] w-full h-full lg:top-0'>
                {/* <Image
                  src='/images/Cloud4.webp'
                  alt=''
                  priority
                  layout='fill'
                  className='image'
                /> */}
                <img src='/images/Cloud4.webp' alt='' />
              </div>
            </div>
          </motion.div>
          <motion.div variants={animation} className='relative w-full h-full'>
            <div
              style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
              className='absolute w-full h-full'
            >
              <div className='image-container right-[-2rem] w-full h-full lg:top-[-4rem] lg:right-0'>
                {/* <Image
                  src='/images/Cloud3.webp'
                  alt=''
                  priority
                  layout='fill'
                  className='image'
                /> */}
                <img src='/images/Cloud3.webp' alt='' />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const variants = {
  hidden: {
    opacity: 0.5,
  },
  show: {
    opacity: 1,
  },
};

const animation = {
  hidden: {
    x: '100vw',
  },
  show: {
    x: 0,
    transition: {
      duration: 1.1,
      ease: 'anticipate',
    },
  },
};
