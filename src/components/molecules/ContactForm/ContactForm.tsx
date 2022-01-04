import type { ReactElement } from 'react';
import React from 'react';

import {
  BlueBelt,
  FormField,
  FormWrapper,
  StyledFormButton,
  StyledInput,
  WhitePaper,
  Wrapper,
} from './ContactForm.styled';
import { ContactFormTypes } from './ContactForm.types';

export const ContactForm = ({
  title,
  nameLabel,
  emailLabel,
  messageLabel,
  button,
}: ContactFormTypes): ReactElement => (
  <Wrapper>
    <BlueBelt />
    <WhitePaper>
      <h2>{title}</h2>
      <FormWrapper
        action="https://formsubmit.co/kubaf13@gmail.com"
        method="POST"
      >
        <FormField>
          <StyledInput
            type="text"
            name="name"
            required
            placeholder={nameLabel}
          />
        </FormField>
        <FormField>
          <StyledInput
            type="email"
            name="email"
            required
            placeholder={emailLabel}
          />
        </FormField>
        <FormField>
          <StyledInput type="text" name="message" placeholder={messageLabel} />
        </FormField>
        <StyledFormButton type="submit" aria-label={button.ariaLabel}>
          {button.label}
        </StyledFormButton>
      </FormWrapper>
    </WhitePaper>
  </Wrapper>
);
