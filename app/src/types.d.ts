export type validThemeType = {
  name: string;
  black: string;
  red: string;
  green: string;
  yellow: string;
  blue: string;
  purple: string;
  cyan: string;
  white: string;
  brightBlack: string;
  brightRed: string;
  brightGreen: string;
  brightYellow: string;
  brightBlue: string;
  brightPurple: string;
  brightCyan: string;
  brightWhite: string;
  background: string;
  foreground: string;
  cursorColor?: string;
  selectionBackground?: string;
};

// optional 'cursorColor' | 'selectionBackground'

export type validKeysType = Array<
  | 'name'
  | 'black'
  | 'red'
  | 'green'
  | 'yellow'
  | 'blue'
  | 'purple'
  | 'cyan'
  | 'white'
  | 'brightBlack'
  | 'brightRed'
  | 'brightGreen'
  | 'brightYellow'
  | 'brightBlue'
  | 'brightPurple'
  | 'brightCyan'
  | 'brightWhite'
  | 'background'
  | 'foreground'
  | 'cursorColor'
  | 'selectionBackground'
>;
type creditType = {
  name: 'string';
  link: 'string';
};
type metaType = {isDark: boolean; credits?: creditType[]};

export type themeType = validThemeType & {meta: metaType};

export type backgroundKeyType =
  | 'black'
  | 'red'
  | 'green'
  | 'yellow'
  | 'blue'
  | 'purple'
  | 'cyan'
  | 'white'
  | 'background';

export type textKeyType =
  | 'black'
  | 'brightBlack'
  | 'red'
  | 'brightRed'
  | 'green'
  | 'brightGreen'
  | 'yellow'
  | 'brightYellow'
  | 'blue'
  | 'brightBlue'
  | 'purple'
  | 'brightPurple'
  | 'cyan'
  | 'brightCyan'
  | 'white'
  | 'brightWhite';

type shadeType = 'LIGHT' | 'DARK';
type themeShadeType = shadeType | 'ANY';
type themeShadeObjectType = {LIGHT: 'LIGHT'; DARK: 'DARK'; ANY: 'ANY'};

type loadActionType = {
  type: 'LOAD';
  themes: themeType[];
  initialTheme?: string;
};

type setThemeType = {
  type: 'SET';
  theme: string;
};

type setScreenSizeType = {
  type: 'SIZE';
  isSmallScreenSize: boolean;
};

type setScreenSizeType = {
  type: 'SHADE';
  themeShade: themeShadeType;
};

type setPreviewType = {
  type: 'PREVIEW';
  themeShade: previewType;
};

type setNextType = {
  type: 'NEXT';
};

type setPrevType = {
  type: 'PREV';
};

type messageType =
  | {
      type: 'show';
      title: string;
      message: string;
    }
  | {
      type: 'hide';
    };

export type actionTypes =
  | loadActionType
  | setThemeType
  | setScreenSizeType
  | setScreenSizeType
  | setPreviewType
  | setNextType
  | setPrevType
  | messageType;

export type previewType = 'console' | 'colour';
