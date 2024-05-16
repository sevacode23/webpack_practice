import { ModuleOptions } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript';

import { removeDataTestIdBabelPlugin } from '../babel';

import { IBuildParams } from './typings';

export const buildLoaders = (params: IBuildParams): ModuleOptions['rules'] => {
  const { isDev } = params;

  const scssLoaders = {
    test: /\.s[ac]ss$/i,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };

  // const tsLoader = {
  //   test: /\.tsx?$/,
  //   use: {
  //     loader: 'ts-loader',
  //     options: {
  //       transpileOnly: true,
  //       getCustomTransformers: () => ({
  //         before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
  //       }),
  //     },
  //   },
  //   exclude: /node_modules/,
  // };

  const babelLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-typescript',
          ['@babel/preset-react', { runtime: isDev ? 'automatic' : 'classic' }],
        ],
        plugins: !isDev
          ? [
              [
                removeDataTestIdBabelPlugin,
                {
                  props: ['data-testid'],
                },
              ],
            ]
          : undefined,
      },
    },
  };

  const imagesLoader = {
    test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
    type: 'asset/resource',
  };

  return [scssLoaders, babelLoader, imagesLoader];
};
