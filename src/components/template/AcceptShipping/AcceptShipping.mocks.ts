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
