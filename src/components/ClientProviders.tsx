'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import SoundProvider from '@/components/SoundProvider';
import MagneticCursor from '@/components/MagneticCursor';
import AmbiencePlayer from '@/components/AmbiencePlayer';
import SettingsPanel from '@/components/SettingsPanel';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

import Footer from '@/components/Footer';

import { useMouse } from "@/hooks/useMouse";

export default function ClientProviders({ children }: { children: ReactNode }) {
  const { x, y } = useMouse();

  return (
    <ThemeProvider>
      <SoundProvider>
        <MagneticCursor />
        <AmbiencePlayer />
        <SettingsPanel />
        <Navbar />
        
        {/* Immersive Spotlight Glow */}
        <motion.div
          className="fixed inset-0 pointer-events-none z-0"
          animate={{
            background: `radial-gradient(400px circle at ${x}px ${y}px, rgba(var(--dyn-primary-rgb), 0.08), transparent 80%)`,
          }}
        />

        <main className="relative min-h-screen z-10">
          {children}
        </main>
        <Footer />
      </SoundProvider>
    </ThemeProvider>
  );
}

