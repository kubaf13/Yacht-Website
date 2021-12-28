import type { NextPage } from 'next';

import { YachtPage } from '@/components/template/YachtPage/YachtPage';
import { yachtPageMocks } from '@/components/template/YachtPage/YachtPage.mocks';

const YachtAnnabelle: NextPage = () => <YachtPage {...yachtPageMocks} />;

export default YachtAnnabelle;
