'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, ArrowRight, FileDown } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import { useEffect, useState, lazy, Suspense, useRef } from 'react';
import Magnetic from './Magnetic';

const FloatingOrb = lazy(() => import('./FloatingOrb'));

const titles = [
  'Rajput Bhavin | SaaS Developer',
  'Full Stack Developer in Ahmedabad',
  'Web Automation Expert',
  'Next.js & Node.js Specialist'
];


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
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={container} id="home" className="relative h-[110vh] md:h-screen flex flex-col items-center justify-center overflow-hidden">
      <ParticleBackground />

      {/* Mega Background Parallax Text */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
      >
        <span className="text-[15vw] md:text-[20vw] font-black text-white/[0.01] tracking-tighter uppercase whitespace-nowrap">
          RAJPUT BHAVIN
        </span>
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
          <p className="text-[9px] md:text-[10px] font-black text-white/60 tracking-[0.3em] uppercase">
            Rajput Bhavin | Available for SaaS Projects
          </p>

        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-[120px] font-black mb-6 leading-[0.85] tracking-tighter text-white"
        >
          RAJPUT <br />
          <span className="text-gradient underline decoration-primary/20 underline-offset-8">BHAVIN.</span>
        </motion.h1>


        <div className="space-y-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-10 overflow-hidden"
          >
            <motion.h2
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-lg md:text-3xl text-foreground/70 font-bold tracking-tight"
            >
              {titles[index]}
            </motion.h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="max-w-2xl text-white/40 text-sm md:text-lg leading-relaxed font-medium"
          >
            Crafting elite SaaS applications and high-performance Web Automation tools. 
            <strong> Rajput Bhavin</strong> is a specialized Full Stack Developer based in 
            Ahmedabad, helping brands transform ideas into scalable digital products.
          </motion.p>

        </div>

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
                <span className="relative z-10 text-white/80 group-hover:text-white uppercase tracking-widest">View Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </a>
            </Magnetic>

            <Magnetic>
              <a
                href="/Resume Bhavin.pdf"
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
                rel="noopener noreferrer"
                aria-label="Rajput Bhavin Github Profile"
                className="w-14 h-14 flex items-center justify-center glass rounded-full text-white/50 hover:text-white transition-all border border-white/10 hover:neon-border"
              >
                <Github className="w-6 h-6" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="https://www.linkedin.com/in/rajput-bhavin-9512a028a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rajput Bhavin LinkedIn Profile"
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
          <span className="text-[10px] font-black text-white/20 tracking-[0.5em] uppercase [writing-mode:vertical-lr]">Explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
