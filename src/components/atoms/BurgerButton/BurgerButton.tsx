import { BurgerButtonWrapper } from '@atoms/BurgerButton/BurgerButton.styled';
import { BurgerButtonTypes } from '@atoms/BurgerButton/BurgerButton.types';
import React, { ReactElement } from 'react';

export const BurgerButton = ({
  setOpen,
  isOpened,
}: BurgerButtonTypes): ReactElement => (
  <div>
    <BurgerButtonWrapper
      isOpened={isOpened}
      onClick={() => setOpen(isOpened)}
    />
  </div>
);
