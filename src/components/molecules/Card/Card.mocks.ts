import { VARIANTS } from '@atoms/LinkButton/LinkButton.types';
import type { CardTypes } from '@molecules/Card/Card.types';
import { ImagePosition } from '@molecules/Card/Card.types';

export const annabellaMocks: CardTypes = {
  imageUrl: '/static/images/Yachts/yacht5.jpg',
  altText: 'Yacht Annabelle',
  yachtName: 'Yacht "Annabelle"',
  subTitle: 'Lorem ipsum dolor',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam aspernatur commodi corporis deserunt dolorem dolorum eos est et fugit, hic ipsum iure laboriosam laborum minus praesentium provident quibusdam quod reiciendis sapiente velit, veniam voluptas?',
  linkButton: {
    url: '/yachts/yacht-annabelle',
    isAnimated: true,
    openInNewTab: false,
    variant: VARIANTS.SECONDARY,
    label: 'read more',
    ariaLabel: 'read more about Yacht Annabelle',
  },
  imagePosition: ImagePosition.LEFT,
};

export const paradiseMocks: CardTypes = {
  imageUrl: '/static/images/Yachts/yacht2.jpg',
  altText: 'Yacht Paradise',
  yachtName: 'Yacht "Paradise"',
  subTitle: 'Lorem ipsum dolor',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam aspernatur commodi corporis deserunt dolorem dolorum eos est et fugit, hic ipsum iure laboriosam laborum minus praesentium provident quibusdam quod reiciendis sapiente velit, veniam voluptas?',
  linkButton: {
    url: '/yachts/yacht-paradise',
    isAnimated: true,
    openInNewTab: false,
    variant: VARIANTS.SECONDARY,
    label: 'read more',
    ariaLabel: 'read more about Yacht Paradise',
  },
  imagePosition: ImagePosition.RIGHT,
};

export const journeyMocks: CardTypes = {
  imageUrl: '/static/images/Yachts/yacht3.jpg',
  altText: 'Yacht Journey',
  yachtName: 'Yacht "Journey"',
  subTitle: 'Lorem ipsum dolor',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam aspernatur commodi corporis deserunt dolorem dolorum eos est et fugit, hic ipsum iure laboriosam laborum minus praesentium provident quibusdam quod reiciendis sapiente velit, veniam voluptas?',
  linkButton: {
    url: '/yachts/yacht-journey',
    isAnimated: true,
    openInNewTab: false,
    variant: VARIANTS.SECONDARY,
    label: 'read more',
    ariaLabel: 'read more about Yacht Journey',
  },
  imagePosition: ImagePosition.LEFT,
};

export const amandaMocks: CardTypes = {
  imageUrl: '/static/images/Yachts/yacht4.jpg',
  altText: 'Yacht Amanda',
  yachtName: 'Yacht "Amanda"',
  subTitle: 'Lorem ipsum dolor',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam aspernatur commodi corporis deserunt dolorem dolorum eos est et fugit, hic ipsum iure laboriosam laborum minus praesentium provident quibusdam quod reiciendis sapiente velit, veniam voluptas?',
  linkButton: {
    url: '/yachts/yacht-amanda',
    isAnimated: true,
    openInNewTab: false,
    variant: VARIANTS.SECONDARY,
    label: 'read more',
    ariaLabel: 'read more about Yacht Amanda',
  },
  imagePosition: ImagePosition.RIGHT,
};
