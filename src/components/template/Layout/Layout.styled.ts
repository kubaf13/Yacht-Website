import styled from 'styled-components';

export const StyledMainContent = styled.div`
  @media ${({ theme }) => theme.media.largeDesktop} {
    height: 100%;
  }
`;

export const LayoutWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
  overflow-x: hidden;
  padding-top: unset;
`;
