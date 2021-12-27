import type { FC } from 'react';
import React from 'react';

import { Gallery as GalleryComponent } from './Gallery';
import { galleryMocks } from './Gallery.mocks';

export const Gallery: FC = () => <GalleryComponent {...galleryMocks} />;

export default { title: 'Components/Organisms/Gallery' };
