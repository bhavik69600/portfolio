'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full relative overflow-hidden"
        >
          <div className="absolute inset-x-0 bottom-0 bg-primary/20 transition-all duration-300 h-full" style={{ height: `${percent}%` }} />
        </motion.div>
        
        <div className="flex flex-col items-center gap-1">
          <span className="text-4xl font-black text-foreground tracking-tighter">
            BHAVIN<span className="text-primary italic">.</span>
          </span>
          <div className="h-1 w-48 bg-white/5 rounded-full overflow-hidden relative">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${percent}%` }}
              className="absolute left-0 top-0 bottom-0 bg-primary shadow-[0_0_15px_rgba(59,130,246,0.6)]"
            />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-foreground/20 mt-2">
            Loading {percent}%
          </span>
        </div>
      </div>
    </motion.div>
  );
}
