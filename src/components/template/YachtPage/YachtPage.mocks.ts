import { bannerMocks } from '@atoms/Banner/Banner.mocks';

import type { YachtPageTypes } from './YachtPage.types';

export const yachtPageMocks: YachtPageTypes = {
  banner: bannerMocks,
  yachtName: 'Yacht "Annabelle"',
  description:
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  size: 'to 10 people',
  helmsman: false,
  whatWater: 'sweet water',
};
