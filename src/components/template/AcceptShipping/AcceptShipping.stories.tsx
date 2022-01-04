import type { FC } from 'react';
import React from 'react';

import { AcceptShipping as AcceptShippingTemplate } from './AcceptShipping';
import { acceptShippingMocks } from './AcceptShipping.mocks';

export const AcceptShipping: FC = () => (
  <AcceptShippingTemplate {...acceptShippingMocks} />
);

export default { title: 'Templates/Accept Shipping' };
