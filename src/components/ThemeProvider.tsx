'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type ThemeKey = 'neon-blue' | 'neon-pink' | 'cyberpunk';

interface ThemeConfig {
  label: string;
  primary: string;
  secondary: string;
  accent: string;
  primaryRgb: string;
  secondaryRgb: string;
}

export const THEMES: Record<ThemeKey, ThemeConfig> = {
  'neon-blue': {
    label: '🔵 Neon Blue',
    primary: '#3b82f6',
    secondary: '#a855f7',
    accent: '#10b981',
    primaryRgb: '59, 130, 246',
    secondaryRgb: '168, 85, 247',
  },
  'neon-pink': {
    label: '🌸 Neon Pink',
    primary: '#ec4899',
    secondary: '#8b5cf6',
    accent: '#f59e0b',
    primaryRgb: '236, 72, 153',
    secondaryRgb: '139, 92, 246',
  },
  'cyberpunk': {
    label: '⚡ Cyberpunk',
    primary: '#eab308',
    secondary: '#22d3ee',
    accent: '#f97316',
    primaryRgb: '234, 179, 8',
    secondaryRgb: '34, 211, 238',
  },
};

interface ThemeContextValue {
  theme: ThemeKey;
  setTheme: (t: ThemeKey) => void;
  config: ThemeConfig;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'neon-blue',
  setTheme: () => {},
  config: THEMES['neon-blue'],
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeKey>('neon-blue');

  const setTheme = (t: ThemeKey) => {
    setThemeState(t);
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-theme', t);
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme') as ThemeKey | null;
    if (saved && THEMES[saved]) setThemeState(saved);
  }, []);

  // Inject CSS variables into :root when theme changes
  useEffect(() => {
    const cfg = THEMES[theme];
    const root = document.documentElement;
    root.style.setProperty('--color-primary-val', cfg.primary);
    root.style.setProperty('--color-secondary-val', cfg.secondary);
    root.style.setProperty('--color-accent-val', cfg.accent);
    root.style.setProperty('--neon-primary-rgb', cfg.primaryRgb);
    root.style.setProperty('--neon-secondary-rgb', cfg.secondaryRgb);

    // Patch the tailwind color tokens (CSS vars used in globals.css)
    root.style.setProperty('--tw-color-primary', cfg.primary);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, config: THEMES[theme] }}>
      <style>{`
        :root {
          --dyn-primary: ${THEMES[theme].primary};
          --dyn-secondary: ${THEMES[theme].secondary};
          --dyn-accent: ${THEMES[theme].accent};
          --dyn-primary-rgb: ${THEMES[theme].primaryRgb};
          --dyn-secondary-rgb: ${THEMES[theme].secondaryRgb};
        }
        .text-primary { color: ${THEMES[theme].primary} !important; }
        .bg-primary { background-color: ${THEMES[theme].primary} !important; }
        .border-primary { border-color: ${THEMES[theme].primary} !important; }
        .text-secondary { color: ${THEMES[theme].secondary} !important; }
        .text-accent { color: ${THEMES[theme].accent} !important; }
        .neon-glow { box-shadow: 0 0 20px rgba(${THEMES[theme].primaryRgb}, 0.4) !important; }
        .neon-border { border: 1px solid rgba(${THEMES[theme].primaryRgb}, 0.4) !important; }
        .text-gradient {
          background: linear-gradient(to right, ${THEMES[theme].primary}, ${THEMES[theme].secondary}) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(${THEMES[theme].primaryRgb}, 0.3) !important;
        }
        .bg-mesh {
          background:
            radial-gradient(circle at 10% 20%, rgba(${THEMES[theme].primaryRgb}, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, rgba(${THEMES[theme].secondaryRgb}, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(${THEMES[theme].primaryRgb}, 0.05) 0%, transparent 60%) !important;
        }
      `}</style>
      {children}
    </ThemeContext.Provider>
  );
}
