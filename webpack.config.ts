import { resolve } from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

type TMode = 'development' | 'production';

interface IEnv {
  mode: TMode;
  port: number;
}

export default (env: IEnv) => {
  const { mode, port } = env;

  const isDev = mode === 'development';

  const config: webpack.Configuration = {
    mode: mode || 'production',

    entry: resolve(__dirname, 'src', 'index.tsx'),

    output: {
      path: resolve(__dirname, 'build'),
      filename: '[name].[contenthash].js',
      clean: true,
    },

    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
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

  if (isDev) {
    config.devtool = 'inline-source-map';
    config.devServer = { port: port || 3000, open: true };
  }

  return config;
};
