/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
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
