import { FooterColumnTypes } from '@atoms/FooterColumn/FooterColumn.types';

export const footerColumnMocks: FooterColumnTypes = {
  column: {
    title: {
      label: 'our yachts',
      link: '#our-yachts',
    },
    elements: [
      { label: 'yacht "Annabelle', link: '/yacht-annabelle' },
      { label: 'yacht "Paradise', link: '/yacht-paradise' },
      { label: 'yacht "Journey', link: '/yacht-journey' },
      { label: 'yacht "Amanda', link: '/yacht-amanda' },
    ],
  },
  contact: {
    label: 'contact us',
    link: '#contact-us',
    phone: '22-222-22-2-2',
    address: 'Lorem Ipsum 22 00-000 Dolor',
    mail: 'lorem@ipsum.dolor',
  },
};
