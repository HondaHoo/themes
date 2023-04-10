import {colorSchemeAndMeta} from '@/types';

const lightThemeA: colorSchemeAndMeta = {
  name: '3024 Day',
  black: '#090300',
  red: '#db2d20',
  green: '#01a252',
  yellow: '#fded02',
  blue: '#01a0e4',
  purple: '#a16a94',
  cyan: '#b5e4f4',
  white: '#a5a2a2',
  brightBlack: '#5c5855',
  brightRed: '#e8bbd0',
  brightGreen: '#3a3432',
  brightYellow: '#4a4543',
  brightBlue: '#807d7c',
  brightPurple: '#d6d5d4',
  brightCyan: '#cdab53',
  brightWhite: '#f7f7f7',
  background: '#f7f7f7',
  foreground: '#4a4543',
  cursorColor: '#4a4543',
  selectionBackground: '#a5a2a2',
  meta: {
    isDark: false,
    credits: [
      {
        name: '0x3024',
        link: 'https://github.com/0x3024',
      },
    ],
  },
};

const darkThemeA: colorSchemeAndMeta = {
  name: '3024 Night',
  black: '#090300',
  red: '#db2d20',
  green: '#01a252',
  yellow: '#fded02',
  blue: '#01a0e4',
  purple: '#a16a94',
  cyan: '#b5e4f4',
  white: '#a5a2a2',
  brightBlack: '#5c5855',
  brightRed: '#e8bbd0',
  brightGreen: '#3a3432',
  brightYellow: '#4a4543',
  brightBlue: '#807d7c',
  brightPurple: '#d6d5d4',
  brightCyan: '#cdab53',
  brightWhite: '#f7f7f7',
  background: '#090300',
  foreground: '#a5a2a2',
  cursorColor: '#a5a2a2',
  selectionBackground: '#4a4543',
  meta: {
    isDark: true,
    credits: [
      {
        name: '0x3024',
        link: 'https://github.com/0x3024',
      },
    ],
  },
};

const darkThemeB = {
  name: 'Abernathy',
  black: '#000000',
  red: '#cd0000',
  green: '#00cd00',
  yellow: '#cdcd00',
  blue: '#1093f5',
  purple: '#cd00cd',
  cyan: '#00cdcd',
  white: '#faebd7',
  brightBlack: '#404040',
  brightRed: '#ff0000',
  brightGreen: '#00ff00',
  brightYellow: '#ffff00',
  brightBlue: '#11b5f6',
  brightPurple: '#ff00ff',
  brightCyan: '#00ffff',
  brightWhite: '#ffffff',
  background: '#111416',
  foreground: '#eeeeec',
  cursorColor: '#bbbbbb',
  selectionBackground: '#eeeeec',
  meta: {
    isDark: true,
  },
};

const lightThemeB = {
  name: 'Alabaster',
  black: '#000000',
  red: '#aa3731',
  green: '#448c27',
  yellow: '#cb9000',
  blue: '#325cc0',
  purple: '#7a3e9d',
  cyan: '#0083b2',
  white: '#f7f7f7',
  brightBlack: '#777777',
  brightRed: '#f05050',
  brightGreen: '#60cb00',
  brightYellow: '#ffbc5d',
  brightBlue: '#007acc',
  brightPurple: '#e64ce6',
  brightCyan: '#00aacb',
  brightWhite: '#f7f7f7',
  background: '#f7f7f7',
  foreground: '#000000',
  cursorColor: '#007acc',
  selectionBackground: '#bfdbfe',
  meta: {
    isDark: false,
  },
};

export const themes = [lightThemeA, darkThemeA, darkThemeB, lightThemeB];