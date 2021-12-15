import React, { ReactElement } from 'react';

import { StyledLinkButton } from './LinkButton.styled';
import type { LinkButtonTypes } from './LinkButton.types';

export const LinkButton = ({
  openInNewTab,
  label,
  ariaLabel,
  url,
  variant,
  isAnimated,
}: LinkButtonTypes): ReactElement => (
  <div>
    <StyledLinkButton
      href={url}
      aria-label={ariaLabel}
      target={openInNewTab ? '_blank' : undefined}
      variant={variant}
      isAnimated={isAnimated}
    >
      {label}
    </StyledLinkButton>
  </div>
);
