import type { NextPage } from 'next';

import { YachtPage } from '@/components/template/YachtPage/YachtPage';
import { annabelleMocks } from '@/components/template/YachtPage/YachtPage.mocks';

const YachtAnnabelle: NextPage = () => <YachtPage {...annabelleMocks} />;

export default YachtAnnabelle;
