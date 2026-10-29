import { useCallback, useEffect, useState } from 'react';

const THEME_COLORS = { light: '#fafaf9', dark: '#0a0a0a' };

/**
 * Light / dark theme. The initial value is set on <html data-theme> by an
 * inline script in index.html (black unless the visitor chose light), so there
 * is no flash of the wrong theme. Only an explicit toggle is remembered.
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[theme]);
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((t) => {
      const next = t === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem('theme', next);
      } catch {
        /* storage blocked — the choice just won't persist */
      }
      return next;
    });
  }, []);

  return [theme, toggle];
}
