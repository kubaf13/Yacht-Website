import styled, { css } from 'styled-components';

interface NavigationStyledTypes {
  isOpened?: boolean;
}

export const StyledNav = styled.nav<NavigationStyledTypes>`
  background: ${({ theme }) => theme.palette.primaryPalette.white};
  height: 100vh;
  position: absolute;
  top: 0;
  transform: translate(100vw);
  z-index: 10;
  overflow: hidden;

  @media ${({ theme }) => theme.media.tablet} {
    position: static;
    height: auto;
    transform: none;
    order: 1;
    transition: none;
    
  }

  ${({ isOpened }) =>
    isOpened &&
    css`
      min-height: calc(100vh);
      transform: translate(0);
      transition: all 0.5s ease-in-out;
    `};
\` ;
`;

export const NavigationWrapper = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  list-style-type: none;
  position: relative;
  width: 100vw;

  @media ${({ theme }) => theme.media.tablet} {
    height: 60px;
    flex-direction: row;
    justify-content: flex-end;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.breakpoints.maxWidth}px;
  }
`;

export const StyledLi = styled.li`
  margin: 20px 0;

  @media ${({ theme }) => theme.media.mobile} {
    margin: 40px 0;
  }

  @media ${({ theme }) => theme.media.tablet} {
    margin: 5px 20px;
  } ;
`;
