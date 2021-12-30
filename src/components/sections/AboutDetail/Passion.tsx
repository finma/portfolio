import Image from 'next/image';
import { ReactNode } from 'react';

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

export const passionItems = [
  {
    title: 'Coding',
    icon: '/icons/coding.svg',
    description:
      'I started like coding since I was in college. From there I learned programming languages and structural algorithms. I had a hard time at first, but when I tried again and again, I finally love it',
  },
  {
    title: 'Technology',
    icon: '/icons/cpu.svg',
    description:
      "Technology is the sum of every technique, skill, method, and process used in the production of goods or services. Over time, technology is developing. I'm very interested in technology, I can't wait to see what technology will look like in the future",
  },
  {
    title: 'Learn New Things',
    icon: '/icons/learning.svg',
    description: `“The more that you read, the more things you will know. The more that you learn, the more places you'll go.” - Dr. Seuss`,
  },
];
