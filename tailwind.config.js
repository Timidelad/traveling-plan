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
        bannerColor: '#15253F'
      }
    },
  },
  plugins: [],
}

