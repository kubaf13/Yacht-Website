import styled from 'styled-components';

export const CenteringContainer = styled.div`
  margin: 0;
  max-width: 100vw;
  position: relative;

  @media ${({ theme }) => theme.media.extraLargeDesktop} {
    max-width: ${({ theme }) => theme.breakpoints.maxWidth}px;
    margin: 0 auto;
  }
`;
