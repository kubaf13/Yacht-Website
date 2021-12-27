import type { FC } from 'react';
import React from 'react';

import { Cards as CardsComponent } from './Cards';
import { cardsMocks } from './Cards.mocks';

export const Cards: FC = () => <CardsComponent {...cardsMocks} />;

export default { title: 'Components/Organisms/Cards' };
