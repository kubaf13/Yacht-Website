import { navigationMocks } from '@molecules/Navigation/Navigation.mocks';
import { footerMocks } from '@organisms/Footer/Footer.mocks';
import { AppProps } from 'next/app';
import { ReactElement } from 'react';

import { Layout } from '@/components/template/Layout/Layout';
import { GlobalStyle, ThemeProvider } from '@/styles';

const YachtRentingApp = ({ Component, pageProps }: AppProps): ReactElement => (
  <ThemeProvider>
    <Layout footerProps={footerMocks} navigation={navigationMocks}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
);

export default YachtRentingApp;
