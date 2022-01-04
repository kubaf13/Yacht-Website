import type { FooterColumnTypes } from '@atoms/FooterColumn/FooterColumn.types';

export const aboutUsMocks: FooterColumnTypes = {
  column: {
    title: {
      label: 'about us',
      link: '/#about-us',
    },
  },
};

export const ourYachtsMocks: FooterColumnTypes = {
  column: {
    title: {
      label: 'our yachts',
      link: '/#our-yachts',
    },
    elements: [
      { label: 'yacht "Annabelle"', link: '/yachts/yacht-annabelle' },
      { label: 'yacht "Paradise"', link: '/yachts/yacht-paradise' },
      { label: 'yacht "Journey"', link: '/yachts/yacht-journey' },
      { label: 'yacht "Amanda"', link: '/yachts/yacht-amanda' },
    ],
  },
};

export const ourGalleryMocks: FooterColumnTypes = {
  column: {
    title: {
      label: 'our gallery',
      link: '/#our-gallery',
    },
  },
};
