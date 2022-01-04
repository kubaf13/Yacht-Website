export interface Palette {
  blue: string;
  lightBlue: string;
  paragraph: string;
  grey: string;
  lightGrey: string;
  white: string;
  lightWhite: string;
  red: string;
}

export interface Theme {
  breakpoints;
  palette: {
    primaryPalette: Palette;
  };
  media: {
    mobile: string;
    tablet: string;
    desktop: string;
    largeDesktop: string;
    extraLargeDesktop: string;
  };
}
