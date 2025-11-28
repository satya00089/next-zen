'use client';

import { createContext, useContext, useEffect, useState, useMemo } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const prefersDarkMode = () => {
  if (globalThis.window === undefined) {
    return false;
  }
  return globalThis.window.matchMedia('(prefers-color-scheme: dark)').matches;
};

export function ThemeProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Initialize from localStorage on client-side only
    if (globalThis.window !== undefined) {
      const stored = globalThis.window.localStorage.getItem('theme') as Theme | null;
      if (stored === 'dark' || stored === 'light') {
        return stored;
      }
      if (prefersDarkMode()) {
        return 'dark';
      }
    }
    return 'light';
  });

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    document.documentElement.classList.toggle('dark', theme === 'dark');

    try {
      globalThis.window?.localStorage.setItem('theme', theme);
    } catch {
      // ignore storage errors
    }
  }, [theme]);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
}
