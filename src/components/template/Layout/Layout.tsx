import Footer from '@organisms/Footer';
import { Header } from '@organisms/Header/Header';
import React, { ReactElement } from 'react';

import { LayoutWrapper, StyledMainContent } from './Layout.styled';
import { LayoutTypes } from './Layout.types';

export const Layout = ({
  footerProps,
  navigation,
  children,
}: LayoutTypes): ReactElement => (
  <LayoutWrapper>
    <StyledMainContent>
      <Header navigation={navigation} />
      <main id="mainContent">{children}</main>
    </StyledMainContent>
    <Footer {...footerProps} />
  </LayoutWrapper>
);
