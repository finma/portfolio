import Image from 'next/image';
import { ReactNode } from 'react';

interface PassionTypes {
  title: string;
  icon: string;
  children: ReactNode;
}

export const CardPassion = ({ title, icon, children }: PassionTypes) => {
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
