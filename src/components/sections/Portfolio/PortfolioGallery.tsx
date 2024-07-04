import { getPortfolios } from '@/services/portfolio';

import { CardPortfolio } from './components/CardPortfolio';

export const PortfolioGallery = () => {
  const portfolios = getPortfolios();

  return (
    <div className='flex justify-center mb-32 w-full h-full'>
      <div className='flex flex-wrap gap-5 justify-center m-auto'>
        {portfolios.map(({ thumbnail, id }) => (
          <CardPortfolio key={id} thumbnail={thumbnail} id={id} />
        ))}
      </div>
    </div>
  );
};
