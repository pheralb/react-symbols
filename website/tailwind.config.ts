import type { Config } from "tailwindcss";

// Plugins:
import twAnimate from "tailwindcss-animate";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", ...defaultTheme.fontFamily.sans],
        mono: ["GeistMono", ...defaultTheme.fontFamily.mono],
      },
      animation: {
        "spin-slow": "spin 4s linear infinite",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        'react-symbol-pink': '#c084fc',
        'react-symbol-aqua': '#22d3ee',
      },
    },
  },
  plugins: [twAnimate],
};

export default config;
