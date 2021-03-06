import * as React from 'react';

import Bottombar from '@/components/layout/Bottombar';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import Particle from '@/components/Particle/Particle';
import Seo from '@/components/Seo';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Seo />
      <div className='bg-dark flex relative min-w-full min-h-screen outline-none'>
        <Header />
        <Sidebar />
        <Bottombar />
        <main className='selection:bg-red-custom z-[2] w-full h-full lg:pl-[120px]'>
          {children}
        </main>
        <Particle />
      </div>
    </>
  );
}
