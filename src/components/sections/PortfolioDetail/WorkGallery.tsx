import Image from 'next/image';

import { works } from '@/data/data';

import ArrowLink from '@/components/links/ArrowLink';
import UnstyledLink from '@/components/links/UnstyledLink';

interface CardProps {
  title?: string;
  image: string;
  href: string;
}

export const WorkGallery = () => {
  return (
    <div className='flex justify-center w-full min-h-screen'>
      <div className='flex flex-wrap gap-5 justify-center m-auto'>
        {works.map(({ image, href }) => (
          <Card key={href} image={image} href={href} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ image, href }: CardProps) => {
  return (
    <div className='relative w-32 h-20 bg-white md:w-64 md:h-40 hover:brightness-100'>
      <ArrowLink
        as={UnstyledLink}
        className='inline-flex absolute top-0 z-10 justify-center items-center w-full h-full text-lg font-medium text-white bg-primary-400 opacity-0 transition duration-150 hover:opacity-100'
        href={href}
      >
        View Project
      </ArrowLink>
      <div className='image-container w-full h-full'>
        <Image src={image} alt='' layout='fill' className='image' />
      </div>
    </div>
  );
};
