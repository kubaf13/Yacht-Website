import type { NextPage } from 'next';
import Head from 'next/head';

import { YachtPage } from '@/components/template/YachtPage/YachtPage';
import { annabelleMocks } from '@/components/template/YachtPage/YachtPage.mocks';

const YachtAnnabelle: NextPage = () => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{annabelleMocks.yachtName}</title>
    </Head>
    <YachtPage {...annabelleMocks} />
  </>
);

export default YachtAnnabelle;
