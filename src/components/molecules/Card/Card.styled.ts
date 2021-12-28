import styled from 'styled-components';

import { ImagePosition } from './Card.types';

interface CardWrapperTypes {
  imagePosition: ImagePosition;
}

export const CardWrapper = styled.div<CardWrapperTypes>`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px auto;

  @media ${({ theme }) => theme.media.desktop} {
    flex-direction: ${({ imagePosition }) =>
      imagePosition === ImagePosition.LEFT ? 'row' : 'row-reverse'};
    margin: 0 auto;
  }
`;

export const ImageWrapper = styled.div`
  background-color: white;
  width: 100%;

  @media ${({ theme }) => theme.media.desktop} {
    width: 50%;
    padding: 5%;
  }

  img {
    height: auto;
    object-fit: contain;
    object-position: center;
    width: 100%;

    @media ${({ theme }) => theme.media.desktop} {
      border-radius: 5%;
      box-shadow: 0 0 10px black;
    }
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 300px;
  padding: 5%;

  @media ${({ theme }) => theme.media.desktop} {
    width: 50%;
  }
`;

export const Title = styled.h3`
  font-weight: 700;
`;

export const SubTitle = styled.h5`
  color: ${({ theme }) => theme.palette.primaryPalette.gray};
  margin: 10px 0;
`;

export const Description = styled.p`
  margin: 10px 0 20px;
`;
