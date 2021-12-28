import Card from '@molecules/Card';
import type { ReactElement } from 'react';
import React from 'react';

import { CardsSection } from './Cards.styled';
import type { CardsTypes } from './Cards.types';

export const Cards = ({ title, cards }: CardsTypes): ReactElement => (
  <CardsSection id="our-yachts">
    <h2>{title}</h2>
    {cards?.map(card => (
      <Card key={card.imageUrl} {...card} />
    ))}
  </CardsSection>
);
