import Hero from '@/components/Hero';
import About from '@/components/About';
import Workflow from '@/components/Workflow';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import ScrollProgress from '@/components/ScrollProgress';
import { getAllPosts } from '@/lib/blog';
import BlogPreview from '@/components/BlogPreview';

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <main className="relative min-h-screen">
      <ScrollProgress />
      <Hero />
      <About />
      <Workflow />
      <Services />
      <Experience />
      <Projects />
      <Skills />
      <BlogPreview posts={posts} />
      <Contact />
    </main>
  );
}
