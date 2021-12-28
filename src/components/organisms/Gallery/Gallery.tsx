import type { ReactElement } from 'react';
import React from 'react';

import { GalleryWall, Title } from './Gallery.styled';
import type { GalleryTypes } from './Gallery.types';

export const Gallery = ({ title, images }: GalleryTypes): ReactElement => (
  <section id="gallery">
    <Title>{title}</Title>
    <GalleryWall>
      {images?.map(image => (
        <div key={image.imageUrl} className={image.className}>
          <img src={image.imageUrl} alt={image.altText} />
        </div>
      ))}
    </GalleryWall>
  </section>
);
