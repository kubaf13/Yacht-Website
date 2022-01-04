import type { NextPage } from 'next';
import type { ReactElement } from 'react';

import { AcceptShipping } from '@/components/template/AcceptShipping/AcceptShipping';
import { acceptShippingMocks } from '@/components/template/AcceptShipping/AcceptShipping.mocks';
const AcceptAmandaShipping: NextPage = (): ReactElement => (
  <AcceptShipping {...acceptShippingMocks} />
);

export default AcceptAmandaShipping;
