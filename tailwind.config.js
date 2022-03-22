const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: 'class',
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
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
