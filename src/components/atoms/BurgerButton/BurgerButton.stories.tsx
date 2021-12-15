import React, { FC, useState } from 'react';
import styled from 'styled-components';

import { BurgerButton as Burger } from './BurgerButton';
import type { BurgerButtonTypes } from './BurgerButton.types';

const StyledComponentWrapper = styled.div`
  // background: ${({ theme }) => theme.palette.primaryPalette.blue};
  padding: 20px;
`;

export const BurgerButton: FC<BurgerButtonTypes> = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <StyledComponentWrapper>
      <Burger
        isOpened={isOpened}
        setOpen={() => setIsOpened(prevState => !prevState)}
      />
    </StyledComponentWrapper>
  );
};

export default { title: 'Components/Atoms/Burger Button' };
