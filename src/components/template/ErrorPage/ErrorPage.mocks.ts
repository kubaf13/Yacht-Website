import { VARIANTS } from '@atoms/LinkButton/LinkButton.types';

import type { ErrorPageTypes } from './ErrorPage.types';

export const errorPageMocks: ErrorPageTypes = {
  title: 'Oops, it seems this page do not exist',
  linkButton: {
    url: '/',
    variant: VARIANTS.PRIMARY,
    isAnimated: true,
    openInNewTab: false,
    label: 'go back to homepage',
    ariaLabel: 'go back to homepage',
  },
};
