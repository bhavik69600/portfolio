'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, Compass } from 'lucide-react';
import Magnetic from '@/components/Magnetic';

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-background overflow-hidden relative">
      {/* Background Glitch Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 text-center px-6"
      >
        <div className="relative inline-block mb-12">
          <motion.h1
            animate={{ 
              textShadow: [
                "2px 2px 0px #ff00ff, -2px -2px 0px #00ffff",
                "-2px 2px 0px #ff00ff, 2px -2px 0px #00ffff",
                "2px -2px 0px #ff00ff, -2px 2px 0px #00ffff",
                "2px 2px 0px #ff00ff, -2px -2px 0px #00ffff"
              ]
            }}
            transition={{ repeat: Infinity, duration: 0.2 }}
            className="text-[150px] md:text-[250px] font-black leading-none text-white tracking-tighter"
          >
            404
          </motion.h1>
          <motion.div 
            animate={{ x: [-10, 10, -5, 5, 0], opacity: [0.5, 0.8, 0.5] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="absolute top-0 left-0 w-full h-full bg-primary/10 blur-3xl rounded-full"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white italic">
            YOU ARE LOST IN <span className="text-gradient">SPACE.</span>
          </h2>
          <p className="max-w-md mx-auto text-foreground/40 text-lg font-medium">
            The page you are looking for has been moved to another dimension or never existed in this reality.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-12">
            <Magnetic>
              <Link
                href="/"
                className="group flex items-center gap-4 px-10 py-5 bg-primary rounded-2xl font-black text-lg transition-all hover:neon-glow text-background"
              >
                <Home className="w-5 h-5" />
                BACK TO REALITY
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="/#projects"
                className="group flex items-center gap-4 px-10 py-5 glass rounded-2xl font-black text-lg transition-all border border-white/5 hover:neon-border text-white"
              >
                <Compass className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                EXPLORE PROJECTS
              </Link>
            </Magnetic>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100, 
            y: Math.random() * 100, 
            opacity: Math.random() 
          }}
          animate={{ 
            y: [null, Math.random() * -100 - 50],
            opacity: [null, 0]
          }}
          transition={{ 
            duration: Math.random() * 10 + 5, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{ 
            left: `${Math.random() * 100}%`, 
            top: `${Math.random() * 100}%` 
          }}
        />
      ))}
    </div>
  );
}
