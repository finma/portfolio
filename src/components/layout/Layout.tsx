import * as React from 'react';

import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
// import Particle from '@/components/Particle/Particle';
import Seo from '@/components/Seo';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Seo />
      <div className='bg-dark flex relative min-w-full min-h-screen outline-none'>
        <Header />
        <Sidebar />
        <main
          data-namespace='home'
          className='selection:bg-red-custom z-[2] lg:pl-[120px]'
        >
          {children}
        </main>
        {/* <Particle /> */}
      </div>
    </>
  );
}
