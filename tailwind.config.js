const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', ...defaultTheme.fontFamily.sans],
        Nunito: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: '475px',
        ...defaultTheme.screens,
      },
      colors: {
        ...defaultTheme.colors,
        primary: '#de206a',
        secondary: '#48b049',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
