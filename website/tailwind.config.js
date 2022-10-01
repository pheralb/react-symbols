/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrainsMono-Regular", "monospace"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        midnight: "#08070B",
        midnightLight: "#13101C",
      },
      animation: {
        tilt: "tilt 5s infinite linear",
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(1deg)",
          },
          "75%": {
            transform: "rotate(-1deg)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
