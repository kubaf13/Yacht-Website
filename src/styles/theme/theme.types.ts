export interface Palette {
  blue: string;
  lightBlue: string;
  paragraph: string;
  gray: string;
  lightGray: string;
  white: string;
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
