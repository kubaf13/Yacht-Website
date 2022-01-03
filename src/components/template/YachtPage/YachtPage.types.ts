import type { BannerTypes } from '@atoms/Banner/Banner.types';
import { RentingDatesTypes } from '@organisms/RentingDates/RentingDates.types';

export interface YachtPageTypes {
  yachtName: string;
  description: string;
  size: string;
  whatWater: string;
  helmsman: boolean;
  yachtLength: number;
  yachtDiveLevel: number;
  launchingDate: number;
  speed: string;
  banner: BannerTypes;
  bookings: RentingDatesTypes;
}
