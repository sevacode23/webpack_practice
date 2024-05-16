import type { Configuration } from 'webpack-dev-server';

import { IBuildParams } from './typings';

export const buildDevServer = (params: IBuildParams): Configuration => {
  const { port = 3000 } = params;

  return {
    port,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
};
