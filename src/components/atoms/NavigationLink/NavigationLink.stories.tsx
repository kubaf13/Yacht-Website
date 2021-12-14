import React, { FC } from 'react';

import { NavigationLink as NavigationLinkComponent } from './NavigationLink';
import { navigationLinkMocks } from './NavigationLink.mocks';

export const NavigationLink: FC = () => (
  <NavigationLinkComponent {...navigationLinkMocks} />
);

export default { title: 'Components/Atoms/Navigation Link' };
