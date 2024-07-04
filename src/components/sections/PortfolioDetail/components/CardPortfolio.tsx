import Image from 'next/image';

import ArrowLink from '@/components/links/ArrowLink';
import UnstyledLink from '@/components/links/UnstyledLink';

import { WorkTypes } from '@/type/types';

export const CardPortfolio = ({ thumbnail, id }: WorkTypes) => {
  return (
    <div className='relative w-32 h-20 bg-transparent md:w-64 md:h-40 hover:brightness-100'>
      <ArrowLink
        as={UnstyledLink}
        className='cursor-newtab inline-flex absolute top-0 z-10 justify-center items-center w-full h-full text-sm font-normal text-white bg-primary-400 rounded-xl opacity-0 transition duration-150 md:text-lg md:font-medium hover:opacity-[0.8]'
        href={`/portfolio/${id}`}
      >
        View Project
      </ArrowLink>
      <div className='image-container w-full h-full'>
        <Image
          src={thumbnail}
          alt=''
          layout='fill'
          className='image rounded-xl'
        />
      </div>
    </div>
  );
};
