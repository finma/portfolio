import Image from 'next/image';

import ArrowLink from '@/components/links/ArrowLink';
import UnstyledLink from '@/components/links/UnstyledLink';

import { PortfolioTypes } from '@/type/types';

export const CardPortfolio = ({ thumbnail, id }: PortfolioTypes) => {
  return (
    <div className='relative mx-auto w-full h-52 bg-transparent md:h-56 hover:brightness-100'>
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
