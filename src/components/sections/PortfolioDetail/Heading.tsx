import Image from 'next/image';
import { useEffect, useState } from 'react';

export const Heading = () => {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const parallax = (e: MouseEvent) => {
    const x = (window.innerWidth - e.pageX * 3) / 100;
    const y = (window.innerHeight - e.pageY * 3) / 100;

    setOffsetX(x);
    setOffsetY(y);
  };

  useEffect(() => {
    window.addEventListener('mousemove', parallax);
  }, []);

  return (
    <section className='flex flex-col-reverse flex-wrap justify-around w-full h-screen'>
      <div className='flex justify-center items-start px-6 w-full h-1/3 lg:justify-start lg:items-center lg:px-0 lg:w-1/2 lg:h-full'>
        <div className='flex flex-col space-y-4 w-full lg:space-y-8'>
          <div
            data-aos='fade-right'
            data-aos-easing='easeInOutCubic'
            data-aos-duration='1000'
            className='space-y-1 w-full lg:space-y-5'
          >
            <h1 className='text-2xl font-semibold tracking-wider text-white md:text-4xl lg:text-8xl'>
              Portfolio
            </h1>
          </div>
          <div
            data-aos='fade-right'
            data-aos-easing='easeInOutCubic'
            data-aos-duration='1000'
            data-aos-delay='150'
            className='space-y-2 w-full md:space-y-4'
          >
            <div className='bg-red-custom w-[60px] h-1 rounded-r-full rounded-l-full md:h-[5px] md:w-[88px]'></div>
            <div className='bg-red-custom ml-[30px] w-[60px] h-1 rounded-r-full rounded-l-full md:h-[5px] md:ml-[44px] md:w-[88px]'></div>
          </div>
          <div
            data-aos='fade-right'
            data-aos-easing='easeInOutCubic'
            data-aos-duration='1000'
            data-aos-delay='300'
            className='w-full'
          >
            <h2 className='text-sm font-medium tracking-wider text-white md:text-lg md:leading-relaxed lg:text-2xl'>
              A small gallery <br /> of recent project.
            </h2>
          </div>
          <div className='w-full'></div>
        </div>
      </div>
      <div className='flex justify-center items-center w-full h-2/3 lg:w-1/2 lg:h-full'>
        <div
          data-aos='fade'
          data-aos-easing='easeInOutCubic'
          data-aos-duration='1000'
          style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
          className='image-container flex justify-center items-center p-6 w-72 h-full md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px] lg:p-0'
        >
          <Image
            src='/icons/ufo.png'
            alt=''
            layout='fill'
            className='image w-full h-full rounded-md shadow-xl'
          />
        </div>
      </div>
    </section>
  );
};
