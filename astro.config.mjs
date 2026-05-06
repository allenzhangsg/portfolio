import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://allenzhangsg.com',
  compressHTML: true,

  build: {
    inlineStylesheets: 'auto',
  },

  adapter: cloudflare()
});