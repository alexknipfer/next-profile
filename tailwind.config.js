const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  variants: {
    margin: ['responsive', 'last'],
    borderWidth: ['last'],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arimo', ...fontFamily.sans],
      },
      fontSize: {
        tiny: '0.6rem',
      },
    },
  },
};
