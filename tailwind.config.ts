import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: 'hsl(273, 85%, 13%)',
        primary: 'hsl(150, 100%, 63%)',
        gray: 'hsl(271, 12%, 34%)',
        light: 'hsl(276, 100%, 99%)',
      },
    },
    fontFamily: {
      'open-sans': ['Open Sans', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
} satisfies Config
