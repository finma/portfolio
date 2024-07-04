import Image from 'next/image';
import { ReactNode } from 'react';

import { passionItems } from '@/data/data';

interface PassionTypes {
  title: string;
  icon: string;
  children: ReactNode;
}

export const Passion = () => {
  return (
    <section className='flex flex-col mb-32 w-full h-full'>
      <div className='px-10 mb-16 w-full h-full lg:px-0 lg:mb-0 lg:w-1/2'>
        <h3 className='tracking-[0.15em] text-2xl font-normal text-white uppercase lg:text-4xl'>
          <span className='text-red-custom font-semibold'>02</span> Passion
        </h3>
      </div>
      <div className='flex flex-col justify-center items-center m-auto mt-0 space-y-10 w-full h-full lg:flex-row lg:justify-evenly lg:items-start lg:mt-20 lg:space-y-0'>
        {passionItems.map(({ title, icon, description }) => (
          <CardPassion key={title} title={title} icon={icon}>
            {description}
          </CardPassion>
        ))}
      </div>
    </section>
  );
};

const CardPassion = ({ title, icon, children }: PassionTypes) => {
  return (
    <div className='w-[300px]'>
      <div className='h-[120px] image-container w-full'>
        <Image src={icon} alt='' layout='fill' className='image' />
      </div>
      <div className='mt-4 space-y-2 w-full'>
        <h3 className='text-red-custom tracking-[0.5rem] font-semibold text-center uppercase'>
          {title}
        </h3>
        <p className='leading-[1.4rem] text-sm font-light tracking-wider text-center text-white md:text-base lg:leading-[2rem]'>
          {children}
        </p>
      </div>
    </div>
  );
};
