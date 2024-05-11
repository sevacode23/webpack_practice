import { resolve } from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

type TMode = 'development' | 'production';

interface IEnv {
  mode: TMode;
}

export default (env: IEnv) => {
  const { mode } = env;

  const config: webpack.Configuration = {
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

  return config;
};
