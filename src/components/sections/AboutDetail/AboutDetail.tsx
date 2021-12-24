import { Footer } from '@/components/layout/Footer';

import { Heading } from './Heading';
import { Passion } from './Passion';
import { SkillSet } from './SkillSet';
import { WhoIAm } from './WhoIAm';

export const AboutDetail = () => {
  return (
    <div className='container relative m-auto w-full h-full'>
      <Heading />
      <div className='mt-8 w-full lg:mt-32'>
        <WhoIAm />
        <Passion />
        <SkillSet />
      </div>
      <Footer />
    </div>
  );
};
