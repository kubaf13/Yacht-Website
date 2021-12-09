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
      color: ${({ theme }) => theme.primaryPalette[300]};
      border: 1px solid #115d8c;

      &:hover,
      &:active {
        background-color: #f2f2f2;
        color: #f2f2f2;
      }

      &::before {
        background-color: #f2f2f2;
      }
    `;
  }

  return css`
    color: ${({ theme }) => theme.palette.primaryPalette[300]};
    border: 1px solid #f2f2f2;
    ${isAnimated &&
    css`
      animation: ${fadeIn} 0.3s ease-in 0.5s forwards;

      & span {
        animation: ${fadeIn} 0.3s ease-in 0.5s forwards;
      }
    `}
    &:hover,
    &:active {
      background-color: #115d8c;
      color: white;
    }

    &::before {
      display: none;
    }
  `;
};

export const StyledLinkButton = styled.a<StyledLinkButtonTypes>`
  position: relative;
  display: block;
  overflow: hidden;
  width: fit-content;
  height: 40px;
  opacity: 1;
  padding: 11.5px 10px;
  font-size: 15px;
  line-height: 15px;
  text-transform: uppercase;
  text-align: center;
  border-radius: 4px;
  transition: 0.5s;
  ${({ isAnimated }) =>
    isAnimated &&
    css`
      opacity: 0;
      animation: ${fadeIn} 0.3s ease-in 0.5s forwards;

      span {
        animation: ${fadeIn} 0.2s linear 0.8s forwards;
        opacity: 0;
      }

      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        transform: translateX(-100%);
        animation: ${animateButton} 0.8s ease-in-out 0.5s forwards;
      }

      &:hover {
        background-color: #115d8c;
        cursor: pointer;
      }
    `}

  @media ${({ theme }) => theme.media.tablet} {
    width: 260px;
  }

  ${({ variant, isAnimated }) => getVariant(variant, isAnimated)};
`;
