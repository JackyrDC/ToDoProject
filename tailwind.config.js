 {import('tailwindcss').Config} 
 import colors from 'tailwindcss/colors'

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            'sky': colors.sky,
            'slate': colors.slate,
        },
        extend: {


        },
    },
    plugins: [],
}