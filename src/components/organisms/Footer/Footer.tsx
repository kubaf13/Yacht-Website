import { FooterColumn } from '@atoms/FooterColumn/FooterColumn';
import {
  aboutUsMocks,
  ourGalleryMocks,
  ourYachtsMocks,
} from '@atoms/FooterColumn/FooterColumn.mocks';
import { SocialMedia } from '@atoms/SocialMedia/SocialMedia';
import React, { ReactElement, useEffect, useState } from 'react';

import { Author, FooterWrapper, Line, SecondNavigation } from './Footer.styled';
import type { FooterTypes } from './Footer.types';

export const Footer = ({ socialMedia }: FooterTypes): ReactElement => {
  const [date, setDate] = useState<boolean>();

  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);

  return (
    <FooterWrapper>
      <SocialMedia {...socialMedia} />
      <SecondNavigation>
        <FooterColumn {...aboutUsMocks} />
        <FooterColumn {...ourYachtsMocks} />
        <FooterColumn {...ourGalleryMocks} />
      </SecondNavigation>
      <Line />
      <Author>
        <p>
          design by{' '}
          <strong>
            Flisek<sup>2</sup>
          </strong>
        </p>
        <p>&copy; {date} </p>
      </Author>
    </FooterWrapper>
  );
};
