import { RentingDate } from '@molecules/RentingDate/RentingDate';
import type { ReactElement } from 'react';
import React from 'react';

import { RentingDatesTypes } from './RentingDates.types';

export const RentingDates = ({ bookings }: RentingDatesTypes): ReactElement => (
  <>
    {bookings.map(rentingDate => (
      <RentingDate key={rentingDate.date} {...rentingDate} />
    ))}
  </>
);
