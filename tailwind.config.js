/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'background': '#0B1619',
      'backgroundhover': '#070E10',
      'light': '#fafafa',
      'primary': '#30C8A8',
      'dark': '#1B2628',
      'gray-dark': '#626262'
    }
  },
  plugins: [],
}

