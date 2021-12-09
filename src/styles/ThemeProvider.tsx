import React from 'react';
import { ThemeProvider as ThemeProvideBase } from 'styled-components';

import theme from './theme/theme';

interface ThemeProviderProps {
  children?: React.ReactNode;
}

const ThemeProvider = ({
  children,
}: ThemeProviderProps): React.ReactElement => (
  <ThemeProvideBase theme={theme}>{children}</ThemeProvideBase>
);

export default ThemeProvider;
