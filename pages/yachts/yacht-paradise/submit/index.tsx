import type { NextPage } from 'next';
import type { ReactElement } from 'react';

import { AcceptShipping } from '@/components/template/AcceptShipping/AcceptShipping';
import { paradiseShippingMocks } from '@/components/template/AcceptShipping/AcceptShipping.mocks';
const AcceptAmandaShipping: NextPage = (): ReactElement => (
  <AcceptShipping {...paradiseShippingMocks} />
);

export default AcceptAmandaShipping;
