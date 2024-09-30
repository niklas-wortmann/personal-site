/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      colors: {
        'coffee-darker': '#1C0A00',
        'coffee-dark': '#2C1006',
        'coffee-medium': '#4A2C2A',
        'coffee-light': '#D2B48C',
        'coffee-text': '#E6D2B5',
        'coffee-accent': '#FFA500',
      },
    },
  },
	plugins: [],
}
