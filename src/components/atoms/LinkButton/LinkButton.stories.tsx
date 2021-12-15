import React, { FC } from 'react';

import { LinkButton as LinkButtonComponent } from './LinkButton';
import { linkButtonMocks } from './LinkButton.mocks';
import type { LinkButtonTypes } from './LinkButton.types';

export const LinkButton: FC<LinkButtonTypes> = () => (
  <LinkButtonComponent {...linkButtonMocks} />
);

export default { title: 'Components/Atoms' };
