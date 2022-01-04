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
          url: '/yachts/yacht-annabelle/submit',
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
          url: '/yachts/yacht-annabelle/submit',
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
          url: '/yachts/yacht-annabelle/submit',
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
          url: '/yachts/yacht-annabelle/submit',
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
          url: '/yachts/yacht-annabelle/submit',
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
export const paradiseMocks: YachtPageTypes = {
  banner: {
    image: {
      imageUrl: '/static/images/Yachts/yacht2.jpg',
      altText: 'Paradise Yacht',
    },
  },
  yachtName: 'Yacht "Paradise"',
  description:
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  size: 'to 8 people',
  helmsman: true,
  whatWater: 'sweet & salt water',
  yachtLength: 29,
  yachtDiveLevel: 1.5,
  launchingDate: 2019,
  speed: '2x50hp',
  bookings: {
    bookings: [
      {
        date: '03.03-14.03',
        price: 1400,
        sale: 1200,
        button: {
          url: '/yachts/yacht-paradise/submit',
          label: 'book',
          ariaLabel: 'Book this date',
          openInNewTab: false,
          variant: VARIANTS.SECONDARY,
          isAnimated: false,
        },
      },
      {
        date: '07.04-14.04',
        price: 1500,
        sale: 1400,
        button: {
          url: '/yachts/yacht-paradise/submit',
          label: 'book',
          ariaLabel: 'Book this date',
          openInNewTab: false,
          variant: VARIANTS.SECONDARY,
          isAnimated: false,
        },
      },
      {
        date: '26.04-05.05',
        price: 1660,
        button: {
          url: '/yachts/yacht-paradise/submit',
          label: 'book',
          ariaLabel: 'Book this date',
          openInNewTab: false,
          variant: VARIANTS.SECONDARY,
          isAnimated: false,
        },
      },
      {
        date: '22.06-10.07',
        price: 2700,
        button: {
          url: '/yachts/yacht-paradise/submit',
          label: 'book',
          ariaLabel: 'Book this date',
          openInNewTab: false,
          variant: VARIANTS.SECONDARY,
          isAnimated: false,
        },
      },
      {
        date: '21.08-30.08',
        price: 2100,
        button: {
          url: '/yachts/yacht-paradise/submit',
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
export const journeyMocks: YachtPageTypes = {
  banner: {
    image: {
      imageUrl: '/static/images/Yachts/yacht3.jpg',
      altText: 'Journey Yacht',
    },
  },
  yachtName: 'Yacht "Journey"',
  description:
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  size: 'to 25 people',
  helmsman: true,
  whatWater: 'sweet & salt water',
  yachtLength: 55,
  yachtDiveLevel: 3.5,
  launchingDate: 2018,
  speed: '4x60hp',
  bookings: {
    bookings: [
      {
        date: '02.02-21.02',
        price: 5500,
        sale: 4999,
        button: {
          url: '/yachts/yacht-journey/submit',
          label: 'book',
          ariaLabel: 'Book this date',
          openInNewTab: false,
          variant: VARIANTS.SECONDARY,
          isAnimated: false,
        },
      },
      {
        date: '07.04-14.04',
        price: 4500,
        button: {
          url: '/yachts/yacht-journey/submit',
          label: 'book',
          ariaLabel: 'Book this date',
          openInNewTab: false,
          variant: VARIANTS.SECONDARY,
          isAnimated: false,
        },
      },
      {
        date: '22.04-05.05',
        price: 6060,
        sale: 5459,
        button: {
          url: '/yachts/yacht-journey/submit',
          label: 'book',
          ariaLabel: 'Book this date',
          openInNewTab: false,
          variant: VARIANTS.SECONDARY,
          isAnimated: false,
        },
      },
      {
        date: '22.06-10.07',
        price: 7000,
        button: {
          url: '/yachts/yacht-journey/submit',
          label: 'book',
          ariaLabel: 'Book this date',
          openInNewTab: false,
          variant: VARIANTS.SECONDARY,
          isAnimated: false,
        },
      },
      {
        date: '21.08-30.08',
        price: 5900,
        button: {
          url: '/yachts/yacht-journey/submit',
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
export const amandaMocks: YachtPageTypes = {
  banner: {
    image: {
      imageUrl: '/static/images/Yachts/yacht4.jpg',
      altText: 'Amanda Yacht',
    },
  },
  yachtName: 'Yacht "Amanda"',
  description:
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  size: 'to 5 people',
  helmsman: false,
  whatWater: 'sweet water',
  yachtLength: 35,
  yachtDiveLevel: 2.1,
  launchingDate: 2020,
  speed: '2x40hp',
  bookings: {
    bookings: [
      {
        date: '02.02-21.02',
        price: 1200,
        sale: 999,
        button: {
          url: '/yachts/yacht-amanda/submit',
          label: 'book',
          ariaLabel: 'Book this date',
          openInNewTab: false,
          variant: VARIANTS.SECONDARY,
          isAnimated: false,
        },
      },
      {
        date: '11.03-19.03',
        price: 1900,
        button: {
          url: '/yachts/yacht-amanda/submit',
          label: 'book',
          ariaLabel: 'Book this date',
          openInNewTab: false,
          variant: VARIANTS.SECONDARY,
          isAnimated: false,
        },
      },
      {
        date: '22.04-05.05',
        price: 2300,
        button: {
          url: '/yachts/yacht-amanda/submit',
          label: 'book',
          ariaLabel: 'Book this date',
          openInNewTab: false,
          variant: VARIANTS.SECONDARY,
          isAnimated: false,
        },
      },
      {
        date: '22.06-10.07',
        price: 3900,
        button: {
          url: '/yachts/yacht-amanda/submit',
          label: 'book',
          ariaLabel: 'Book this date',
          openInNewTab: false,
          variant: VARIANTS.SECONDARY,
          isAnimated: false,
        },
      },
      {
        date: '28.08-10.09',
        price: 3500,
        sale: 3299,
        button: {
          url: '/yachts/yacht-amanda/submit',
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
