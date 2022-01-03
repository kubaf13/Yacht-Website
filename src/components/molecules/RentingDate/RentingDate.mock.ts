import { VARIANTS } from '@atoms/LinkButton/LinkButton.types';

import { RentingDateTypes } from './RentingDate.types';

export const rentingDateMock: RentingDateTypes = {
  date: '01.02 - 14.02',
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
};
