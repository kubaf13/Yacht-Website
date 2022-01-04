import { Palette, Theme } from './theme.types';

const breakpoints = {
  maxWidth: 1400,
  fhd: 1920,
  largeDesktop: 1140,
  desktop: 992,
  tablet: 768,
  mobile: 375,
};

const primaryPalette: Palette = {
  blue: '#003159',
  lightBlue: '#95B5D0',
  paragraph: '#020202',
  grey: '#5C5E60',
  lightGrey: '#5C5E60',
  white: '#FFFFFF',
  lightWhite: 'rgba(255,255,255,0.61)',
  red: '#CE1414',
};

const theme: Theme = {
  breakpoints,
  palette: {
    primaryPalette,
  },
  media: {
    mobile: `screen and (min-width: ${breakpoints.mobile}px)`,
    tablet: `screen and (min-width: ${breakpoints.tablet}px)`,
    desktop: `screen and (min-width: ${breakpoints.desktop}px)`,
    largeDesktop: `screen and (min-width: ${breakpoints.largeDesktop}px)`,
    extraLargeDesktop: `screen and (min-width: ${breakpoints.fhd}px)`,
  },
};

export default theme;
