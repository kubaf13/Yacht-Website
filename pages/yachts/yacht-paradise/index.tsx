import type { NextPage } from 'next';
import Head from 'next/head';

import { YachtPage } from '@/components/template/YachtPage/YachtPage';
import { paradiseMocks } from '@/components/template/YachtPage/YachtPage.mocks';

const YachtParadise: NextPage = () => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{paradiseMocks.yachtName}</title>
    </Head>
    <YachtPage {...paradiseMocks} />
  </>
);

export default YachtParadise;
