import Image from 'next/image';

import type { SkillTypes } from '@/type/types';

export const CardSkill = ({ title, icon }: SkillTypes) => {
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
