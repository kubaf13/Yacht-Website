import React, { FC } from 'react';

import { Footer as FooterComponent } from './Footer';
import { footerMocks } from './Footer.mocks';

export const Footer: FC = () => <FooterComponent {...footerMocks} />;

export default { title: 'Components/Organisms/Footer' };
