import { VARIANTS } from '@atoms/LinkButton/LinkButton.types';

import type { AcceptShippingTypes } from './AcceptShipping.types';

export const acceptShippingMocks: AcceptShippingTypes = {
  title: 'Accept Shipping',
  yacht: {
    yachtName: 'Yacht Annabelle',
    bookingDate: '01.02 - 14.02',
    price: 1199,
    sale: 1000,
    declineButton: {
      isAnimated: false,
      variant: VARIANTS.THIRD,
      openInNewTab: false,
      ariaLabel: 'Go back to Yacht Page',
      label: 'decline',
      url: '/yachts/yacht-annabelle',
    },
    acceptButton: {
      ariaLabel: 'Accept all terms',
      label: 'accept',
    },
    yachtImage: {
      image: {
        imageUrl: '/static/images/Yachts/yacht5.jpg',
        altText: 'Annabelle Yacht',
      },
    },
  },
};
export const amandaShippingMocks: AcceptShippingTypes = {
  title: 'Accept Shipping',
  yacht: {
    yachtName: 'Yacht Amanda',
    bookingDate: '01.03 - 14.03',
    price: 1299,
    declineButton: {
      isAnimated: false,
      variant: VARIANTS.THIRD,
      openInNewTab: false,
      ariaLabel: 'Go back to Yacht Page',
      label: 'decline',
      url: '/yachts/yacht-amanda',
    },
    acceptButton: {
      ariaLabel: 'Accept all terms',
      label: 'accept',
    },
    yachtImage: {
      image: {
        imageUrl: '/static/images/Yachts/yacht4.jpg',
        altText: 'Amanda Yacht',
      },
    },
  },
};
export const journeyShippingMocks: AcceptShippingTypes = {
  title: 'Accept Shipping',
  yacht: {
    yachtName: 'Yacht Journey',
    bookingDate: '01.03 - 14.03',
    price: 1399,
    declineButton: {
      isAnimated: false,
      variant: VARIANTS.THIRD,
      openInNewTab: false,
      ariaLabel: 'Go back to Yacht Page',
      label: 'decline',
      url: '/yachts/yacht-journey',
    },
    acceptButton: {
      ariaLabel: 'Accept all terms',
      label: 'accept',
    },
    yachtImage: {
      image: {
        imageUrl: '/static/images/Yachts/yacht3.jpg',
        altText: 'Journey Yacht',
      },
    },
  },
};
export const paradiseShippingMocks: AcceptShippingTypes = {
  title: 'Accept Shipping',
  yacht: {
    yachtName: 'Yacht Paradise',
    bookingDate: '01.03 - 14.03',
    price: 1399,
    declineButton: {
      isAnimated: false,
      variant: VARIANTS.THIRD,
      openInNewTab: false,
      ariaLabel: 'Go back to Yacht Page',
      label: 'decline',
      url: '/yachts/yacht-paradise',
    },
    acceptButton: {
      ariaLabel: 'Accept all terms',
      label: 'accept',
    },
    yachtImage: {
      image: {
        imageUrl: '/static/images/Yachts/yacht2.jpg',
        altText: 'Paradise Yacht',
      },
    },
  },
};
