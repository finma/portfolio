import { Footer } from '@/components/layout/Footer';

import { Form } from './Form';
import { Heading } from './Heading';

export const Contact = () => {
  return (
    <div className='container relative m-auto w-full h-full'>
      <div className='flex overflow-hidden flex-col mt-16 w-full h-screen lg:h-[calc(100vh-2.5rem)] lg:flex-row lg:mt-0'>
        <Heading />
        <Form />
      </div>
      <Footer />
    </div>
  );
};
