import React, { ReactElement } from 'react';

import { BurgerButtonWrapper } from './BurgerButton.styled';
import type { BurgerButtonTypes } from './BurgerButton.types';

export const BurgerButton = ({
  setOpen,
  isOpened,
}: BurgerButtonTypes): ReactElement => (
  <BurgerButtonWrapper isOpened={isOpened} onClick={() => setOpen(isOpened)} />
);
