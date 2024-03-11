import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import icon from "astro-icon";
import vercel from "@astrojs/vercel/static";
import rehypePrettyCode from "rehype-pretty-code";
import tailwindcssNesting from 'tailwindcss/nesting'
import { darkTheme } from 'jetbrains-ide-themes';
import partytown from '@astrojs/partytown'

const prettyCodeOptions = {
  theme: darkTheme,
};

// https://astro.build/config
export default defineConfig({
  site: 'https://wordman.dev',
  integrations: [mdx(), sitemap(), tailwind(), vue(), icon({
    include: {
      mdi: ["twitter", "linkedin", "github"]
    }
  })],
  output: "static",
  adapter: vercel(),
  markdown: {
    extendDefaultPlugins: true,
    syntaxHighlight: false,
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
  },
  vite: {
    css: {
      postcss: {
        plugins: [tailwindcssNesting()]
      }
    }
  },
  partytown: {
    config: {
      forward: ["dataLayer.push"],
    }
  }
});
