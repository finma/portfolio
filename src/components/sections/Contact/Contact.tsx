import { Form } from './Form';
import { Heading } from './Heading';

export const Contact = () => {
  return (
    <div data-anchor='contact' className='section'>
      <div className='flex overflow-hidden flex-col-reverse mt-16 w-full h-screen lg:flex-row lg:mt-0'>
        <Heading />
        <Form />
      </div>
    </div>
  );
};
