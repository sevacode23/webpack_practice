import { Configuration, DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

import { IBuildParams } from './typings';

export const buildPlugins = (
  params: IBuildParams
): Configuration['plugins'] => {
  const { paths, isDev, isAnalyze } = params;

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: paths.favicon,
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

    new CopyPlugin({
      patterns: [
        {
          from: paths.localesPublic,
          to: paths.localesOutput,
        },
      ],
    }),
  ];

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin());
  }

  if (isAnalyze) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return plugins;
};
