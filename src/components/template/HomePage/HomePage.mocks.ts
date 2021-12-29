import { aboutUsMocks } from '@molecules/AboutUs/AboutUs.mocks';
import { contactFormMocks } from '@molecules/ContactForm/ContactForm.mocks';
import { cardsMocks } from '@organisms/Cards/Cards.mocks';
import { galleryMocks } from '@organisms/Gallery/Gallery.mocks';
import { jumbotronMocks } from '@organisms/Jumbotron/Jumbotron.mocks';

import type { HomePageTypes } from './HomePage.types';

export const homePageMocks: HomePageTypes = {
  jumbotron: jumbotronMocks,
  aboutUs: aboutUsMocks,
  cards: cardsMocks,
  gallery: galleryMocks,
  contactForm: contactFormMocks,
};
