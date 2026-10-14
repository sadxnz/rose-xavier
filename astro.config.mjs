import { defineConfig } from 'astro/config';

export default defineConfig({
  // Domínio do site — usado no Open Graph, canonical e JSON-LD
  site: 'https://rose-xavier.pages.dev',
  build: {
    inlineStylesheets: 'always',
  },
  devToolbar: { enabled: false },
});
