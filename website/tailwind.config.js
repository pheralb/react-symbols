/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi", "sans-serif"],
        mono: ["JetBrainsMono-Regular", "monospace"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        midnight: "#1C1C1F",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
