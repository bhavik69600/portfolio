import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="px-6 py-24 md:px-12">
      <div className="max-w-3xl mx-auto">

        <a
          href="/blog"
          className="flex items-center gap-2 text-sm font-bold text-foreground/40 hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </a>

        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-black uppercase tracking-wider text-primary/80 bg-primary/10 px-3 py-1 rounded-full border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">{post.title}</h1>

        <div className="flex items-center gap-6 text-sm font-bold text-foreground/30 mb-16">
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {new Date(post.date).toLocaleDateString('en-IN', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </span>
        </div>

        <article className="prose prose-invert prose-lg max-w-none
          prose-headings:font-black prose-headings:tracking-tight
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          prose-code:text-primary prose-code:bg-white/5 prose-code:px-2 prose-code:py-0.5 prose-code:rounded
          prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl
          prose-blockquote:border-l-primary prose-blockquote:text-foreground/60
          prose-strong:text-foreground
          prose-th:text-foreground/60 prose-td:text-foreground/50
        ">
          {/* Raw MDX not processed here for simplicity – use remark/rehype for full rendering */}
          <div dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }} />
        </article>
      </div>
    </div>
  );
}


// Very simple markdown→html for code blocks and headings without extra deps
function markdownToHtml(md: string): string {
  return md
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/```[\w]?\n([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
    .replace(/^\| (.+) \|$/gim, (match) => {
      const cells = match.split('|').filter(Boolean).map((c) => `<td>${c.trim()}</td>`).join('');
      return `<tr>${cells}</tr>`;
    })
    .replace(/(<tr>.*<\/tr>\n?)+/g, (t) => `<table>${t}</table>`)
    .replace(/^- (.*$)/gim, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, (l) => `<ul>${l}</ul>`)
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[a-z])/gim, '')
    .replace(/\n/g, '<br/>');
}
