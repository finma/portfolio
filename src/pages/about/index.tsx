import Layout from '@/components/layout/Layout';
import { AboutDetail } from '@/components/sections';

import { getSkills } from '@/services/skill';
import type { SkillTypes } from '@/type/types';

interface AboutProps {
  data: SkillTypes[];
}

export default function AboutPage({ data }: AboutProps) {
  return (
    <Layout>
      <AboutDetail data={data} />
    </Layout>
  );
}

export async function getStaticProps() {
  const data = getSkills();

  return {
    props: {
      data,
    },
  };
}
