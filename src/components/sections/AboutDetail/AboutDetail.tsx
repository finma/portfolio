import ArrowLink from '@/components/links/ArrowLink';

import { Heading } from './Heading';
import { Passion } from './Passion';
import { SkillSet } from './SkillSet';
import { WhoIAm } from './WhoIAm';

export const AboutDetail = () => {
  return (
    <div className='container relative m-auto w-full h-full'>
      <div className='hidden sticky top-20 z-50 lg:block'>
        <ArrowLink direction='left' className='text-white' href='/'>
          Back to Home
        </ArrowLink>
      </div>
      <Heading />
      <div className='mt-8 w-full lg:mt-32'>
        <WhoIAm />
        <Passion />
        <SkillSet />
      </div>
    </div>
  );
};
