import type { Config } from "tailwindcss"

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["General-Sans", "sans-serif"],
        mono: ["Hack", "monospace"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config
