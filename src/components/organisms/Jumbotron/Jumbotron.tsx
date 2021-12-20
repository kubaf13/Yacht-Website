import { LinkButton } from '@atoms/LinkButton/LinkButton';
import React, { ReactElement } from 'react';

// import Image from 'next/image';
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
      {/*<Image src={imageUrl} alt={altText} layout="fixed" />*/}
    </ImageWrapper>
    <TextWrapper>
      <Heading>{title}</Heading>
      <Paragraph>{paragraph}</Paragraph>
      <LinkButton {...linkButton} />
    </TextWrapper>
  </JumbotronWrapper>
);
