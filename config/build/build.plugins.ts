import { Configuration, DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { IBuildParams } from './typings';

export const buildPlugins = (
  params: IBuildParams
): Configuration['plugins'] => {
  const { paths, isDev, isAnalyze } = params;

  const htmlPlugin = new HtmlWebpackPlugin({
    template: paths.html,
  });

  const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css',
  });

  const definePlugin = new DefinePlugin({
    'process.env': JSON.stringify({
      MODE: isDev ? 'development' : 'production',
      CUSTOM: 23_002,
    }),

    APP_COUNTER_MAX: 10,
  });

  const plugins: Configuration['plugins'] = [
    htmlPlugin,
    miniCssExtractPlugin,
    definePlugin,
  ];

  if (isAnalyze) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return plugins;
};
