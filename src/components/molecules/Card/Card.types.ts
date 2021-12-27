import type { LinkButtonTypes } from '@atoms/LinkButton/LinkButton.types';

export enum ImagePosition {
  LEFT,
  RIGHT,
}

export interface CardTypes {
  imageUrl: string;
  altText: string;
  imagePosition: ImagePosition;
  yachtName: string;
  subTitle: string;
  description: string;
  linkButton: LinkButtonTypes;
}
