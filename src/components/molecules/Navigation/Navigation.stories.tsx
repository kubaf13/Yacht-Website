import React, { FC } from 'react';

import { Navigation as NavigationComponent } from './Navigation';
import { navigationMocks } from './Navigation.mocks';

export const Navigation: FC = () => (
  <NavigationComponent {...navigationMocks} isOpened />
);

export default { title: 'Components/Molecules/Navigation' };
