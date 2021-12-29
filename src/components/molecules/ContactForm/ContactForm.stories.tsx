import type { FC } from 'react';
import React from 'react';

import { ContactForm as ContactFormComponent } from './ContactForm';
import { contactFormMocks } from './ContactForm.mocks';

export const ContactForm: FC = () => (
  <ContactFormComponent {...contactFormMocks} />
);

export default { title: 'Components/Molecules/Contact Form' };
