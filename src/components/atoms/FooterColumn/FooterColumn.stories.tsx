import React, { FC } from 'react';
import styled from 'styled-components';

import { FooterColumn as FooterColumnComponent } from './FooterColumn';
import { aboutUsMocks } from './FooterColumn.mocks';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.palette.primaryPalette.blue};
`;

export const FooterColumn: FC = () => (
  <Wrapper>
    <FooterColumnComponent {...aboutUsMocks} />
  </Wrapper>
);

export default { title: 'Components/Atoms/Footer Column' };
