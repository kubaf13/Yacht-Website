import BurgerButton from '@atoms/BurgerButton';
import Navigation from '@molecules/Navigation';
import React, { ReactElement, useState } from 'react';

import type { HeaderTypes } from './Header.types';

export const Header = ({ navigation }: HeaderTypes): ReactElement => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <header>
      <BurgerButton
        isOpened={isOpened}
        setOpen={() => setIsOpened(prevState => !prevState)}
      />
      <Navigation {...navigation} isOpened={isOpened} />
    </header>
  );
};
