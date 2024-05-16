import { resolve } from 'path';

import { IEnv, buildConfig } from './config/build';

export default (env: IEnv) => {
  const { mode, port, isAnalyze } = env;

  const isDev = mode === 'development';

  const pathSrc = resolve(__dirname, 'src');
  const pathPublic = resolve(__dirname, 'public');
  const pathBuild = resolve(__dirname, 'build');

  return buildConfig({
    isDev,
    paths: {
      src: pathSrc,
      entry: resolve(pathSrc, 'index.tsx'),
      output: pathBuild,
      html: resolve(pathPublic, 'index.html'),
      favicon: resolve(pathPublic, 'favicon.ico'),
      localesPublic: resolve(pathPublic, 'locales'),
      localesOutput: resolve(pathBuild, 'locales'),
    },
    port,
    isAnalyze,
  });
};
