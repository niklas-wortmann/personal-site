/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'coffee-darker': '#1C0A00',
        'coffee-dark': '#2C1006',
        'coffee-medium': '#4A2C2A',
        'coffee-light': '#F0E6D6',
        'coffee-text': '#E8DDD0',
        'coffee-accent': '#E8A44A',
      },
    },
  },
  plugins: [],
}
