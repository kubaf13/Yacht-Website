export enum VARIANTS {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export interface LinkButtonTypes {
  ariaLabel: string;
  url: string;
  label: string;
  variant: VARIANTS;
  openInNewTab: boolean;
  isAnimated: boolean;
}
