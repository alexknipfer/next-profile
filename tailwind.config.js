module.exports = {
  theme: {
    textColor: theme => ({
      ...theme('colors'),
      primaryGray: '#443a3a',
    }),
    backgroundColor: theme => ({
      ...theme('colors'),
      primaryGray: '#443a3a',
      overlayGray: 'rgba(255, 255, 255, 0.95)',
    }),
  },
};
