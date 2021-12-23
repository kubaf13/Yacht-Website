import type { FooterColumnTypes } from '@atoms/FooterColumn/FooterColumn.types';
import type { SocialMediaTypes } from '@atoms/SocialMedia/SocialMedia.types';

export interface FooterTypes {
  socialMedia: SocialMediaTypes;
  columns?: FooterColumnTypes[];
}
