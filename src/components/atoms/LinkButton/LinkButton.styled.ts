import styled, { css, keyframes } from 'styled-components';

import { VARIANTS } from './LinkButton.types';

interface StyledLinkButtonTypes {
  isAnimated: boolean;
  variant: VARIANTS;
}

const animateButton = keyframes`
  0% {
    opacity: 1;
    transform: translateX(-100%);
  }
  40% {
    transform: translateX(0%);
  }
  60% {
    transform: translateX(0%);
  }
  100% {
    opacity: 1;
    transform: translateX(100%);
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const getVariant = (variant: VARIANTS, isAnimated: boolean) => {
  if (variant === VARIANTS.SECONDARY) {
    return css`
      background: ${({ theme }) => theme.palette.primaryPalette.blue};
      border: 1px solid transparent;
      color: ${({ theme }) => theme.palette.primaryPalette.white};

      &:hover,
      &:active {
        background: ${({ theme }) => theme.palette.primaryPalette.white};
        border: 1px solid ${({ theme }) => theme.palette.primaryPalette.blue};
        color: ${({ theme }) => theme.palette.primaryPalette.blue};
      }

      &::before {
        background-color: ${({ theme }) => theme.palette.primaryPalette.blue};
      }
    `;
  }

  if (variant === VARIANTS.THIRD) {
    return css`
      background: ${({ theme }) => theme.palette.primaryPalette.red};
      border: 1px solid transparent;
      color: ${({ theme }) => theme.palette.primaryPalette.white};

      &:hover,
      &:active {
        background: ${({ theme }) => theme.palette.primaryPalette.white};
        border: 1px solid ${({ theme }) => theme.palette.primaryPalette.red};
        color: ${({ theme }) => theme.palette.primaryPalette.red};
      }

      &::before {
        background-color: ${({ theme }) => theme.palette.primaryPalette.red};
      }
    `;
  }

  return css`
    background: ${({ theme }) => theme.palette.primaryPalette.white};
    border: 2px solid ${({ theme }) => theme.palette.primaryPalette.blue};
    color: ${({ theme }) => theme.palette.primaryPalette.blue};
    ${isAnimated &&
    css`
      animation: ${fadeIn} 0.3s ease-in 0.5s forwards;

      & span {
        animation: ${fadeIn} 0.3s ease-in 0.5s forwards;
      }
    `}
    &:hover,
    &:active {
      background: ${({ theme }) => theme.palette.primaryPalette.blue};
      border: 2px solid ${({ theme }) => theme.palette.primaryPalette.blue};
      color: ${({ theme }) => theme.palette.primaryPalette.white};
    }

    &::before {
      display: none;
    }
  `;
};

export const StyledLinkButton = styled.a<StyledLinkButtonTypes>`
  display: block;
  font-size: 1.5rem;
  height: 40px;
  line-height: 15px;
  opacity: 1;
  overflow: hidden;
  padding: 11.5px 10px;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: lowercase;
  transition: 0.5s;
  width: fit-content;
  ${({ isAnimated }) =>
    isAnimated &&
    css`
      animation: ${fadeIn} 0.3s ease-in 0.5s forwards;
      opacity: 0;

      span {
        animation: ${fadeIn} 0.2s linear 0.8s forwards;
        opacity: 0;
      }

      &::before {
        animation: ${animateButton} 0.8s ease-in-out 0.5s forwards;
        content: '';
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        transform: translateX(-100%);
        width: 100%;
      }

      &:hover {
        cursor: pointer;
      }
    `}

  @media ${({ theme }) => theme.media.tablet} {
    width: 260px;
  }

  ${({ variant, isAnimated }) => getVariant(variant, isAnimated)};
`;
