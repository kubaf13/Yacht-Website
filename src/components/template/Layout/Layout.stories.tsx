import CenteringContainer from '@atoms/CenteringContainter';
import type { FC } from 'react';
import React from 'react';

import { Layout as LayoutComponent } from './Layout';
import { layoutMocks } from './Layout.mocks';

export const Layout: FC = () => (
  <LayoutComponent {...layoutMocks}>
    <CenteringContainer>Children</CenteringContainer>
  </LayoutComponent>
);

export default { title: 'Layout/Custom Layout' };
