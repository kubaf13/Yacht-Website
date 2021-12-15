import React, { ReactElement } from 'react';

import { StyledNavLink } from './NavigationLink.styled';
import type { NavigationLinkTypes } from './NavigationLink.types';

export const NavigationLink = ({
  isOpenedInNewTab,
  ariaLabel,
  url,
  label,
}: NavigationLinkTypes): ReactElement => (
  <StyledNavLink
    href={url}
    aria-label={ariaLabel}
    target={isOpenedInNewTab ? '_blank' : undefined}
  >
    {label}
  </StyledNavLink>
);
