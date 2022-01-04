import type { NextPage } from 'next';
import Head from 'next/head';

import { ErrorPage } from '@/components/template/ErrorPage/ErrorPage';
import { errorPageMocks } from '@/components/template/ErrorPage/ErrorPage.mocks';

const Custom404: NextPage = () => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Sorry, this page do not exists</title>
    </Head>
    <ErrorPage {...errorPageMocks} />
  </>
);

export default Custom404;
