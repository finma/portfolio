import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <>
      <Seo templateTitle='Not Found' />

      <main>
        <section className='bg-dark'>
          <div className='layout flex flex-col justify-center items-center min-h-screen text-center text-black'>
            <RiAlarmWarningFill
              size={60}
              className='animate-flicker drop-shadow-glow text-red-500'
            />
            <h1 className='mt-8 text-4xl text-white md:text-6xl'>
              Page Not Found
            </h1>
            <ArrowLink className='mt-4 text-white md:text-lg' href='/' isDarkBg>
              Back to Home
            </ArrowLink>
          </div>
        </section>
      </main>
    </>
  );
}
