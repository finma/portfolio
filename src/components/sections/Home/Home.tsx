import { Heading } from './Heading';
import { Moon } from './Moon';

export const Home = () => {
  return (
    <div data-anchor='home' className='section w-full h-screen'>
      <div className='flex justify-end'>
        <Moon />
        <Heading />
      </div>
    </div>
  );
};
