import { ModuleOptions } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { IBuildParams } from './typings';

export const buildLoaders = (params: IBuildParams): ModuleOptions['rules'] => {
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [cssLoader, tsLoader];
};
