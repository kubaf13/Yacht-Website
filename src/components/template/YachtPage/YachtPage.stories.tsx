import type { FC } from 'react';
import React from 'react';

import { annabelleMocks } from './AnnabelleMocks';
import { YachtPage as YachtPageTemplate } from './YachtPage';

export const YachtPage: FC = () => <YachtPageTemplate {...annabelleMocks} />;

export default { title: 'Templates/Yacht Page' };
