import { RentingDate } from '@molecules/RentingDate/RentingDate';
import type { ReactElement } from 'react';
import React from 'react';

import { BookingWrapper, Columns } from './RentingDates.styled';
import { RentingDatesTypes } from './RentingDates.types';

export const RentingDates = ({ bookings }: RentingDatesTypes): ReactElement => (
  <BookingWrapper>
    <h3>You can rent this yacht on: </h3>
    <Columns>
      <h5>date</h5>
      <h5>price</h5>
    </Columns>
    {bookings.map(rentingDate => (
      <RentingDate key={rentingDate.date} {...rentingDate} />
    ))}
    <div>* if you want another date, please call us</div>
  </BookingWrapper>
);
