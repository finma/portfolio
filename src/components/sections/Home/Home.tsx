import { Heading } from './Heading';
import { Moon } from './Moon';

export const Home = () => {
  return (
    <div className='mx-h-screen relative w-full h-screen min-h-screen'>
      <Moon />
      <Heading />
    </div>
  );
};
