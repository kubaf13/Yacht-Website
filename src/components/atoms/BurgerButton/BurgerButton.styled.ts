import styled, { css } from 'styled-components';

import type { BurgerButtonTypes } from './BurgerButton.types';

export const BurgerButtonWrapper = styled.div<BurgerButtonTypes>`
  background: ${({ theme }) => theme.palette.primaryPalette.white};
  cursor: pointer;
  height: 4px;
  margin: 2px;
  position: absolute;
  right: 20px;
  top: 40px;
  transition: height 0.1s ease-out;
  width: 34px;
  z-index: 100;

  &::before,
  &::after {
    background: ${({ theme }) => theme.palette.primaryPalette.white};
    content: '';
    display: block;
    height: 4px;
    position: absolute;
    transform: translate(0);
    transition: all 0.5s;
    width: 34px;
  }

  &::before {
    transform: translateY(-12px);
  }

  &::after {
    transform: translateY(12px);
  }

  ${({ isOpened }) =>
    isOpened &&
    css`
      height: 0;

      &::before {
        background: ${({ theme }) => theme.palette.primaryPalette.blue};
        height: 6px;
        transform: rotateZ(45deg);
      }

      &::after {
        background: ${({ theme }) => theme.palette.primaryPalette.blue};
        height: 6px;
        transform: rotate(-45deg);
      }
    `}

  @media ${({ theme }) => theme.media.tablet} {
    display: none;
  } ;
`;
