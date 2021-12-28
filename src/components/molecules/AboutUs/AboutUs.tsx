import type { ReactElement } from 'react';
import React from 'react';

import {
  Heading,
  ImageWrapper,
  Paragraph,
  TextWrapper,
  Wrapper,
} from './AboutUs.styled';
import { AboutUsTypes } from './AboutUs.types';

export const AboutUs = ({
  description,
  title,
  altText,
  imageUrl,
}: AboutUsTypes): ReactElement => (
  <Wrapper id="about-us">
    <ImageWrapper>
      <img src={imageUrl} alt={altText} />
    </ImageWrapper>
    <TextWrapper>
      <Heading>{title}</Heading>
      <Paragraph>{description}</Paragraph>
    </TextWrapper>
  </Wrapper>
);
