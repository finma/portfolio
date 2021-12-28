import Layout from '@/components/layout/Layout';
import { PortfolioDetail } from '@/components/sections';

import { getWorks } from '@/services/work';
import type { WorkTypes } from '@/type/types';

interface PortfolioProps {
  data: WorkTypes[];
}

export default function PortfolioPage({ data }: PortfolioProps) {
  return (
    <Layout>
      <PortfolioDetail data={data} />
    </Layout>
  );
}

export async function getStaticProps() {
  const data = getWorks();

  return {
    props: {
      data,
    },
  };
}
