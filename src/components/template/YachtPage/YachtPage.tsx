import Banner from '@atoms/Banner';
import CenteringContainer from '@atoms/CenteringContainter';
import type { ReactElement } from 'react';
import React from 'react';

import {
  BoatIcon,
  Description,
  Information,
  LifePreserverIcon,
  PeopleIcon,
  Properties,
  SingleProperties,
} from '@/components/template/YachtPage/YachtPage.styled';

import type { YachtPageTypes } from './YachtPage.types';

export const YachtPage = ({
  yachtName,
  helmsman,
  size,
  banner,
  description,
  whatWater,
}: YachtPageTypes): ReactElement => (
  <div>
    <Banner {...banner} />
    <CenteringContainer>
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
          </Properties>
        </div>
        <div>
          <Description>{description}</Description>
        </div>
      </Information>
    </CenteringContainer>
  </div>
);
