import { getPortfolios } from '@/services/portfolio';

import { CardPortfolio } from './components/CardPortfolio';

export const PortfolioGallery = () => {
  const portfolios = getPortfolios();

  return (
    <div className='flex justify-center mb-32 w-full h-full'>
      <div className='grid grid-cols-1 gap-5 justify-center items-center px-5 m-auto w-full h-full md:grid-cols-2 lg:grid-cols-3'>
        {portfolios.map(({ thumbnail, id }) => (
          <CardPortfolio key={id} thumbnail={thumbnail} id={id} />
        ))}
      </div>
    </div>
  );
};
