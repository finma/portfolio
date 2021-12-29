import Image from 'next/image';

import { Footer } from '@/components/layout/Footer';
import ArrowLink from '@/components/links/ArrowLink';

import type { WorkTypes } from '@/type/types';

interface WorkProps {
  data: WorkTypes;
}

export const WorkDetail = ({ data }: WorkProps) => {
  return (
    <section className='container relative px-6 m-auto mt-20 w-full h-full lg:px-0'>
      <ArrowLink
        href='/portfolio'
        direction='left'
        className='leading-[1.4rem] text-sm font-light tracking-wider text-white md:text-base lg:leading-[2rem]'
      >
        Back
      </ArrowLink>
      <div className='flex flex-col-reverse gap-10 mt-8 w-full h-full lg:flex-row'>
        <div className='flex justify-start items-start w-full h-screen min-h-screen lg:w-2/3'>
          <div className='w-full h-full'>
            <div className='image-container w-full h-full'>
              <Image src={data.image} alt='' layout='fill' className='image' />
            </div>
          </div>
        </div>
        <div className='space-y-8 w-full h-full lg:w-1/3'>
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
      <span className='h-min w-1 bg-primary-400 rounded-full'></span>
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
