import React from 'react';
import { GlobalStyle, ThemeProvider } from '@/styles';

export default (storyFn: () => React.ReactNode) => (
  <ThemeProvider>
    <GlobalStyle />
    {storyFn()}
  </ThemeProvider>
);
