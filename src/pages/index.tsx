import * as React from 'react';

import Layout from '@/components/layout/Layout';
import { Home } from '@/components/sections';
import { About } from '@/components/sections';

export default function HomePage() {
  return (
    <Layout>
      <Home />
      <About />
      {/* <div className='z-[5] relative w-full h-screen min-h-screen'>
        <div data-aos='fade-right'>
          <h1 className='text-white'>section2</h1>
        </div>
      </div> */}
    </Layout>
  );
}
