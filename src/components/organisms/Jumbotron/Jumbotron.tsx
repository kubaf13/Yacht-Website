import { LinkButton } from '@atoms/LinkButton/LinkButton';
import homepageBanner from '@images/homepage-banner.jpg';
import Image from 'next/image';
import React, { ReactElement } from 'react';

import {
  Heading,
  JumbotronWrapper,
  Paragraph,
  TextWrapper,
} from './Jumbotron.styled';
import type { JumbotronTypes } from './Jumbotron.types';

export const Jumbotron = ({
  title,
  paragraph,
  altText,
  linkButton,
}: JumbotronTypes): ReactElement => (
  <JumbotronWrapper>
    <TextWrapper>
      <Heading>{title}</Heading>
      <Paragraph>{paragraph}</Paragraph>
      <LinkButton {...linkButton} />
    </TextWrapper>
    <div>
      {/*<Image*/}
      {/*  src={homepageBanner}*/}
      {/*  alt={altText}*/}
      {/*  width="500"*/}
      {/*  height="500"*/}
      {/*  layout={'fill'}*/}
      {/*/>*/}
    </div>
  </JumbotronWrapper>
);
