import { VARIANTS } from '@atoms/LinkButton/LinkButton.types';

import { JumbotronTypes } from './Jumbotron.types';

export const jumbotronMocks: JumbotronTypes = {
  title: 'Yacht Renting',
  paragraph:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam aspernatur commodi corporis deserunt dolorem dolorum eos est et fugit, hic ipsum iure laboriosam laborum minus praesentium provident quibusdam quod reiciendis sapiente velit, veniam voluptas?',
  linkButton: {
    url: '/',
    label: 'Learn more',
    isAnimated: true,
    openInNewTab: false,
    variant: VARIANTS.SECONDARY,
    ariaLabel: 'Learn more',
  },
  imageUrl: '/@images/homepage-banner.jpg',
  altText: 'Yacht on the sea',
};
