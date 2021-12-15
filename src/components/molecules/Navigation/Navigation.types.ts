import type { NavigationLinkTypes } from '@atoms/NavigationLink/NavigationLink.types';

export interface NavigationTypes {
  links: NavigationLinkTypes[];
  isOpened?: boolean;
}
