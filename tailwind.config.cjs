/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        magenta: {
          light: '#FF66CC',
          DEFAULT: '#FF00CC',
          dark: '#CC0099',
        },
        customBlue: '#66C2FF',
        customPurple: '#D580FF',
        customYellow: '#FFDB99',
      }
    },
  },
  plugins: [],
}