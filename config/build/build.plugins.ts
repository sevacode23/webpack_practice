import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { IBuildParams } from './typings';

export const buildPlugins = (
  params: IBuildParams
): Configuration['plugins'] => {
  const { paths } = params;

  const htmlPlugin = new HtmlWebpackPlugin({
    template: paths.html,
  });

  const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css',
  });

  return [htmlPlugin, miniCssExtractPlugin];
};
