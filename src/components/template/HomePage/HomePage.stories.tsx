import type { FC } from 'react';
import React from 'react';

import { HomePage as HomePageTemplate } from './HomePage';
import { homePageMocks } from './HomePage.mocks';

export const HomePage: FC = () => <HomePageTemplate {...homePageMocks} />;

export default { title: 'Templates/Home Page' };
