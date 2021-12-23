import {
  aboutUsMocks,
  ourGalleryMocks,
  ourYachtsMocks,
} from '@atoms/FooterColumn/FooterColumn.mocks';
import { socialMediaMocks } from '@atoms/SocialMedia/SocialMedia.mocks';

import type { FooterTypes } from './Footer.types';

export const footerMocks: FooterTypes = {
  socialMedia: socialMediaMocks,
  columns: [aboutUsMocks, ourYachtsMocks, ourGalleryMocks],
};
