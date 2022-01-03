import { LinkButtonTypes } from '@atoms/LinkButton/LinkButton.types';

export interface RentingDateTypes {
  date: string;
  price: number;
  sale?: number;
  button: LinkButtonTypes;
}
