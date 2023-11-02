import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        creepster: ['var(--font-creepster)'],
        syne: ['var(--font-syne)'],
        montserrat: ['var(--font-montserrat)'],
      },
      colors:{
        rmBlue: '#00b5cc',
      }
    },
  },
  plugins: [],
}
export default config
