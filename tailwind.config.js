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
      },
      animation: {
        wiggle: 'wiggle 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        wiggle_1: 'wiggle_1 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 200ms both',
        wiggle_1card: 'wiggle_1card 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        wiggle2: 'wiggle 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        jiggle: 'jiggle 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        scale_in_center: 'scale-in-center 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateY(30px)',opacity: 0 },
          '50%': { transform: 'translateY(0)',opacity: 1 },
          '100%': { transform: 'translateY(5px)',opacity: 1 }
        },
        wiggle_1: {
          '0%': { transform: 'translateY(45px)',opacity: 0 },
          '100%': { transform: 'translateY(0)',opacity: 1 },
        },
        wiggle_1card: {
          '0%': { transform: 'translateY(40px)',opacity: 0 },
          '50%': { transform: 'translateY(0)',opacity: 1 },
          '100%': { transform: 'translateY(10px)',opacity: 1}
        },
        wiggle2: {
          '0%': { transform: 'translateY(40px)'},
          '50%': { transform: 'translateY(0)'},
          '100%': { transform: 'translateY(10px)' }
        },
        scale_in_center:{
          '0%' :{transform: 'scale(0)',opacity: 1},
          '100%': {transform: 'scale(1)',opacity: 1}
        },
        jiggle: {
          '0%': { transform: 'translateY(20px)',opacity: 0 },
          '50%': { transform: 'translateY(0)',opacity: 1 },
          '100%': { transform: 'translateY(5px)',opacity: 1 }
        }
      },
      screens: {
        // Define custom screen sizes
        'min-xl': {'raw': '(min-width: 913px) and (max-width: 1024px)'},
        'min-900': {'raw': '(min-width: 900px) and (max-width: 912px)'},
        'min-1280': {'raw': '(min-width: 1280px) and (max-width: 1376px)'},

        'min-820': '820px', // You can name it whatever you like

        // Usage of media query for screens with a minimum width of 900 pixels
        'min-820': {'raw': '(min-width: 820px) and (max-width: 900px)'},
        
      },
    },
  },
  plugins: [
    require('tailwindcss-3d'),
    // ...
  ],
}