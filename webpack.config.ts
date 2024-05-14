import { resolve } from 'path';

import { IEnv, buildConfig } from './config/build';

export default (env: IEnv) => {
  const { mode, port } = env;

  const isDev = mode === 'development';

  return buildConfig({
    isDev,
    paths: {
      entry: resolve(__dirname, 'src', 'index.tsx'),
      output: resolve(__dirname, 'build'),
      html: resolve(__dirname, 'public', 'index.html'),
    },
    port,
  });
};
