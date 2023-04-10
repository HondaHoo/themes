import {colourShemeAndMeta} from '@/types';
import {
  getNextPrevColorScheme,
  colorSchemesFilteredByCurrentLightness,
} from './colourSchemeUtilities';

const lightColorSchemes = [
  {
    name: 'Light A',
    meta: {
      isDark: false,
    },
  },
  {
    name: 'Light B',
    meta: {
      isDark: false,
    },
  },
  {
    name: 'Light C',
    meta: {
      isDark: false,
    },
  },
];

const darkColorSchemes = [
  {
    name: 'Dark A',
    meta: {
      isDark: true,
    },
  },
  {
    name: 'Dark B',
    meta: {
      isDark: true,
    },
  },
];

const colorSchemes = [...lightColorSchemes, ...darkColorSchemes];

test('get next color scheme', () => {
  expect(
    getNextPrevColorScheme(
      lightColorSchemes as colourShemeAndMeta[],
      'Light A',
      'next'
    )
  ).toBe('Light B');
});

test('get previous color scheme', () => {
  expect(
    getNextPrevColorScheme(
      lightColorSchemes as colourShemeAndMeta[],
      'Light B',
      'prev'
    )
  ).toBe('Light A');
});

test('get next color scheme when at end of list', () => {
  expect(
    getNextPrevColorScheme(
      lightColorSchemes as colourShemeAndMeta[],
      'Light C',
      'next'
    )
  ).toBe('Light A');
});

test('get previous color scheme when at start of list', () => {
  expect(
    getNextPrevColorScheme(
      lightColorSchemes as colourShemeAndMeta[],
      'Light A',
      'prev'
    )
  ).toBe('Light C');
});

test('throw error is color scheme not found', () => {
  expect(() =>
    getNextPrevColorScheme(
      lightColorSchemes as colourShemeAndMeta[],
      'Light D',
      'next'
    )
  ).toThrow();
});

test('filter color schemes by darkness', () => {
  const isDark = true;
  expect(
    colorSchemesFilteredByCurrentLightness(
      colorSchemes as colourShemeAndMeta[],
      isDark
    )
  ).toEqual(darkColorSchemes);
  expect(
    colorSchemesFilteredByCurrentLightness(
      colorSchemes as colourShemeAndMeta[],
      isDark
    )
  ).not.toEqual(lightColorSchemes);
});

test('filter color schemes by lightness', () => {
  const isDark = false;
  expect(
    colorSchemesFilteredByCurrentLightness(
      colorSchemes as colourShemeAndMeta[],
      isDark
    )
  ).toEqual(lightColorSchemes);
  expect(
    colorSchemesFilteredByCurrentLightness(
      colorSchemes as colourShemeAndMeta[],
      isDark
    )
  ).not.toEqual(darkColorSchemes);
});
