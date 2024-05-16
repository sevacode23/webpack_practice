import { Configuration } from 'webpack';

import { IBuildParams } from './typings';
import { buildLoaders } from './build.loaders';
import { buildResolve } from './build.resolve';
import { buildPlugins } from './build.plugins';
import { buildDevServer } from './build.dev-server';
import { buildDevtool } from './build.devtool';

export const buildConfig = (params: IBuildParams): Configuration => {
  const { isDev, paths } = params;

  const config: Configuration = {
    mode: isDev ? 'development' : 'production',
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js',
      clean: true,
    },

    plugins: buildPlugins(params),
    module: { rules: buildLoaders(params) },
    resolve: buildResolve(params),
    devtool: buildDevtool(params),
  };

  if (isDev) {
    config.devServer = buildDevServer(params);
  }

  return config;
};
