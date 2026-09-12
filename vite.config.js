import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/create-tdk-stack/',
  plugins: [react()]
});
