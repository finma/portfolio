import { Footer } from '@/components/layout/Footer';

import { Heading } from './Heading';
import { WorkGallery } from './WorkGallery';

export const PortfolioDetail = () => {
  return (
    <div className='container relative m-auto w-full h-full'>
      <Heading />
      <WorkGallery />
      <Footer />
    </div>
  );
};
