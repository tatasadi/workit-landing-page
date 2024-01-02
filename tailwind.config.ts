import type { Config } from "tailwindcss"

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        violet: "hsl(257, 40%, 49%)",
        "soft-magenta": "hsl(300, 69%, 71%)"
      }
    },
    fontFamily:{
      'open-sans': ['Open Sans', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
} satisfies Config
