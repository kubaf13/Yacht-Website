import React, { FC } from 'react';
import styled from 'styled-components';

import { FooterColumn as FooterColumnComponent } from './FooterColumn';
import { footerColumnMocks } from './FooterColumn.mocks';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.palette.primaryPalette.blue};
`;

export const FooterColumn: FC = () => (
  <Wrapper>
    <FooterColumnComponent {...footerColumnMocks} />
  </Wrapper>
);

export default { title: 'Components/Atoms/Footer Column' };
