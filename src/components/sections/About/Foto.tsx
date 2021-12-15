/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';

export const Foto = () => {
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
    <div
      data-aos='fade-left'
      data-aos-easing='easeInOutCubic'
      data-aos-duration='1000'
      className='flex justify-center items-start pt-20 w-full h-full font-medium text-white lg:justify-end lg:items-center lg:pr-20 lg:mt-0'
    >
      <div
        style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
        className='h-[300px] image-container w-[300px] shadow-xl md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px]'
      >
        <img
          src='/images/profile.webp'
          alt=''
          className='w-full h-full rounded-md'
        />
      </div>
    </div>
  );
};
