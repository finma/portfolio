import { Footer } from '@/components/layout/Footer';

import type { SkillTypes } from '@/type/types';

import { Heading } from './Heading';
import { Passion } from './Passion';
import { SkillSet } from './SkillSet';
import { WhoIAm } from './WhoIAm';

interface AboutProps {
  data: SkillTypes[];
}

export const AboutDetail = ({ data }: AboutProps) => {
  return (
    <div className='container relative m-auto w-full h-full'>
      <Heading />
      <div className='mt-8 w-full lg:mt-32'>
        <WhoIAm />
        <Passion />
        <SkillSet data={data} />
      </div>
      <Footer />
    </div>
  );
};
