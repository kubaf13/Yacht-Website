import styled from 'styled-components';

interface CenteringContainerTypes {
  bgColor?: string;
}

export const CenteringContainer = styled.div<CenteringContainerTypes>`
  background-color: ${({ bgColor }) => (bgColor ? bgColor : 'inherit')};
  margin: auto;
  position: relative;
  width: 100%;

  @media ${({ theme }) => theme.media.largeDesktop} {
    width: ${({ theme }) => theme.maxWidth};
  }
`;
