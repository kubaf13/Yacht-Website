import { LinkButton } from '@atoms/LinkButton/LinkButton';
import type { ReactElement } from 'react';
import React from 'react';

import {
  Date,
  DateWrapper,
  NewPrice,
  OldPrice,
  Price,
  Sale,
} from './RentingDate.styled';
import { RentingDateTypes } from './RentingDate.types';

export const RentingDate = ({
  date,
  sale,
  price,
  button,
}: RentingDateTypes): ReactElement => (
  <DateWrapper>
    <Date>{date}</Date>
    {sale ? (
      <Sale>
        <OldPrice>{price}$</OldPrice>
        <NewPrice>{sale}$</NewPrice>
      </Sale>
    ) : (
      <Price>{price}$</Price>
    )}
    <LinkButton {...button} />
  </DateWrapper>
);
