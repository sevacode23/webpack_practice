const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const { mode } = env;

  return {
    mode: mode || 'production',

    entry: resolve(__dirname, 'src', 'index.js'),

    output: {
      path: resolve(__dirname, 'build'),
      filename: '[name].[contenthash].js',
      clean: true,
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: resolve(__dirname, 'public', 'index.html'),
      }),
    ],
  };
};
