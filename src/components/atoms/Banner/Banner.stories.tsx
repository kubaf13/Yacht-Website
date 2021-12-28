import type { FC } from 'react';
import React from 'react';

import { Banner as BannerComponent } from './Banner';
import { bannerMocks } from './Banner.mocks';

export const Banner: FC = () => <BannerComponent {...bannerMocks} />;

export default { title: 'Components/Atoms/Banner' };
