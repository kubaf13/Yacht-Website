import { AppProps } from 'next/app';
import { Head } from 'next/document';
import { ReactElement } from 'react';

import { GlobalStyle, ThemeProvider } from '@/styles';

const AkademiaMistrzaApp = ({
  Component,
  pageProps,
}: AppProps): ReactElement => (
  <>
    <Head>
      <link rel="stylesheet" href="/fonts/fonts.css" />
    </Head>
    <ThemeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default AkademiaMistrzaApp;
