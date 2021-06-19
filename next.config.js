module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap');
    }

    return config;
  },
  images: {
    domains: ['i.scdn.co'],
  },
  future: {
    strictPostcssConfiguration: true,
  },
};
