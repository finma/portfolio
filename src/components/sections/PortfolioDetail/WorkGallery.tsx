import Image from 'next/image';

import ArrowLink from '@/components/links/ArrowLink';
import UnstyledLink from '@/components/links/UnstyledLink';

import type { WorkTypes } from '@/type/types';

interface PortfolioProps {
  data: WorkTypes[];
}

export const WorkGallery = ({ data }: PortfolioProps) => {
  return (
    <div className='flex justify-center w-full min-h-screen'>
      <div className='flex flex-wrap gap-5 justify-center m-auto'>
        {data.map(({ thumbnail, id }) => (
          <Card key={id} thumbnail={thumbnail} id={id} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ thumbnail, id }: WorkTypes) => {
  return (
    <div className='relative w-32 h-20 bg-transparent md:w-64 md:h-40 hover:brightness-100'>
      <ArrowLink
        as={UnstyledLink}
        className='inline-flex absolute top-0 z-10 justify-center items-center w-full h-full text-sm font-normal text-white bg-primary-400 rounded-xl opacity-0 transition duration-150 md:text-lg md:font-medium hover:opacity-[0.8]'
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
