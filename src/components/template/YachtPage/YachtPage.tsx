import Banner from '@atoms/Banner';
import CenteringContainer from '@atoms/CenteringContainter';
import { RentingDates } from '@organisms/RentingDates/RentingDates';
import type { ReactElement } from 'react';
import React from 'react';

import {
  BoatIcon,
  CalendarIcon,
  Description,
  DiveIcon,
  Information,
  LengthIcon,
  LifePreserverIcon,
  PeopleIcon,
  Properties,
  SingleProperties,
  Speed,
} from '@/components/template/YachtPage/YachtPage.styled';

import type { YachtPageTypes } from './YachtPage.types';

export const YachtPage = ({
  yachtName,
  helmsman,
  size,
  banner,
  description,
  whatWater,
  yachtLength,
  yachtDiveLevel,
  speed,
  launchingDate,
  bookings,
}: YachtPageTypes): ReactElement => (
  <div>
    <CenteringContainer>
      <Banner {...banner} />
      <Information>
        <div>
          <h1>{yachtName}</h1>
          <Properties>
            <SingleProperties>
              <BoatIcon />
              {whatWater}
            </SingleProperties>
            <SingleProperties>
              <PeopleIcon />
              {size}
            </SingleProperties>
            <SingleProperties>
              <LifePreserverIcon />
              {helmsman ? 'helmsman' : 'You need to have a helmsman licence'}
            </SingleProperties>
            <SingleProperties>
              <LengthIcon />
              {yachtLength} ft
            </SingleProperties>
            <SingleProperties>
              <DiveIcon />
              {yachtDiveLevel} m
            </SingleProperties>
            <SingleProperties>
              <CalendarIcon />
              {launchingDate}
            </SingleProperties>
            <SingleProperties>
              <Speed />
              {speed}
            </SingleProperties>
          </Properties>
        </div>
      </Information>
      <Description>{description}</Description>
      <RentingDates {...bookings} />
    </CenteringContainer>
  </div>
);
