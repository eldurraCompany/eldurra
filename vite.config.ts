import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/eldurra/', // ✅ اسم الريبو هنا لازم يتغير
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});