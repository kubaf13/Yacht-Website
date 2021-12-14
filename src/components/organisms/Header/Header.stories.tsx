import React, { FC } from 'react';

import { Header as HeaderComponent } from './Header';
import { headerMocks } from './Header.mocks';

export const Header: FC = () => <HeaderComponent {...headerMocks} />;

export default { title: 'Components/Organisms/Header' };
