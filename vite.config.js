import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      // Multi-page: academic CV at /, artist CV at /artist/
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        artist: resolve(import.meta.dirname, 'artist/index.html'),
      },
    },
  },
});
