import {
  amandaMocks,
  annabellaMocks,
  journeyMocks,
  paradiseMocks,
} from '@molecules/Card/Card.mocks';

import type { CardsTypes } from './Cards.types';

export const cardsMocks: CardsTypes = {
  title: 'Rent an yacht',
  cards: [annabellaMocks, paradiseMocks, journeyMocks, amandaMocks],
};
