import { Cards } from './Cards';
import { Heading } from './Heading';

export const Portfolio = () => {
  return (
    <div data-anchor='portfolio' className='section'>
      <div className='flex overflow-hidden flex-col-reverse mt-16 w-full h-screen lg:flex-row lg:mt-0'>
        <Heading />
        <Cards />
      </div>
    </div>
  );
};
