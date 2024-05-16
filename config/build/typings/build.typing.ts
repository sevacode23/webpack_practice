export type TMode = 'development' | 'production';

export interface IEnv {
  mode: TMode;
  port: number;
  isAnalyze?: boolean;
}

export interface IPaths {
  entry: string;
  output: string;
  html: string;
  src: string;
  favicon: string;
  localesPublic: string;
  localesOutput: string;
}

export interface IBuildParams {
  isDev: boolean;
  paths: IPaths;
  port?: number;
  isAnalyze?: boolean;
}
