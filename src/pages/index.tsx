import * as React from 'react';

import Layout from '@/components/layout/Layout';
import { Home } from '@/components/sections';

export default function HomePage() {
  return (
    <Layout>
      <Home />
      <div className='z-[5] relative w-full h-screen min-h-screen'>
        <h1 className='text-white'>section2</h1>
      </div>
    </Layout>
  );
}
