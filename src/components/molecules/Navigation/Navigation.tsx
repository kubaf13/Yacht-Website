import NavigationLink from '@atoms/NavigationLink';
import React, { ReactElement } from 'react';

import { NavigationWrapper, StyledLi } from './Navigation.styled';
import { NavigationTypes } from './Navigation.types';

export const Navigation = ({ links }: NavigationTypes): ReactElement => (
  <NavigationWrapper>
    {links.map(link => (
      <StyledLi key={link.url}>
        <NavigationLink {...link} />
      </StyledLi>
    ))}
  </NavigationWrapper>
);
