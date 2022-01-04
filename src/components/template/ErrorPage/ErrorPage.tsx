import { LinkButton } from '@atoms/LinkButton/LinkButton';
import type { ReactElement } from 'react';
import React from 'react';

import { ErrorWrapper } from './ErrorPage.styled';
import type { ErrorPageTypes } from './ErrorPage.types';

export const ErrorPage = ({
  title,
  linkButton,
}: ErrorPageTypes): ReactElement => (
  <ErrorWrapper>
    <h1>{title}</h1>
    <LinkButton {...linkButton} />
  </ErrorWrapper>
);
