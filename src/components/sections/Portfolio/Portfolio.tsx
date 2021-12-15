import { Cards } from './Cards';
import { Heading } from './Heading';

export const Portfolio = () => {
  return (
    <div data-anchor='portfolio' className='section w-full h-screen'>
      <div className='flex overflow-hidden flex-col-reverse mt-16 w-full h-full lg:flex-row lg:mt-0'>
        <Heading />
        <Cards />
      </div>
    </div>
  );
};
