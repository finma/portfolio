import Image from 'next/image';

import type { SkillTypes } from '@/type/types';

interface AboutProps {
  data: SkillTypes[];
}

export const SkillSet = ({ data }: AboutProps) => {
  return (
    <section className='flex flex-col mb-32 w-full h-full'>
      <div className='px-10 mb-16 w-full h-full lg:px-0 lg:mb-0 lg:w-1/2'>
        <h3 className='tracking-[0.15em] text-2xl font-normal text-white uppercase lg:text-4xl'>
          <span className='text-red-custom font-semibold'>03</span> Skill Set
        </h3>
      </div>
      <div className='flex flex-wrap gap-10 justify-center items-center m-auto mt-0 w-full h-full md:w-3/4 lg:flex-row lg:justify-evenly lg:items-start lg:mt-20 lg:w-2/3'>
        {data.map(({ title, icon }) => (
          <SkillCard key={title} title={title} icon={icon} />
        ))}
      </div>
    </section>
  );
};

const SkillCard = ({ title, icon }: SkillTypes) => {
  return (
    <div className='w-[70px] flex flex-col items-center md:w-[85px] lg:w-[100px]'>
      <div className='h-[90px] w-full'>
        <Image priority src={icon} alt='' width={90} height={90} className='' />
      </div>
      <p className='leading-[1.4rem] text-sm font-light tracking-wider text-white lg:leading-[2rem] lg:text-base'>
        {title}
      </p>
    </div>
  );
};
