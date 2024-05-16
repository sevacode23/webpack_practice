import { IBuildParams } from './typings';

export const buildDevtool = (params: IBuildParams) => {
  const { isDev } = params;

  return isDev ? 'eval-cheap-module-source-map' : 'source-map';
};
