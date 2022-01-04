import Banner from '@atoms/Banner';
import { LinkButton } from '@atoms/LinkButton/LinkButton';
import type { ReactElement } from 'react';
import React from 'react';

import {
  AcceptButton,
  ButtonsWrapper,
  ContentWrapper,
  Heading,
  ImageWrapper,
  InfoBlock,
  PageWrapper,
  SingleYachtInfo,
  Value,
  YachtInfo,
} from './AcceptShipping.styled';
import { AcceptShippingTypes } from './AcceptShipping.types';

export const AcceptShipping = ({
  title,
  yacht,
}: AcceptShippingTypes): ReactElement => (
  <PageWrapper>
    <h1>{title}</h1>
    <ContentWrapper>
      <InfoBlock>
        <YachtInfo>
          <SingleYachtInfo>
            <Heading>name: </Heading>
            <Value>{yacht.yachtName}</Value>
          </SingleYachtInfo>
          <SingleYachtInfo>
            <Heading>date: </Heading>
            <Value>{yacht.bookingDate}</Value>
          </SingleYachtInfo>
          <SingleYachtInfo>
            <Heading>price: </Heading>
            {yacht.sale ? (
              <Value>{yacht.sale}$</Value>
            ) : (
              <Value>{yacht.price}$</Value>
            )}
          </SingleYachtInfo>
        </YachtInfo>
        <ButtonsWrapper>
          <LinkButton {...yacht.declineButton} />
          <AcceptButton aria-label={yacht.acceptButton.ariaLabel}>
            {yacht.acceptButton.label}
          </AcceptButton>
        </ButtonsWrapper>
      </InfoBlock>
      <ImageWrapper>
        <Banner {...yacht.yachtImage} />
      </ImageWrapper>
    </ContentWrapper>
  </PageWrapper>
);
