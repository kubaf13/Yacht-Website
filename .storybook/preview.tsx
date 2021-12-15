import React from "react";
import { GlobalStyle, ThemeProvider } from '@/styles';
import * as nextImage from 'next/image';

const viewports = {
  small: {
    name: 'iPhone SE',
    styles: {
      width: '320px',
      height: '568px',
    },
  },
  mobile: {
    name: 'Small',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '992px',
      height: '1024px',
    },
  },
  largeDesktop: {
    name: 'Large',
    styles: {
      width: '1200px',
      height: '675px',
    },
  },
  extraLargeDesktop: {
    name: 'Extra Large',
    styles: {
      width: '1400px',
      height: '1024px',
    },
  },
};

export const decorators = [
  (storyFn: () => React.ReactNode) => (
    <ThemeProvider>
      <GlobalStyle />
      {storyFn()}
    </ThemeProvider>
  ),
];

export const parameters = {
  viewport: { viewports },
  options: {
    // @ts-ignore
    storySort: (a, b) => {
      if (a[1].kind === 'Welcome') {
        return -1;
      }

      return a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, { numeric: true });
    },
  },
  layout: 'fullscreen',
};

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: props => <img {...props} />
});