import type { AboutUsTypes } from '@molecules/AboutUs/AboutUs.types';
import { ContactFormTypes } from '@molecules/ContactForm/ContactForm.types';
import type { CardsTypes } from '@organisms/Cards/Cards.types';
import type { GalleryTypes } from '@organisms/Gallery/Gallery.types';
import type { JumbotronTypes } from '@organisms/Jumbotron/Jumbotron.types';

export interface HomePageTypes {
  jumbotron: JumbotronTypes;
  aboutUs: AboutUsTypes;
  cards: CardsTypes;
  gallery: GalleryTypes;
  contactForm: ContactFormTypes;
}
