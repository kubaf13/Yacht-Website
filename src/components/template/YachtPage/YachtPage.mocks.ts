import { bannerMocks } from '@atoms/Banner/Banner.mocks';
import { VARIANTS } from '@atoms/LinkButton/LinkButton.types';

import type { YachtPageTypes } from './YachtPage.types';

export const annabelleMocks: YachtPageTypes = {
  banner: bannerMocks,
  yachtName: 'Yacht "Annabelle"',
  description:
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  size: 'to 10 people',
  helmsman: false,
  whatWater: 'sweet water',
  yachtLength: 39,
  yachtDiveLevel: 1.11,
  launchingDate: 2014,
  speed: '2x40hp',
  bookings: {
    bookings: [
      {
        date: '01.02-14.02',
        price: 1400,
        sale: 1200,
        button: {
          url: '/submit',
          label: 'book',
          ariaLabel: 'Book this date',
          openInNewTab: false,
          variant: VARIANTS.SECONDARY,
          isAnimated: false,
        },
      },
      {
        date: '01.02-14.02',
        price: 1400,
        sale: 1200,
        button: {
          url: '/submit',
          label: 'book',
          ariaLabel: 'Book this date',
          openInNewTab: false,
          variant: VARIANTS.SECONDARY,
          isAnimated: false,
        },
      },
      {
        date: '01.03-14.03',
        price: 1560,
        button: {
          url: '/submit',
          label: 'book',
          ariaLabel: 'Book this date',
          openInNewTab: false,
          variant: VARIANTS.SECONDARY,
          isAnimated: false,
        },
      },
      {
        date: '22.03-30.03',
        price: 1600,
        button: {
          url: '/submit',
          label: 'book',
          ariaLabel: 'Book this date',
          openInNewTab: false,
          variant: VARIANTS.SECONDARY,
          isAnimated: false,
        },
      },
      {
        date: '01.06-14.06',
        price: 2100,
        button: {
          url: '/submit',
          label: 'book',
          ariaLabel: 'Book this date',
          openInNewTab: false,
          variant: VARIANTS.SECONDARY,
          isAnimated: false,
        },
      },
    ],
  },
};
