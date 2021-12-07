import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';

export default function HomePage() {
  return (
    <Layout>
      <div className='flex justify-center items-center w-full min-h-screen'>
        <h1 className='text-white'>FINMA</h1>
        <ButtonLink href='/components'>Components</ButtonLink>
      </div>
    </Layout>
  );
}
