/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ['Nunito', 'serif']
      },
      colors: {
        bannerColor: '#15253F',
        footerColor: '#212526',
        deleteColor: '#EF0D49',
        checkboxCol: '#004CFC',
        textBg: '#E9E9E9'
      }
    },
  },
  plugins: [],
}

