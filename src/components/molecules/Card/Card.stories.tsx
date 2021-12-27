import type { FC } from 'react';
import React from 'react';

import { Card as CardComponent } from './Card';
import { annabellaMocks } from './Card.mocks';
import { CardTypes, ImagePosition } from './Card.types';

const Template: FC<CardTypes> = props => <CardComponent {...props} />;

export const Card = Template.bind(annabellaMocks);

Card.parameters = {
  controls: { exclude: ['imageUrl', 'altText', 'subTitle', 'linkButton'] },
};

Card.args = annabellaMocks;

export default {
  title: 'Components/Molecules/Card',
  argTypes: {
    imagePosition: {
      options: [ImagePosition.RIGHT, ImagePosition.LEFT],
      control: { type: 'radio', labels: { 0: 'left', 1: 'right' } },
    },
  },
};
