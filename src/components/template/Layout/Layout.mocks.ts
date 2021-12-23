import { navigationMocks } from '@molecules/Navigation/Navigation.mocks';
import { footerMocks } from '@organisms/Footer/Footer.mocks';

import type { LayoutTypes } from '@/components/template/Layout/Layout.types';

export const layoutMocks: LayoutTypes = {
  footerProps: footerMocks,
  navigation: navigationMocks,
  children: 'Children',
};
