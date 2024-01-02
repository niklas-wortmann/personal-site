import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import icon from "astro-icon";
import vercel from "@astrojs/vercel/static";
import rehypePrettyCode from "rehype-pretty-code";
import { getHighlighter } from 'shikiji';
import path from 'node:path';
import { readFileSync } from 'node:fs';

const inlineTemplateGrammar = JSON.parse(readFileSync(path.join(process.cwd(), "../libs/jetbrains-shiki/src/lib/language/inline-template.json"), 'utf8'))
const inlineStylesGrammar = JSON.parse(readFileSync(path.join(process.cwd(), "../libs/jetbrains-shiki/src/lib/language/inline-styles.json"), 'utf8'))
const templateGrammar = JSON.parse(readFileSync(path.join(process.cwd(), "../libs/jetbrains-shiki/src/lib/language/template.json"), 'utf8'))
const templateBlocksGrammar = JSON.parse(readFileSync(path.join(process.cwd(), "../libs/jetbrains-shiki/src/lib/language/template-blocks.json"), 'utf8'))
const expressionGrammar = JSON.parse(readFileSync(path.join(process.cwd(), "../libs/jetbrains-shiki/src/lib/language/expression.json"), 'utf8'))


const angularLanguages = [
  {
    "scopeName": "inline-template.ng",
    "injectTo": [
      "ts"
    ],
    "embeddedLanguages": {
      "text.html": "html",
      "source.css": "css",
      "source.js": "javascript"
    },
    ...inlineTemplateGrammar
  },
  {
    "scopeName": "inline-styles.ng",
    "injectTo": [
      "source.ts"
    ],
    "embeddedLanguages": {
      "source.css.scss": "scss"
    },
    ...inlineStylesGrammar
  },
  {
    "scopeName": "template.ng",
    "injectTo": [
      "text.html.derivative",
      "source.ts"
    ],
    "embeddedLanguages": {
      "text.html": "html",
      "source.css": "css"
    },
    ...templateGrammar
  },
  {
    "scopeName": "template.blocks.ng",
    "injectTo": [
      "text.html.derivative",
      "source.ts"
    ],
    "embeddedLanguages": {
      "text.html": "html",
      "expression.ng": "javascript"
    },
    ...templateBlocksGrammar
  },
  {
    "scopeName": "expression.ng",
    ...expressionGrammar
  }
]

const prettyCodeOptions = {
  theme: "vitesse-dark",
  tokensMap: {},
  getHighlighter: (options) => {
    return getHighlighter({
      ...options,
      langs: [
        'plaintext',
        ...angularLanguages
      ],
    })
  }
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
});
