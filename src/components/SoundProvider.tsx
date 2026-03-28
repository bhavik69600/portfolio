'use client';

import { useEffect, useRef, useState, createContext, useContext, ReactNode } from 'react';

// ─── Sound Context ────────────────────────────────────────────────────────────
interface SoundContextValue {
  soundEnabled: boolean;
  toggleSound: () => void;
  playHover: () => void;
  playClick: () => void;
}

const SoundContext = createContext<SoundContextValue>({
  soundEnabled: false,
  toggleSound: () => {},
  playHover: () => {},
  playClick: () => {},
});

export function useSfx() {
  return useContext(SoundContext);
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function createBeep(
  ctx: AudioContext,
  freq: number,
  type: OscillatorType,
  vol: number,
  duration: number
) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.type = type;
  osc.frequency.setValueAtTime(freq, ctx.currentTime);
  gain.gain.setValueAtTime(vol, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + duration);
}

// ─── Provider ─────────────────────────────────────────────────────────────────
export default function SoundProvider({ children }: { children: ReactNode }) {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const getCtx = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioCtxRef.current;
  };

  const playHover = () => {
    if (!soundEnabled) return;
    try {
      const ctx = getCtx();
      createBeep(ctx, 880, 'sine', 0.04, 0.08);
    } catch (_) {}
  };

  const playClick = () => {
    if (!soundEnabled) return;
    try {
      const ctx = getCtx();
      createBeep(ctx, 440, 'square', 0.06, 0.05);
      setTimeout(() => createBeep(ctx, 660, 'sine', 0.04, 0.1), 50);
    } catch (_) {}
  };

  const toggleSound = () => {
    setSoundEnabled((prev) => !prev);
  };

  // Attach hover/click listeners globally - only on client after mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const onHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"]')) playHover();
    };
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"]')) playClick();
    };

    window.addEventListener('mouseover', onHover);
    window.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('mouseover', onHover);
      window.removeEventListener('click', onClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [soundEnabled]);

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound, playHover, playClick }}>
      {children}
    </SoundContext.Provider>
  );
}
