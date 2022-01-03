import type { FC } from 'react';
import React from 'react';

import { RentingDate as RentingDateComponent } from './RentingDate';
import { rentingDateMock } from './RentingDate.mock';

export const RentingDate: FC = () => (
  <RentingDateComponent {...rentingDateMock} />
);

export default { title: 'Components/Molecules/Renting Date' };
