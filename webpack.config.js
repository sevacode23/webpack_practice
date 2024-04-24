const { resolve } = require('path');

module.exports = {
  mode: 'production',

  entry: resolve(__dirname, 'src', 'index.js'),

  output: {
    path: resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
};
