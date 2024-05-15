import { ResolveOptions } from 'webpack';

import { IBuildParams } from './typings';

export const buildResolve = (params: IBuildParams): ResolveOptions => ({
  extensions: ['.tsx', '.ts', '.js'],
  alias: {
    '@': params.paths.src,
  },
});
