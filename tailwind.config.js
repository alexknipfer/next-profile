module.exports = {
  darkMode: 'class',
  variants: {
    margin: ['responsive', 'last'],
  },
  theme: {
    extend: {
      fontSize: {
        tiny: '0.6rem',
      },
      colors: {
        navigation: 'var(--bg-background-navigation)',
        'navigation-hover': 'var(--bg-background-navigation-hover)',
        primary: 'var(--bg-background-primary)',
        text: 'var(--bg-background-text)',
        overlay: 'var(--bg-background-overlay)',
        'project-card-shadow': 'var(--bg-project-card-shadow)',
        'project-card-details': 'var(--bg-project-card-details)',
        'card-border': 'var(--card-border)',
        'horizontal-rule': 'var(--horizontal-rule)',
        copy: {
          heading: 'var(--text-copy-heading)',
          body: 'var(--text-copy-body)',
          link: 'var(--text-copy-link)',
          'project-card': 'var(--text-copy-project-card)',
        },
      },
      boxShadow: {
        'card-shadow': 'var(--card-shadow)',
      },
    },
  },
};
