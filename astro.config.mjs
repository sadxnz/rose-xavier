import { defineConfig } from 'astro/config';

export default defineConfig({
  // [PREENCHER: domínio final do site] — usado no Open Graph, canonical e JSON-LD
  site: 'https://rosexavier.vercel.app',
  build: {
    inlineStylesheets: 'always',
  },
  devToolbar: { enabled: false },
});
