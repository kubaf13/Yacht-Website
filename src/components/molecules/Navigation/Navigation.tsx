import NavigationLink from '@atoms/NavigationLink';
import React, { ReactElement } from 'react';

import { NavigationWrapper, StyledLi, StyledNav } from './Navigation.styled';
import { NavigationTypes } from './Navigation.types';

export const Navigation = ({
  links,
  isOpened,
}: NavigationTypes): ReactElement => (
  <StyledNav isOpened={isOpened}>
    <NavigationWrapper>
      {links.map(link => (
        <StyledLi key={link.url}>
          <NavigationLink {...link} />
        </StyledLi>
      ))}
    </NavigationWrapper>
  </StyledNav>
);
