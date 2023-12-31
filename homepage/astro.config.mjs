import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: 'https://wordman.dev',
  integrations: [mdx(), sitemap(), tailwind(), vue()],
  output: "static",
  adapter: vercel()
});
