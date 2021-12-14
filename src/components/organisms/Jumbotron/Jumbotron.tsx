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
  imageUrl,
  linkButton,
}: JumbotronTypes): ReactElement => (
  <JumbotronWrapper>
    <TextWrapper>
      <Heading>{title}</Heading>
      <Paragraph>{paragraph}</Paragraph>
      <LinkButton {...linkButton} />
    </TextWrapper>
    <div>
      <Image
        src={imageUrl}
        alt={altText}
        width="100"
        height="100"
        layout="fill"
      />
    </div>
  </JumbotronWrapper>
);
