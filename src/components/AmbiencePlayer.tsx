'use client';

import { useEffect, useRef, useState } from 'react';
import { useSfx } from './SoundProvider';

export default function AmbiencePlayer() {
  const { soundEnabled } = useSfx();
  const audioCtxRef = useRef<AudioContext | null>(null);
  const nodesRef = useRef<{ osc: OscillatorNode; gain: GainNode }[]>([]);
  const [started, setStarted] = useState(false);

  function startAmbience() {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    audioCtxRef.current = ctx;

    // Three layered drone frequencies for a "cinematic space" feel
    const layers: { freq: number; vol: number; type: OscillatorType }[] = [
      { freq: 55, vol: 0.018, type: 'sine' },
      { freq: 82.5, vol: 0.012, type: 'sine' },
      { freq: 110, vol: 0.008, type: 'triangle' },
    ];

    const nodes = layers.map(({ freq, vol, type }) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(vol, ctx.currentTime + 4);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      return { osc, gain };
    });

    nodesRef.current = nodes;
    setStarted(true);
  }

  function stopAmbience() {
    const ctx = audioCtxRef.current;
    if (!ctx) return;
    nodesRef.current.forEach(({ osc, gain }) => {
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 2);
      setTimeout(() => { try { osc.stop(); } catch (_) {} }, 2200);
    });
    nodesRef.current = [];
    setStarted(false);
  }

  useEffect(() => {
    if (soundEnabled && !started) {
      startAmbience();
    } else if (!soundEnabled && started) {
      stopAmbience();
    }
    return () => {
      if (started) stopAmbience();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [soundEnabled]);

  return null; // invisible component
}
