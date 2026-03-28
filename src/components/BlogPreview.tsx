'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, Clock, Tag } from 'lucide-react';
import { BlogPost } from '@/lib/blog';
import Section from './Section';

interface Props {
  posts: BlogPost[];
}

export default function BlogPreview({ posts }: Props) {
  return (
    <Section id="blog">
      <div className="flex flex-col md:flex-row items-start justify-between mb-16 gap-4">
        <div>
          <h2 className="text-3xl md:text-5xl font-black text-foreground">
            Tech <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-foreground/50 text-lg mt-4 max-w-lg font-medium">
            My thoughts on full stack development, architecture patterns, and the tools I love.
          </p>
        </div>
        <a
          href="/blog"
          className="flex items-center gap-2 text-primary font-bold hover:underline group mt-2"
        >
          View all articles <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <motion.a
            key={post.slug}
            href={`/blog/${post.slug}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group glass rounded-[32px] border-glass-border hover:neon-border transition-all duration-300 overflow-hidden flex flex-col"
          >
            {/* Gradient top bar */}
            <div
              className="h-1 w-full"
              style={{
                background: `linear-gradient(to right, var(--dyn-primary, #3b82f6), var(--dyn-secondary, #a855f7))`,
              }}
            />
            <div className="p-8 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-black uppercase tracking-widest text-foreground/30">
                  {new Date(post.date).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </span>
                <span className="text-foreground/10">•</span>
                <span className="flex items-center gap-1 text-xs font-bold text-foreground/30">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>

              <h3 className="text-xl font-black text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-foreground/50 font-medium leading-relaxed flex-1">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-black uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20"

                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 mt-6 text-sm font-bold text-foreground/40 group-hover:text-primary transition-colors">
                <BookOpen className="w-4 h-4" />
                Read article
                <ArrowUpRight className="w-4 h-4 ml-auto group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
