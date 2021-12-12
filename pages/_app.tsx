import { AppProps } from 'next/app';
import { ReactElement } from 'react';

import { GlobalStyle, ThemeProvider } from '@/styles';

const YachtRentingApp = ({ Component, pageProps }: AppProps): ReactElement => (
  <>
    <ThemeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default YachtRentingApp;
