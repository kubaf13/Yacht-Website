import styled from 'styled-components';

export const StyledMainContent = styled.div`
  @media ${({ theme }) => theme.media.largeDesktop} {
    height: 100%;
  }
`;

export const LayoutWrapper = styled.div`
  overflow-x: hidden;

  @media ${({ theme }) => theme.media.largeDesktop} {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    padding-top: unset;
  }
`;
