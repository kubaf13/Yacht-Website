import type { NextPage } from 'next';
import Head from 'next/head';

import { YachtPage } from '@/components/template/YachtPage/YachtPage';
import { amandaMocks } from '@/components/template/YachtPage/YachtPage.mocks';

const YachtAmanda: NextPage = () => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{amandaMocks.yachtName}</title>
    </Head>
    <YachtPage {...amandaMocks} />
  </>
);

export default YachtAmanda;
