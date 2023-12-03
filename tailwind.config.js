/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      fontFamily:{
        oswald: ['Exo 2','Nanum Gothic','Oswald'],
        inter: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif']
      }
    },
  },
  plugins: [],
}