/** @type {import('tailwindcss').Config} */
 import { colors as color }  from 'tailwindcss/colors';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: color.blue,
      gray: color.gray,
      
    },
    extend: {


    },
  },
  plugins: [],
}