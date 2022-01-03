import type { FC } from 'react';
import React from 'react';

import { YachtPage as YachtPageTemplate } from './YachtPage';
import { annabelleMocks } from './YachtPage.mocks';

export const YachtPage: FC = () => <YachtPageTemplate {...annabelleMocks} />;

export default { title: 'Templates/Yacht Page' };
