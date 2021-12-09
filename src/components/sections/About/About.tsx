import { Foto } from './Foto';
import { Heading } from './Heading';

export const About = () => {
  return (
    <div data-anchor='about' className='section w-full h-screen'>
      <Heading />
      <Foto />
    </div>
  );
};
