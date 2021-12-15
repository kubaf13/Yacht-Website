import React, { ReactElement } from 'react';

import {
  FacebookIcon,
  InstagramIcon,
  SocialWrapper,
  Text,
  YoutubeIcon,
} from './SocialMedia.styled';
import type { SocialMediaTypes } from './SocialMedia.types';

export const SocialMedia = ({ icons }: SocialMediaTypes): ReactElement => (
  <SocialWrapper>
    <Text>Follow us</Text>
    <a href={icons[0].url} aria-label={icons[0].ariaLabel}>
      <FacebookIcon />
    </a>
    <a href={icons[1].url} aria-label={icons[1].ariaLabel}>
      <InstagramIcon />
    </a>
    <a href={icons[2].url} aria-label={icons[2].ariaLabel}>
      <YoutubeIcon />
    </a>
  </SocialWrapper>
);
