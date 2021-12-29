import Layout from '@/components/layout/Layout';
import { WorkDetail } from '@/components/sections';

import { getDetailWork, getWorks } from '@/services/work';
import type { WorkTypes } from '@/type/types';

interface WorkProps {
  data: WorkTypes;
}

export default function WorkID({ data }: WorkProps) {
  return (
    <Layout>
      <WorkDetail data={data} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const data = getWorks();
  const paths = data.map((item) => ({
    params: {
      workID: item.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

interface GetStaticProps {
  params: {
    workID: string;
  };
}

export async function getStaticProps({ params }: GetStaticProps) {
  const { workID } = params;
  const data = getDetailWork(workID);

  return {
    props: {
      data,
    },
  };
}
