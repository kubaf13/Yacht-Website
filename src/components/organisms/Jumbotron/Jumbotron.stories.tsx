import React, { FC } from 'react';

import { Jumbotron as JumbotronComponent } from './Jumbotron';
import { jumbotronMocks } from './Jumbotron.mocks';

export const Jumbotron: FC = () => <JumbotronComponent {...jumbotronMocks} />;

export default { title: 'Components/Organisms/Jumbotron' };
