import { CodeSurferTheme } from '@code-surfer/themes';

export interface Token {
  type: string;
  content: string;
  focus?: boolean;
  key?: number;
}
export interface Line {
  tokens: Token[];
  key: number;
  content: string;
  focus?: boolean;
  focusPerToken?: boolean;
}

export interface Step {
  lines: Line[];
  title?: { value: string };
  subtitle?: { value: string };
  focusCenter: number;
  dimensions?: any;
}

export type InputStep = {
  code: string;
  focus?: string;
  title?: { value: string };
  subtitle?: { value: string };
  lang?: string;
};

export type ParsedSteps = {
  steps: Step[];
  tokens: string[][];
  types: string[][];
  maxLineCount: number;
  showNumbers?: boolean;
};

export interface CodeProps {
  steps?: InputStep[];
  parsedSteps?: ParsedSteps;
  progress: number;
  theme?: CodeSurferTheme;
  nonblocking?: boolean;
}
