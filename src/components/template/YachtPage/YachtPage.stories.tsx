import type { FC } from 'react';
import React from 'react';

import { YachtPage as YachtPageTemplate } from './YachtPage';
import { yachtPageMocks } from './YachtPage.mocks';

export const YachtPage: FC = () => <YachtPageTemplate {...yachtPageMocks} />;

export default { title: 'Templates/Yacht Page' };
