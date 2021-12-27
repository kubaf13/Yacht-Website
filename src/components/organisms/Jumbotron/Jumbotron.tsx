import { LinkButton } from '@atoms/LinkButton/LinkButton';
import React, { ReactElement } from 'react';

import {
  Heading,
  ImageWrapper,
  JumbotronWrapper,
  Paragraph,
  TextWrapper,
} from './Jumbotron.styled';
import type { JumbotronTypes } from './Jumbotron.types';

export const Jumbotron = ({
  title,
  paragraph,
  altText,
  imageUrl,
  linkButton,
}: JumbotronTypes): ReactElement => (
  <JumbotronWrapper>
    <ImageWrapper>
      <img src={imageUrl} alt={altText} />
    </ImageWrapper>
    <TextWrapper>
      <Heading>{title}</Heading>
      <Paragraph>{paragraph}</Paragraph>
      <LinkButton {...linkButton} />
    </TextWrapper>
  </JumbotronWrapper>
);
