import React, { FC } from 'react';
import styled from 'styled-components';

import { SocialMedia as SocialMediaComponent } from './SocialMedia';
import { socialMediaMocks } from './SocialMedia.mocks';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.palette.primaryPalette.blue};
`;

export const SocialMedia: FC = () => (
  <Wrapper>
    <SocialMediaComponent {...socialMediaMocks} />
  </Wrapper>
);

export default { title: 'Components/Atoms/Social Media' };
