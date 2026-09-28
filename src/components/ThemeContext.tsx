import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Theme = 'dark' | 'light';

export type AccentId = 'crimson' | 'cobalt' | 'emerald' | 'amber' | 'violet' | 'tangerine';

export type ScrollSnapMode = 'proximity' | 'mandatory' | 'off';

export interface AccentPreset {
  id: AccentId;
  name: string;
  hex: string;
  hover: string;
  glow: string;
  rgb: string;
}

export const ACCENT_PRESETS: AccentPreset[] = [
  {
    id: 'crimson',
    name: 'Editorial Crimson',
    hex: '#e51d24',
    hover: '#ff363d',
    glow: 'rgba(229, 29, 36, 0.4)',
    rgb: '229, 29, 36',
  },
  {
    id: 'cobalt',
    name: 'Klein Cobalt',
    hex: '#2563eb',
    hover: '#3b82f6',
    glow: 'rgba(37, 99, 235, 0.4)',
    rgb: '37, 99, 235',
  },
  {
    id: 'emerald',
    name: 'Nordic Mint',
    hex: '#10b981',
    hover: '#34d399',
    glow: 'rgba(16, 185, 129, 0.4)',
    rgb: '16, 185, 129',
  },
  {
    id: 'amber',
    name: 'Imperial Gold',
    hex: '#f59e0b',
    hover: '#fbbf24',
    glow: 'rgba(245, 158, 11, 0.4)',
    rgb: '245, 158, 11',
  },
  {
    id: 'violet',
    name: 'Cyber Amethyst',
    hex: '#a855f7',
    hover: '#c084fc',
    glow: 'rgba(168, 85, 247, 0.4)',
    rgb: '168, 85, 247',
  },
  {
    id: 'tangerine',
    name: 'Solar Orange',
    hex: '#f97316',
    hover: '#fb923c',
    glow: 'rgba(249, 115, 22, 0.4)',
    rgb: '249, 115, 22',
  },
];

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  accent: AccentId;
  setAccent: (accent: AccentId) => void;
  accentPreset: AccentPreset;
  scrollSnap: ScrollSnapMode;
  setScrollSnap: (mode: ScrollSnapMode) => void;
  cycleScrollSnap: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
  setTheme: () => {},
  accent: 'crimson',
  setAccent: () => {},
  accentPreset: ACCENT_PRESETS[0],
  scrollSnap: 'proximity',
  setScrollSnap: () => {},
  cycleScrollSnap: () => {},
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('profto-editorial-theme') as Theme;
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
    }
    return 'dark';
  });

  const [accent, setAccentState] = useState<AccentId>(() => {
    if (typeof window !== 'undefined') {
      const savedAccent = localStorage.getItem('profto-editorial-accent') as AccentId;
      if (ACCENT_PRESETS.some((p) => p.id === savedAccent)) {
        return savedAccent;
      }
    }
    return 'crimson';
  });

  const [scrollSnap, setScrollSnapState] = useState<ScrollSnapMode>(() => {
    if (typeof window !== 'undefined') {
      const savedSnap = localStorage.getItem('profto-scroll-snap') as ScrollSnapMode;
      if (savedSnap === 'proximity' || savedSnap === 'mandatory' || savedSnap === 'off') {
        return savedSnap;
      }
    }
    return 'proximity';
  });

  const currentAccentPreset = ACCENT_PRESETS.find((p) => p.id === accent) || ACCENT_PRESETS[0];

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('theme-inverted');
      root.setAttribute('data-theme', 'inverted');
    } else {
      root.classList.remove('theme-inverted');
      root.setAttribute('data-theme', 'dark');
    }
    localStorage.setItem('profto-editorial-theme', theme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent-primary', currentAccentPreset.hex);
    root.style.setProperty('--accent-hover', currentAccentPreset.hover);
    root.style.setProperty('--accent-glow', currentAccentPreset.glow);
    root.style.setProperty('--accent-rgb', currentAccentPreset.rgb);
    root.setAttribute('data-accent', accent);
    localStorage.setItem('profto-editorial-accent', accent);
  }, [accent, currentAccentPreset]);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-scroll-snap', scrollSnap);
    localStorage.setItem('profto-scroll-snap', scrollSnap);
  }, [scrollSnap]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const setAccent = (newAccent: AccentId) => {
    setAccentState(newAccent);
  };

  const setScrollSnap = (mode: ScrollSnapMode) => {
    setScrollSnapState(mode);
  };

  const cycleScrollSnap = () => {
    setScrollSnapState((prev) => {
      if (prev === 'proximity') return 'mandatory';
      if (prev === 'mandatory') return 'off';
      return 'proximity';
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        setTheme,
        accent,
        setAccent,
        accentPreset: currentAccentPreset,
        scrollSnap,
        setScrollSnap,
        cycleScrollSnap,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
