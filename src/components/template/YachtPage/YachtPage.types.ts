import type { BannerTypes } from '@atoms/Banner/Banner.types';

export interface YachtPageTypes {
  yachtName: string;
  description: string;
  size: string;
  whatWater: string;
  helmsman: boolean;
  banner: BannerTypes;
}
