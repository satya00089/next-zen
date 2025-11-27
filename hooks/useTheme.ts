'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const prefersDarkMode = () => {
  if (globalThis.window === undefined) {
    return false;
  }
  return globalThis.window.matchMedia('(prefers-color-scheme: dark)').matches;
};

export function useTheme() {
  // Always start with light mode on the server to avoid hydration mismatches
  const [theme, setTheme] = useState<Theme>('light');

  // Resolve stored or system preference after hydration
  useEffect(() => {
    if (globalThis.window === undefined) {
      return;
    }

    let frame: number | null = null;
    const stored = globalThis.window.localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') {
      frame = globalThis.window.requestAnimationFrame(() => setTheme(stored));
    } else if (prefersDarkMode()) {
      frame = globalThis.window.requestAnimationFrame(() => setTheme('dark'));
    }

    return () => {
      if (frame !== null) {
        globalThis.window?.cancelAnimationFrame(frame);
      }
    };
  }, []);

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

  return { theme, setTheme };
}
