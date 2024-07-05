import { portfolios } from '@/data/portfolio';

export const getPortfolios = () => {
  return portfolios;
};

export const getDetailPortfolio = (id: string) => {
  const data = portfolios.find((portfolio) => portfolio.id === id);

  return data;
};
