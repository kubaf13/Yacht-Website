import type { FC } from 'react';
import React from 'react';

import { AboutUs as AboutUsComponent } from './AboutUs';
import { aboutUsMocks } from './AboutUs.mocks';

export const AboutUs: FC = () => <AboutUsComponent {...aboutUsMocks} />;

export default { title: 'Components/Molecules/About Us' };
