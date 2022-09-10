/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrainsMono-Regular', 'monospace']
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
