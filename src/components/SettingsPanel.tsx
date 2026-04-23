'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useTheme, THEMES, ThemeKey } from './ThemeProvider';
import { useSfx } from './SoundProvider';
import { Volume2, VolumeX, Palette, X } from 'lucide-react';

export default function SettingsPanel() {
  const { theme, setTheme } = useTheme();
  const { soundEnabled, toggleSound } = useSfx();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating toggle button */}
      <motion.button
        onClick={() => setOpen((p) => !p)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 p-3 glass rounded-2xl border border-white/10 shadow-lg cursor-pointer"
        title="Settings"
        aria-label="Open settings panel"
      >
        {open ? <X className="w-5 h-5 text-white/70" /> : <Palette className="w-5 h-5 text-white/70" />}
      </motion.button>

      {/* Panel & Backdrop */}
      <AnimatePresence>
        {open && (
          <>
            {/* Click-away Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]"
            />

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              className="fixed bottom-20 right-6 z-50 glass rounded-3xl border border-white/10 p-6 w-64 shadow-2xl"
            >
              {/* Theme picker */}
              <p className="text-xs font-black uppercase tracking-[0.2em] text-white/30 mb-4">
                Color Theme
              </p>
              <div className="flex flex-col gap-2 mb-6">
                {(Object.entries(THEMES) as [ThemeKey, typeof THEMES[ThemeKey]][]).map(([key, cfg]) => (
                  <button
                    key={key}
                    onClick={() => setTheme(key)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                      theme === key
                        ? 'bg-white/10 border border-white/20'
                        : 'hover:bg-white/5'
                    }`}
                  >
                    <span
                      className="w-4 h-4 rounded-full border-2 border-white/20 flex-shrink-0"
                      style={{ background: cfg.primary }}
                    />
                    {cfg.label}
                    {theme === key && (
                      <span className="ml-auto text-[10px] font-black uppercase tracking-widest text-white/40">
                        Active
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Sound toggle */}
              <p className="text-xs font-black uppercase tracking-[0.2em] text-white/30 mb-3">
                Audio
              </p>
              <button
                onClick={toggleSound}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                  soundEnabled ? 'bg-white/10 border border-white/20' : 'hover:bg-white/5'
                }`}
              >
                {soundEnabled ? (
                  <Volume2 className="w-4 h-4" />
                ) : (
                  <VolumeX className="w-4 h-4 text-white/40" />
                )}
                <span className={soundEnabled ? '' : 'text-white/40'}>
                  {soundEnabled ? 'Sound ON' : 'Sound OFF'}
                </span>
                {/* Toggle pill */}
                <div className="ml-auto relative w-9 h-5 rounded-full bg-white/10 border border-white/10 flex items-center">
                  <motion.div
                    layout
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className={`absolute w-3.5 h-3.5 rounded-full ${soundEnabled ? 'right-1' : 'left-1'}`}
                    style={{ backgroundColor: soundEnabled ? 'var(--dyn-primary, #3b82f6)' : '#4b5563' }}
                  />
                </div>
              </button>

              <p className="text-center text-[10px] text-white/20 mt-6 font-bold tracking-widest uppercase">
                Bhavin Rajput © 2026
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </>
  );
}
