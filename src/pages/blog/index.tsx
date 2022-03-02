import Layout from '@/components/layout/Layout';
import { Blogs } from '@/components/sections';

import { getBlogs } from '@/services/blog';
import type { BlogTypes } from '@/type/types';

interface BlogProps {
  data: BlogTypes[];
}

export default function BlogPage({ data }: BlogProps) {
  return (
    <Layout>
      <Blogs data={data} />
    </Layout>
  );
}

export async function getStaticProps() {
  const data = getBlogs();

  return {
    props: {
      data,
    },
  };
}
