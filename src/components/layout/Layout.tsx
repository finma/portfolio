import * as React from 'react';

import Particle from '@/components/Particle/Particle';
import Seo from '@/components/Seo';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      <Seo />
      <div className='from-dark-blue to-dark relative z-0 w-full min-h-screen bg-gradient-to-b'>
        <main className='absolute z-10 w-full min-h-screen'>{children}</main>
        <Particle />
      </div>
    </>
  );
}
