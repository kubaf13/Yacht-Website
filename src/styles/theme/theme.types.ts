export interface Palette {
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
}

export interface Theme {
  breakpoints;
  palette: {
    primaryPalette: Palette;
    secondaryPalette: Palette;
  };
  media: {
    small: string;
    mobile: string;
    tablet: string;
    desktop: string;
    largeDesktop: string;
    extraLargeDesktop: string;
  };
}
