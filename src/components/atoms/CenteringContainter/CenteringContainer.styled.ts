import styled from 'styled-components';

export const CenteringContainer = styled.div`
  margin: 0;
  position: relative;
  width: 100%;

  @media ${({ theme }) => theme.media.largeDesktop} {
    max-width: ${({ theme }) => theme.breakpoints.maxWidth}px;
    margin: 0 auto;
  }
`;
