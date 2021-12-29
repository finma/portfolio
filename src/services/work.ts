import { works } from '@/data/data';

export const getWorks = () => {
  return works;
};

export const getDetailWork = (id: string) => {
  const data = works.find((work) => work.id === id);

  return data;
};
