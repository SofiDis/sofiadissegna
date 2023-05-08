import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: [
          // Shared global scss utilities.
          `@import "@/scss/00-base/index";`,
          `@import "@/scss/old-portfolio/index";`,
          '',
        ].join('\n'),
      },
    },
  },
});
