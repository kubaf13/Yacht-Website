import type { NextPage } from 'next';
import Head from 'next/head';

import { YachtPage } from '@/components/template/YachtPage/YachtPage';
import { journeyMocks } from '@/components/template/YachtPage/YachtPage.mocks';

const YachtJourney: NextPage = () => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{journeyMocks.yachtName}</title>
    </Head>
    <YachtPage {...journeyMocks} />
  </>
);

export default YachtJourney;
