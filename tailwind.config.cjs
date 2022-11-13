/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        physical: colors.blueGray[300],
        anemo: colors.teal[300],
        cryo: colors.cyan[300],
        dendro: colors.emerald[400],
        electro: colors.fuchsia[300],
        geo: colors.amber[200],
        hydro: colors.blue[300],
        pyro: colors.red[300],
        dark: '#25294a',
        light: colors.white
      },
      fontFamily: {
        'sans': ['Poppins', 'Noto Sans SC', 'sans-serif'],
        'serif': ['Poppins', 'Noto Serif SC', 'serif'],
      },
    },
  },
  /* 动态类名不起作用
   * https://github.com/statamic/cms/discussions/4491#discussioncomment-2106311
   */
  safelist: [
    {
      pattern: /text-/,
      variants: [
        'physical',
        'anemo',
        'cryo',
        'dendro',
        'electro',
        'geo',
        'hydro',
        'pyro',
        'dark',
      ],
    }
  ],
  plugins: [],
}
