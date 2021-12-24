import { Heading } from './Heading';
import { Moon } from './Moon';

export const Home = () => {
  return (
    <div className='container relative m-auto w-full h-full'>
      <div className='flex justify-end'>
        <Moon />
        <Heading />
      </div>
    </div>
  );
};
