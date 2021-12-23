import type { FooterColumnTypes } from '@atoms/FooterColumn/FooterColumn.types';

export const aboutUsMocks: FooterColumnTypes = {
  column: {
    title: {
      label: 'about us',
      link: '#about-us',
    },
  },
};

export const ourYachtsMocks: FooterColumnTypes = {
  column: {
    title: {
      label: 'our yachts',
      link: '#our-yachts',
    },
    elements: [
      { label: 'yacht "Annabelle"', link: '/yacht-annabelle' },
      { label: 'yacht "Paradise"', link: '/yacht-paradise' },
      { label: 'yacht "Journey"', link: '/yacht-journey' },
      { label: 'yacht "Amanda"', link: '/yacht-amanda' },
    ],
  },
};

export const ourGalleryMocks: FooterColumnTypes = {
  column: {
    title: {
      label: 'our gallery',
      link: '#our-gallery',
    },
  },
};
