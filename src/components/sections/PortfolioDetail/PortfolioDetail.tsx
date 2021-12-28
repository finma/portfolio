import { Footer } from '@/components/layout/Footer';

import type { WorkTypes } from '@/type/types';

import { Heading } from './Heading';
import { WorkGallery } from './WorkGallery';

interface PortfolioProps {
  data: WorkTypes[];
}

export const PortfolioDetail = ({ data }: PortfolioProps) => {
  return (
    <div className='container relative m-auto w-full h-full'>
      <Heading />
      <WorkGallery data={data} />
      <Footer />
    </div>
  );
};
