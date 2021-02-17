const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  variants: {
    margin: ['responsive', 'last'],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ubuntu', ...fontFamily.sans],
      },
      fontSize: {
        tiny: '0.6rem',
      },
    },
  },
};
