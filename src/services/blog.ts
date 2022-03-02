import { blogs } from '@/data/blog';

export const getBlogs = () => {
  return blogs;
};

export const getDetailBlog = (id: number) => {
  const blog = blogs.find((blog) => blog.id === id);

  return blog;
};
