import type { FC } from 'react';
import React from 'react';

import { RentingDates as RentingDatesComponent } from './RentingDates';
import { rentingDatesMocks } from './RentingDates.mocks';

export const RentingDates: FC = () => (
  <RentingDatesComponent {...rentingDatesMocks} />
);

export default { title: 'Components/Organisms/Renting Dates' };
