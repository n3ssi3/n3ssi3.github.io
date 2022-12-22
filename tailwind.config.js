const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './page/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Hind Siliguri Light', ...fontFamily.sans]
      },
      colors: {
        pink: '#EC407A',
        lightpink: '#F8BBD0',
        bordeaux: '#880E4F',
        violet: '#673AB7',
        lightviolet: '#D1C4E9',
        blue: '#311B92',
        gold: '#D6BD96',
        vercel: {
          pink: '#FF0080',
          blue: '#7eceff',
          cyan: '#50E3C2',
          orange: '#F5A623',
          violet: '#7928CA'
        }
      },
      keyframes: ({ theme }) => ({
        rerender: {
          '0%': {
            'border-color': theme('colors.vercel.pink')
          },
          '40%': {
            'border-color': theme('colors.vercel.pink')
          }
        },
        highlight: {
          '0%': {
            background: theme('colors.vercel.pink'),
            color: theme('colors.white')
          },
          '40%': {
            background: theme('colors.vercel.pink'),
            color: theme('colors.white')
          }
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)'
          }
        },
        translateXReset: {
          '100%': {
            transform: 'translateX(0)'
          }
        },
        fadeToTransparent: {
          '0%': {
            opacity: 1
          },
          '40%': {
            opacity: 1
          },
          '100%': {
            opacity: 0
          }
        }
      })
    }
  }
}
