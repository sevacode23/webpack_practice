import { Configuration, DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

import { IBuildParams } from './typings';

export const buildPlugins = (
  params: IBuildParams
): Configuration['plugins'] => {
  const { paths, isDev, isAnalyze } = params;

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),

    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),

    new DefinePlugin({
      'process.env': JSON.stringify({
        MODE: isDev ? 'development' : 'production',
        CUSTOM: 23_002,
      }),

      APP_COUNTER_MAX: 10,
    }),

    new ForkTsCheckerWebpackPlugin(),
  ];

  if (isAnalyze) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return plugins;
};
