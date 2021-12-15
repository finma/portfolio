import { Form } from './Form';
import { Heading } from './Heading';

export const Contact = () => {
  return (
    <div data-anchor='contact' className='section w-full h-screen'>
      <div className='flex overflow-hidden flex-col mt-16 w-full h-screen lg:flex-row lg:mt-0'>
        <Heading />
        <Form />
      </div>
    </div>
  );
};
