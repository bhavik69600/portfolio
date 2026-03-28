'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, ArrowRight, FileDown } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import { useEffect, useState, lazy, Suspense, useRef } from 'react';
import Magnetic from './Magnetic';

const FloatingOrb = lazy(() => import('./FloatingOrb'));

const titles = ['MERN Developer', 'Next.js Specialist', 'Problem Solver', 'Tech Enthusiast'];

export default function Hero() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={container} id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      {/* Mega Background Parallax Text */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
      >
        <h2 className="text-[15vw] md:text-[20vw] font-black text-white/[0.02] tracking-tighter uppercase whitespace-nowrap">
          FULL STACK
        </h2>
      </motion.div>

      {/* 3D Orb — right side on desktop */}
      <Suspense fallback={null}>
        <FloatingOrb />
      </Suspense>

      <div className="container mx-auto px-6 z-10 lg:pl-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 inline-flex items-center gap-3 glass rounded-full px-5 py-2 border border-white/5"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-[9px] md:text-[10px] font-black text-white/60 tracking-[0.3em] uppercase">
            Available for New Projects
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-[140px] font-black mb-6 leading-[0.85] tracking-tighter text-white"
        >
          BHAVIN <br />
          <span className="text-gradient underline decoration-primary/20 underline-offset-8">RAJPUT.</span>
        </motion.h1>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="h-10 overflow-hidden mb-12"
        >
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-xl md:text-3xl text-foreground/70 font-bold tracking-tight"
          >

            {titles[index]}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap items-center gap-6 md:gap-10"
        >
          <div className="flex flex-wrap gap-5">
            <Magnetic>
              <a
                href="#projects"
                className="group relative flex items-center gap-4 px-10 py-6 glass rounded-2xl font-black text-lg transition-all hover:neon-border overflow-hidden"
              >
                <span className="relative z-10 text-white/80 group-hover:text-white uppercase tracking-widest">Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </a>
            </Magnetic>

            <Magnetic>
              <a
                href="/resume.pdf"
                target="_blank"
                download
                className="group relative flex items-center gap-4 px-10 py-6 bg-primary rounded-2xl font-black text-lg transition-all hover:neon-glow hover:scale-105 active:scale-95 text-background"
              >
                <FileDown className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                DOWNLOAD CV
              </a>
            </Magnetic>
          </div>

          <div className="flex items-center gap-6">
            <Magnetic>
              <a 
                href="https://github.com/bhavik69600/" 
                target="_blank" 
                aria-label="GitHub Profile"
                className="w-14 h-14 flex items-center justify-center glass rounded-full text-white/50 hover:text-white transition-all border border-white/10 hover:neon-border"
              >
                <Github className="w-6 h-6" />
              </a>
            </Magnetic>
            <Magnetic>
              <a 
                href="https://www.linkedin.com/in/rajput-bhavin-9512a028a?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                target="_blank" 
                aria-label="LinkedIn Profile"
                className="w-14 h-14 flex items-center justify-center glass rounded-full text-white/50 hover:text-white transition-all border border-white/10 hover:neon-border"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </Magnetic>

          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 lg:left-36 lg:translate-x-0"
      >
        <div className="flex flex-col items-center gap-4">
          <span className="text-[10px] font-black text-white/20 tracking-[0.5em] uppercase [writing-mode:vertical-lr]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
