/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fade: {
          '0%': { opacity: 0, transform: 'translateY(-1rem)' },
          '50%': { opacity: 0.5 },
          '100%': { opacity: 1, transfrom: 'translateY(1rem)' },
        },
      },
      animation: {
        fade: 'fade 0.5s ease-in-out 1',
      },
    },
    colors: {
      background: '#0B1619',
      backgroundhover: '#070E10',
      light: '#fafafa',
      primary: '#30C8A8',
      dark: '#1B2628',
      'gray-dark': '#626262',
      transparent: 'rgba(0,0,0,0)',
    },
  },
  plugins: [],
};
