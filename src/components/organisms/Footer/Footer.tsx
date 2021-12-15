import { SocialMedia } from '@atoms/SocialMedia/SocialMedia';
import React, { ReactElement } from 'react';

import { FooterWrapper } from './Footer.styled';
import type { FooterTypes } from './Footer.types';

export const Footer = ({ socialMedia }: FooterTypes): ReactElement => (
  <FooterWrapper>
    <h1>Footer</h1>
    <SocialMedia {...socialMedia} />
  </FooterWrapper>
);
