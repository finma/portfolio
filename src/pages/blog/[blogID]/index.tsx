import Layout from '@/components/layout/Layout';
import { BlogDetail } from '@/components/sections';

import { getBlogs, getDetailBlog } from '@/services/blog';
import type { BlogTypes } from '@/type/types';

interface BlogProps {
  data: BlogTypes;
}
export default function BlogID({ data }: BlogProps) {
  return (
    <Layout>
      <BlogDetail data={data} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const data = getBlogs();
  const paths = data.map((item) => ({
    params: {
      blogID: String(item.id),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

interface GetStaticProps {
  params: {
    blogID: string;
  };
}

export async function getStaticProps({ params }: GetStaticProps) {
  const { blogID } = params;
  const data = getDetailBlog(Number(blogID));

  return {
    props: {
      data,
    },
  };
}
