import * as React from 'react';

import Header from '@/components/layout/Header';
import Particle from '@/components/Particle/Particle';
import Seo from '@/components/Seo';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      <Seo />
      <div className='from-dark-blue to-dark flex relative min-w-full min-h-screen bg-gradient-to-b outline-none'>
        <Header />
        <main className='selection:bg-red-custom z-[2] min-w-full min-h-screen'>
          {children}
        </main>
        <Particle />
      </div>
    </>
  );
}
