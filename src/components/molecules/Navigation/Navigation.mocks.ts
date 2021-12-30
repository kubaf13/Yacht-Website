import type { NavigationTypes } from './Navigation.types';

export const navigationMocks: NavigationTypes = {
  links: [
    {
      url: '/#about-us',
      ariaLabel: 'go to our story section',
      label: 'about us',
      isOpenedInNewTab: false,
    },
    {
      url: '/#our-yachts',
      ariaLabel: 'go to our yacht section',
      label: 'our yachts',
      isOpenedInNewTab: false,
    },
    {
      url: '/#gallery',
      ariaLabel: 'go to gallery section',
      label: 'gallery',
      isOpenedInNewTab: false,
    },
    {
      url: '/#contact',
      ariaLabel: 'go to contact us form',
      label: 'contact',
      isOpenedInNewTab: false,
    },
  ],
};
