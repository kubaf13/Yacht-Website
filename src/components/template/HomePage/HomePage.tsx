import CenteringContainer from '@atoms/CenteringContainter';
import AboutUs from '@molecules/AboutUs';
import Cards from '@organisms/Cards';
import Gallery from '@organisms/Gallery';
import Jumbotron from '@organisms/Jumbotron';
import type { ReactElement } from 'react';
import React from 'react';

import { HomePageTypes } from './HomePage.types';

export const HomePage = ({
  jumbotron,
  aboutUs,
  cards,
  gallery,
}: HomePageTypes): ReactElement => (
  <CenteringContainer>
    <Jumbotron {...jumbotron} />
    <AboutUs {...aboutUs} />
    <Cards {...cards} />
    <Gallery {...gallery} />
  </CenteringContainer>
);
