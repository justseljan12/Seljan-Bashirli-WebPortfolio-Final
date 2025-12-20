import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Seljan-Bashirli-WebPortfolio-Final/',
  server: {
    port: 5173,
  },
});
