/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './ui/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        pink: '#EC407A',
        lightpink: '#F8BBD0',
        bordeaux: '#880E4F',
        violet: '#673AB7',
        lightviolet: '#D1C4E9',
        blue: '#311B92',
        gold: '#D6BD96'
      },
      transitionProperty: {
        width: 'width'
      }
    }
  },
  plugins: []
}
