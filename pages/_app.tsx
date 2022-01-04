import { navigationMocks } from '@molecules/Navigation/Navigation.mocks';
import { footerMocks } from '@organisms/Footer/Footer.mocks';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement } from 'react';

import { Layout } from '@/components/template/Layout/Layout';
import { GlobalStyle, ThemeProvider } from '@/styles';

const YachtRentingApp = ({ Component, pageProps }: AppProps): ReactElement => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Rent A Yacht</title>
      <link rel="stylesheet" href="/fonts/fonts.css" />
    </Head>
    <ThemeProvider>
      <GlobalStyle />
      <Layout footerProps={footerMocks} navigation={navigationMocks}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </>
);

export default YachtRentingApp;
