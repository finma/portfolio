import * as React from 'react';

import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
// import Particle from '@/components/Particle/Particle';
import Seo from '@/components/Seo';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Seo />
      <div className='from-dark-blue to-dark flex relative min-w-full min-h-screen bg-gradient-to-b outline-none'>
        <Header />
        <Sidebar />
        <main className='selection:bg-red-custom z-[2] w-full h-full min-h-screen lg:pl-[120px]'>
          {children}
        </main>
        {/* <Particle /> */}
      </div>
    </>
  );
}
