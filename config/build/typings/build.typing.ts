export type TMode = 'development' | 'production';

export interface IEnv {
  mode: TMode;
  port: number;
}

export interface IPaths {
  entry: string;
  output: string;
  html: string;
}

export interface IBuildParams {
  isDev: boolean;
  paths: IPaths;
  port?: number;
}
