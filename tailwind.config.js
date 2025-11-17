/**** Tailwind config for building library styles ****/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brutal: {
          blue: '#87cefa',
          purple: '#dda0dd',
          beige: '#f5deb3',
          green: '#98fb98',
        },
      },
      animation: {
        'brutal-shimmer': 'brutal-shimmer 2s ease-in-out infinite',
        'brutal-slide': 'brutal-slide 2s ease-in-out infinite',
        'brutal-spin': 'brutal-spin 1s linear infinite',
      },
      keyframes: {
        'brutal-shimmer': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        'brutal-slide': {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
        'brutal-spin': {
          to: { transform: 'rotate(360deg)' },
        },
      },
      fontFamily: {
        brutal: ['"Arial Black"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
