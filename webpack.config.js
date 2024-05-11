const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const { mode } = env;

  return {
    mode: mode || 'production',

    entry: resolve(__dirname, 'src', 'index.ts'),

    output: {
      path: resolve(__dirname, 'build'),
      filename: '[name].[contenthash].js',
      clean: true,
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: resolve(__dirname, 'public', 'index.html'),
      }),
    ],
  };
};
