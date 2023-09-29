import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'node:url';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  outDir: '../dist/homepage',
  integrations: [
    react(),
    sitemap(),
    tailwind({
      configFile: fileURLToPath(
        new URL('./tailwind.config.cjs', import.meta.url)
      ),
    }),
     compress()
  ],
});
