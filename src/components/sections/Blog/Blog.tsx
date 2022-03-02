import Image from 'next/image';
import Link from 'next/link';
import Masonry from 'react-masonry-css';

import { Footer } from '@/components/layout/Footer';

import type { BlogTypes } from '@/type/types';

import { Heading } from './Heading';

interface BlogProps {
  data: BlogTypes[];
}

const ArticleCard = ({ id, image, title, category, content }: BlogTypes) => {
  const subString = (string: string) => {
    return string.length > 100 ? `${string.substring(0, 100)} ...` : string;
  };

  return (
    <Link href={`/blog/${id}`}>
      <a className='cursor-newtab'>
        <article className='bg-[#020912] border-t-red-custom p-6 w-72 text-white border-t-2 shadow-inner'>
          <header className='w-full'>
            <h6 className='text-red-custom tracking-[0.15em] text-xs font-semibold uppercase'>
              {category}
            </h6>
            <figure className='image-container w-full'>
              <Image
                src={image}
                alt='thumbnail'
                width='100%'
                height='80%'
                layout='responsive'
                objectFit='contain'
                className='rounded-lg'
              />
            </figure>
            <h2 className='text-2xl font-medium tracking-wider'>{title}</h2>
          </header>
          <main className='mt-4'>
            <p className='text-base font-light tracking-wide'>
              {subString(content)}
            </p>
          </main>
        </article>
      </a>
    </Link>
  );
};

export const Blogs = ({ data }: BlogProps) => {
  const breakpointColumnsObj = {
    default: 4,
    1300: 3,
    1024: 2,
    600: 1,
  };

  return (
    <section className='container relative px-6 m-auto mt-20 w-full h-full lg:px-0 lg:mt-0'>
      <Heading />
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {data.map(({ id, image, title, category, content, body }) => (
          <ArticleCard
            key={id}
            id={id}
            image={image}
            title={title}
            category={category}
            content={content}
            body={body}
          />
        ))}
      </Masonry>
      <Footer />
    </section>
  );
};
