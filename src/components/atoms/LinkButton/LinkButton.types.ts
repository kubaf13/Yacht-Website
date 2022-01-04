export enum VARIANTS {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  THIRD = 'third',
}

export interface LinkButtonTypes {
  ariaLabel: string;
  url: string;
  label: string;
  variant: VARIANTS;
  openInNewTab: boolean;
  isAnimated: boolean;
}
