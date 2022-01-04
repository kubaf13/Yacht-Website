import type { NextPage } from 'next';
import type { ReactElement } from 'react';

import { AcceptShipping } from '@/components/template/AcceptShipping/AcceptShipping';
import { journeyShippingMocks } from '@/components/template/AcceptShipping/AcceptShipping.mocks';
const AcceptAmandaShipping: NextPage = (): ReactElement => (
  <AcceptShipping {...journeyShippingMocks} />
);

export default AcceptAmandaShipping;
