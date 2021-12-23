import { NavigationTypes } from '@molecules/Navigation/Navigation.types';
import { FooterTypes } from '@organisms/Footer/Footer.types';
import { ReactNode } from 'react';

export interface LayoutTypes {
  children: ReactNode;
  footerProps: FooterTypes;
  navigation: NavigationTypes;
}
