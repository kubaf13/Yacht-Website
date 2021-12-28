import type { ReactElement } from 'react';
import React from 'react';

import { BannerWrapper } from './Banner.styled';
import type { BannerTypes } from './Banner.types';

export const Banner = ({ image }: BannerTypes): ReactElement => (
  <BannerWrapper>
    <img src={image.imageUrl} alt={image.altText} />
  </BannerWrapper>
);
