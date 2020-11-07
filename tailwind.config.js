module.exports = {
  theme: {
    extend: {
      fontSize: {
        tiny: '0.6rem',
      },
      colors: {
        background: {
          navigation: 'var(--bg-background-navigation)',
          'navigation-hover': 'var(--bg-background-navigation-hover)',
          primary: 'var(--bg-background-primary)',
          text: 'var(--bg-background-text)',
          overlay: 'var(--bg-background-overlay)',
        },
        copy: {
          heading: 'var(--text-copy-heading)',
          body: 'var(--text-copy-body)',
        },
      },
    },
  },
};
