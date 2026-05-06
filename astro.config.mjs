import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://allenzhangsg.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
