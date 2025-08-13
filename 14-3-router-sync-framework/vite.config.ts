import { defineConfig } from 'vite'
import { reactRouter } from '@react-router/dev/vite'
import { fileURLToPath, URL } from 'node:url';
// https://vite.dev/config/
const viteConfig = defineConfig({
  base: '/',
  server: {
    host: 'localhost',
    port: 3000,
    open: false,
  },
  plugins: [reactRouter()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});

export default viteConfig;
