import { getWorks } from '@/services/work';

import { CardPortfolio } from './components/CardPortfolio';

export const WorkGallery = () => {
  const portfolios = getWorks();

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
