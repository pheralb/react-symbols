/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrainsMono-Regular', 'monospace']
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        midnight: '#1E1E2E',
      }
    },
  },
  plugins: [require('@tailwindcss/typography')]
};
