import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // relative asset paths: works on Vercel, Netlify and GitHub Pages sub-paths
  build: {
    target: "es2020",
    chunkSizeWarningLimit: 1100,
    rollupOptions: {
      output: {
        // React + Framer go in a stable vendor chunk. Three.js is left to the
        // dynamic import in Hero.jsx so it only downloads after first paint.
        manualChunks(id) {
          if (/node_modules\/(react|react-dom|scheduler|framer-motion|motion-dom|motion-utils)\//.test(id)) return 'vendor';
          return undefined;
        },
      },
    },
  },
});
