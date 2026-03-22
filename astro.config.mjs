import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://burakyoruk.com.tr',
  vite: {
    plugins: [tailwindcss()],
  },
});
