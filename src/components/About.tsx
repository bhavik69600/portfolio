'use client';

import Section from './Section';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function About() {
  return (
    <Section id="about" className="py-20 md:py-40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-24 items-start px-2">
        
        {/* Left Side: Large Text & Stats */}
        <div className="lg:col-span-12 xl:col-span-7 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-[10px] md:text-xs font-black tracking-[0.4em] text-primary uppercase">
              The Journey of Rajput Bhavin
            </h2>
            <h3 className="text-4xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
              BEYOND THE <br />
              <span className="text-gradient underline decoration-primary/20 underline-offset-8">INTERFACE.</span>
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-foreground/60 text-lg md:text-xl font-medium leading-relaxed"
          >
            <div className="space-y-4">
              <p>
                <strong>Rajput Bhavin</strong> is a dedicated Full Stack Developer with an extensive background in crafting high-conversion SaaS platforms. 
                Based in Ahmedabad, I specialize in the modern MERN stack, delivering scalable solutions with Node.js, Next.js, and specialized Web Automation.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                With a focus on performance and SEO best practices, Rajput Bhavin has successfully delivered 
                8+ real-world applications. My expertise lies in building secure REST APIs, automated workflows, and complex 
                logic-driven dashboards for global clients.
              </p>
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-3 gap-6 md:gap-12 pt-12 border-t border-white/5"
          >
            <div>
              <h4 className="text-3xl md:text-6xl font-black text-white mb-2 tracking-tighter">8+</h4>
              <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-primary">SaaS Products</p>
            </div>
            <div>
              <h4 className="text-3xl md:text-6xl font-black text-white mb-2 tracking-tighter">200+</h4>
              <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Deployments</p>
            </div>
            <div>
              <h4 className="text-3xl md:text-6xl font-black text-white mb-2 tracking-tighter">12</h4>
              <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-accent">Months Experience</p>
            </div>
          </motion.div>

        </div>

        {/* Right Side: Featured Experience Card */}
        <div className="lg:col-span-12 xl:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-[32px] md:rounded-[40px] border border-white/10 p-6 md:p-10 relative overflow-hidden group hover:neon-border transition-all duration-500"
          >
            <div className="absolute top-0 right-0 p-8 hidden md:block">
              <ArrowUpRight className="w-8 h-8 text-white/10 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>
            
            <h4 className="text-xl md:text-2xl font-black text-white mb-8 border-b border-white/5 pb-4 md:border-none md:pb-0">Developer Background</h4>
            <div className="space-y-8 group-hover:translate-x-1 transition-transform duration-500">
              <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary">
                <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Developer Education</p>
                <h5 className="text-base md:text-lg font-bold text-white">BCA Software Engineering</h5>
                <p className="text-xs md:text-sm text-white/60">Focused on Advanced Logic & Systems</p>
              </div>
              <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-secondary">
                <p className="text-[10px] font-black text-secondary uppercase tracking-widest mb-1">Ahmedabad Developer Community</p>
                <h5 className="text-base md:text-lg font-bold text-white">Full Stack Web Architecture</h5>
                <p className="text-xs md:text-sm text-white/80">SaaS & Automation Expert</p>
              </div>

            </div>

            <div className="mt-10 pt-8 border-t border-white/5">
              <p className="text-xs md:text-sm text-white/80 italic leading-relaxed">
                "Rajput Bhavin believes that high-performance code combined with elite design creates 
                unbeatable user experiences."
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </Section>
  );
}
