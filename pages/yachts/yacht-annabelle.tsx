import type { NextPage } from 'next';

import { annabelleMocks } from '@/components/template/YachtPage/AnnabelleMocks';
import { YachtPage } from '@/components/template/YachtPage/YachtPage';

const YachtAnnabelle: NextPage = () => <YachtPage {...annabelleMocks} />;

export default YachtAnnabelle;
