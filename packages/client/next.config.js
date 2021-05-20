const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')],
  },
  distDir: 'dist/next',
  webpack(config) {
    config.module.rules.push({
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  },
};
