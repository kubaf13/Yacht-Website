import BurgerButton from '@atoms/BurgerButton';
import Navigation from '@molecules/Navigation';
import { HeaderTypes } from '@organisms/Header/Header.types';
import React, { ReactElement, useState } from 'react';

export const Header = ({ navigation }: HeaderTypes): ReactElement => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <div>
      <BurgerButton
        isOpened={isOpened}
        setOpen={() => setIsOpened(prevState => !prevState)}
      />
      <Navigation {...navigation} isOpened={isOpened} />
    </div>
  );
};
