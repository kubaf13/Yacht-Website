import type { ReactElement } from 'react';
import React from 'react';

import { Heading, Paragraph, TextWrapper, Wrapper } from './AboutUs.styled';
import { AboutUsTypes } from './AboutUs.types';

export const AboutUs = ({
  description,
  title,
  altText,
  imageUrl,
}: AboutUsTypes): ReactElement => (
  <Wrapper>
    <img src={imageUrl} alt={altText} />
    <TextWrapper>
      <Heading>{title}</Heading>
      <Paragraph>{description}</Paragraph>
    </TextWrapper>
  </Wrapper>
);
