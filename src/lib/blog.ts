import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readTime: string;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'));
  
  return files
    .map((file) => {
      const slug = file.replace('.mdx', '');
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8');
      const { data, content } = matter(raw);
      
      // Safe Date parsing
      const dateStr = data.date ? String(data.date).trim() : '';
      const parsedDate = new Date(dateStr);
      const finalDate = isNaN(parsedDate.getTime()) ? new Date().toISOString() : dateStr;

      return {
        slug,
        title: data.title || 'Untitled Post',
        excerpt: data.excerpt || 'Exploring the latest in tech...',
        date: finalDate,
        tags: Array.isArray(data.tags) ? data.tags : [],
        readTime: data.readTime || '5 min',
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? '',
    excerpt: data.excerpt ?? '',
    date: data.date ?? '',
    tags: data.tags ?? [],
    readTime: data.readTime ?? '',
    content,
  };
}
