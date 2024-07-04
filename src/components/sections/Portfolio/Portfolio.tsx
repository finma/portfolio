import { Footer } from '@/components/layout/Footer';

import { Heading } from './Heading';
import { PortfolioGallery } from './PortfolioGallery';

export const Portfolio = () => {
  return (
    <div className='container relative m-auto w-full h-full'>
      <Heading />
      <PortfolioGallery />
      <Footer />
    </div>
  );
};
