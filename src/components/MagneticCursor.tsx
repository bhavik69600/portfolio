'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MagneticCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const cursorRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring smoothing for the main cursor
  const springX = useSpring(mouseX, { stiffness: 300, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 28 });

  // Softer trail for the outer ring
  const trailX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const trailY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    // Only show on desktop
    if (window.matchMedia('(pointer: coarse)').matches) return;

    setIsHidden(false);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, label, select');
      setIsPointer(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (isHidden) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <motion.div
        animate={{
          width: isPointer ? 10 : 6,
          height: isPointer ? 10 : 6,
          backgroundColor: isPointer ? '#ffffff' : 'var(--dyn-primary, #3b82f6)',
        }}
        transition={{ type: 'spring', stiffness: 450, damping: 28 }}
        className="rounded-full shadow-lg"
        style={{
          boxShadow: isPointer
            ? '0 0 15px rgba(255,255,255,0.8)'
            : '0 0 10px rgba(59,130,246,0.6)',
        }}
      />
    </motion.div>
  );
}

