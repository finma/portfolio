/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
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
      <div
        className='flex relative justify-center items-center w-full h-1/2 lg:w-1/2 lg:h-screen'
        style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
      >
        <div
          data-aos='fade-left'
          data-aos-easing='anticipate'
          data-aos-duration='1000'
          className='image-container mt-10 w-full h-full'
        >
          <Image
            src='/images/Moon.webp'
            alt=''
            priority
            layout='fill'
            className='image'
          />
        </div>
        <div className='grid absolute top-0 grid-cols-2 mt-10 w-full h-full'>
          <div
            data-aos='fade-left'
            data-aos-easing='anticipate'
            data-aos-duration='1000'
            data-aos-delay='150'
            className='relative w-full h-full'
          >
            <div className='absolute w-full h-full'>
              <div
                className='image-container top-[4rem] w-full h-full lg:left-[-5rem] lg:top-[2rem]'
                style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
              >
                <Image
                  src='/images/Cloud1.webp'
                  alt=''
                  priority
                  layout='fill'
                  className='image'
                />
              </div>
            </div>
          </div>
          <div
            data-aos='fade-left'
            data-aos-easing='anticipate'
            data-aos-duration='1000'
            data-aos-delay='300'
            className='overflow-hidden relative w-full h-full'
          >
            <div
              style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
              className='absolute w-full h-full'
            >
              <div className='image-container w-full h-full lg:top-[-4rem] lg:right-0'>
                <Image
                  src='/images/Cloud2.webp'
                  alt=''
                  priority
                  layout='fill'
                  className='image'
                />
              </div>
            </div>
          </div>
          <div
            data-aos='fade-left'
            data-aos-easing='anticipate'
            data-aos-duration='1000'
            data-aos-delay='450'
            className='relative w-full h-full'
          >
            <div
              style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
              className='absolute w-full h-full lg:right-[0] lg:top-[3rem]'
            >
              <div className='image-container top-[2rem] w-full h-full lg:top-0'>
                <Image
                  src='/images/Cloud4.webp'
                  alt=''
                  priority
                  layout='fill'
                  className='image'
                />
              </div>
            </div>
          </div>
          <div
            data-aos='fade-left'
            data-aos-easing='anticipate'
            data-aos-duration='1000'
            data-aos-delay='600'
            className='overflow-hidden relative w-full h-full'
          >
            <div
              style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
              className='absolute w-full h-full'
            >
              <div className='image-container right-[-2rem] w-full h-full lg:top-[-4rem] lg:right-0'>
                <Image
                  src='/images/Cloud3.webp'
                  alt=''
                  priority
                  layout='fill'
                  className='image'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
