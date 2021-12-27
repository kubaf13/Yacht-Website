import { LinkButton } from '@atoms/LinkButton/LinkButton';
import type { ReactElement } from 'react';
import React from 'react';

import {
  CardWrapper,
  Description,
  ImageWrapper,
  InfoBlock,
  SubTitle,
  Title,
} from './Card.styled';
import { CardTypes } from './Card.types';

export const Card = ({
  imageUrl,
  altText,
  description,
  subTitle,
  yachtName,
  linkButton,
  imagePosition,
}: CardTypes): ReactElement => (
  <CardWrapper imagePosition={imagePosition}>
    <ImageWrapper>
      <img src={imageUrl} alt={altText} />
    </ImageWrapper>
    <InfoBlock>
      <Title>{yachtName}</Title>
      <SubTitle>{subTitle}</SubTitle>
      <Description>{description}</Description>
      <LinkButton {...linkButton} />
    </InfoBlock>
  </CardWrapper>
);
