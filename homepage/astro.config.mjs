import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel/static';
import tailwindcssNesting from 'tailwindcss/nesting';
import { DarkRaw } from 'jetbrains-ide-themes';
import expressiveCode from 'astro-expressive-code';
import {
  transformerTwoslash
} from '@shikijs/twoslash';


// https://astro.build/config
export default defineConfig({
  site: 'https://wordman.dev',
  integrations: [expressiveCode({
    theme: DarkRaw, shiki: {
      transformers: [
        transformerTwoslash()]
    }
  }), mdx(), sitemap(), tailwind(), vue(), icon({
    include: {
      mdi: ['twitter', 'linkedin', 'github']
    }
  })],
  output: 'static',
  adapter: vercel(),

  vite: {
    css: {
      postcss: {
        plugins: [tailwindcssNesting()]
      }
    }
  }
});
