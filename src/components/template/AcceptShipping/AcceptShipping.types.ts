import { BannerTypes } from '@atoms/Banner/Banner.types';
import { LinkButtonTypes } from '@atoms/LinkButton/LinkButton.types';

export interface AcceptShippingTypes {
  title: string;
  yacht: {
    yachtName: string;
    bookingDate: string;
    price: number;
    sale?: number;
    declineButton: LinkButtonTypes;
    acceptButton: {
      ariaLabel: string;
      label: string;
    };
    yachtImage: BannerTypes;
  };
}
