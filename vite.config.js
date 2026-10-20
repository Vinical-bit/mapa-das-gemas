import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// "base" = nome do repositório no GitHub Pages (vinical-bit.github.io/mapa-das-gemas/)
export default defineConfig({
  base: '/mapa-das-gemas/',
  plugins: [react()],
});
