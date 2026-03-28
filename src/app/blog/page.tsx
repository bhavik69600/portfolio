import { getAllPosts } from '@/lib/blog';
import BlogPreview from '@/components/BlogPreview';

export default function BlogPage() {
  const posts = getAllPosts();
  return <BlogPreview posts={posts} />;
}
