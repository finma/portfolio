import Layout from '@/components/layout/Layout';
import { PortfolioDetail } from '@/components/sections';

import { getDetailPortfolio, getPortfolios } from '@/services/portfolio';
import type { PortfolioTypes } from '@/type/types';

interface PortfolioProps {
  data: PortfolioTypes;
}

export default function PortfolioID({ data }: PortfolioProps) {
  return (
    <Layout>
      <PortfolioDetail data={data} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const data = getPortfolios();
  const paths = data.map((item) => ({
    params: {
      portfolioID: item.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

interface GetStaticProps {
  params: {
    portfolioID: string;
  };
}

export async function getStaticProps({ params }: GetStaticProps) {
  const { portfolioID } = params;
  const data = getDetailPortfolio(portfolioID);

  return {
    props: {
      data,
    },
  };
}
