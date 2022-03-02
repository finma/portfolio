import parse from 'html-react-parser';
import Image from 'next/image';

import { Footer } from '@/components/layout/Footer';
import ArrowLink from '@/components/links/ArrowLink';

import type { BlogTypes } from '@/type/types';

interface BlogDetailProps {
  data: BlogTypes;
}

export const BlogDetail = ({ data }: BlogDetailProps) => {
  return (
    <section className='container relative px-6 m-auto mt-20 w-full h-full lg:px-0'>
      <ArrowLink
        href='/blog'
        direction='left'
        className='leading-[1.4rem] z-[15] text-sm font-light tracking-wider text-white md:text-base lg:leading-[2rem]'
      >
        Back to blog
      </ArrowLink>

      {/* Article */}
      <article className='border-t-red-custom p-8 my-8 w-full text-white border border-t-2 border-gray-400 lg:w-2/3'>
        <h6 className='text-red-custom tracking-[0.15em] text-base font-semibold uppercase lg:text-lg'>
          {data.category}
        </h6>
        <h1 className='mt-4 text-3xl font-semibold leading-tight lg:text-5xl'>
          {data.title}
        </h1>
        <figure className='image-container w-full'>
          <Image
            src={data.image}
            alt='thumbnail'
            width='100%'
            height='75%'
            layout='responsive'
            objectFit='contain'
            className='rounded-lg'
          />
        </figure>
        <main>{parse(data.body)}</main>
      </article>

      <ArrowLink
        href='/blog'
        direction='left'
        className='leading-[1.4rem] z-[15] mb-8 text-sm font-light tracking-wider text-white md:text-base lg:leading-[2rem]'
      >
        Back to blog
      </ArrowLink>

      <Footer />
    </section>
  );
};
