import { Cards } from './Cards';
import { Heading } from './Heading';

export const Portfolio = () => {
  return (
    <>
      <div className='flex overflow-hidden w-full h-screen'>
        <Heading />
        <Cards />
      </div>
    </>
  );
};
