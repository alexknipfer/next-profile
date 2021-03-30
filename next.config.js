module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap');
    }

    return config;
  },
  images: {
    domains: ['images.prismic.io', 'i.scdn.co'],
  },
  future: {
    webpack5: true,
    strictPostcssConfiguration: true,
  },
};
