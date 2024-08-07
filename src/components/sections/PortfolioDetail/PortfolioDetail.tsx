import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Footer } from '@/components/layout/Footer';
import ArrowLink from '@/components/links/ArrowLink';

import type { PortfolioTypes } from '@/type/types';

interface PortfolioProps {
  data: PortfolioTypes;
}

export const PortfolioDetail = ({ data }: PortfolioProps) => {
  return (
    <section className='container relative px-6 m-auto mt-20 w-full h-full lg:px-0'>
      <ArrowLink
        href='/portfolio'
        direction='left'
        className='leading-[1.4rem] z-[15] text-sm font-light tracking-wider text-white md:text-base lg:leading-[2rem]'
      >
        Back
      </ArrowLink>
      <div className='flex flex-col-reverse gap-10 my-8 w-full h-full lg:flex-row'>
        <div className='flex relative flex-wrap justify-start items-start w-full h-full lg:w-2/3'>
          <Carousel showThumbs={false} autoPlay infiniteLoop>
            {data?.image?.map((img: string) => (
              <div
                key={img}
                className='image-container w-full h-full rounded-xl'
              >
                <Image
                  src={img}
                  quality={100}
                  alt=''
                  width={800}
                  height={500}
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className='space-y-8 w-full h-full lg:px-1 lg:w-1/3'>
          <Detail title={'Project Name'} desc={data.title} />
          <Detail title={'Technology'} desc={data?.tech?.join(', ')} />
          <Detail
            title={'Website'}
            useLink
            link={data.href}
            titleLink={'View Website'}
          />
          {data.repo && (
            <Detail
              title={'Repo Github'}
              useLink
              link={data.repo}
              titleLink={'View Repo'}
            />
          )}
        </div>
      </div>
      <Footer />
    </section>
  );
};

interface DetailProps {
  title: string;
  desc?: string;
  useLink?: boolean;
  link?: string;
  titleLink?: string;
}

const Detail = ({ title, desc, useLink, link, titleLink }: DetailProps) => {
  return (
    <div className='flex space-x-2'>
      <span className='h-min w-[4px] bg-primary-400 rounded-full'></span>
      <div>
        <h4 className='text-lg font-medium tracking-widest text-white md:text-xl'>
          {title}
        </h4>
        {useLink ? (
          <ArrowLink
            className='leading-[1.4rem] text-sm font-light tracking-wider text-white md:text-base lg:leading-[2rem]'
            href={link}
          >
            {titleLink}
          </ArrowLink>
        ) : (
          <p className='leading-[1.4rem] text-sm font-light tracking-wider text-white md:text-base lg:leading-[2rem]'>
            {desc}
          </p>
        )}
      </div>
    </div>
  );
};
