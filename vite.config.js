import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [react()],
  proxy: {
    '/api': {
      target: 'http://localhost:8000',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});