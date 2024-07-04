import { portfolios } from '@/data/data';

export const getPortfolios = () => {
  return portfolios;
};

export const getDetailPortfolio = (id: string) => {
  const data = portfolios.find((portfolio) => portfolio.id === id);

  return data;
};
