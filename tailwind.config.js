/** @type {import('tailwindcss').Config} */
export default {
  content: [    './components/**/*.{html,js}',
  './pages/**/*.{html,js}',
  './index.html',],
  theme: {
    extend: {      
      maxWidth: {
      '16': '16rem',
    }},
  },
  plugins: [],
};
