import styled from 'styled-components';

export const GalleryWall = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, auto);
  margin: 0 auto;
  max-width: ${({ theme }) => theme.breakpoints.maxWidth}px;
  position: relative;

  img {
    height: 100%;
    object-fit: cover;
    transition: all 0.7s ease-in-out;
    width: 100%;

    @media ${({ theme }) => theme.media.desktop} {
      :hover {
        transform: scale(1.1);
      }
    }
  }

  .grid-item-1,
  .grid-item-2,
  .grid-item-3,
  .grid-item-4,
  .grid-item-5,
  .grid-item-6,
  .grid-item-7 {
    overflow: hidden;
  }

  .grid-item-1 {
    grid-column-end: 4;
    grid-column-start: 2;
    grid-row-end: 1;
    grid-row-start: 1;
  }

  .grid-item-2 {
    grid-column-end: 2;
    grid-column-start: 1;
    grid-row-end: 4;
    grid-row-start: 1;
  }

  .grid-item-3 {
    grid-column-end: 2;
    grid-column-start: 2;
    grid-row-end: 3;
    grid-row-start: 2;
  }

  .grid-item-4 {
    grid-column-end: 3;
    grid-column-start: 3;
    grid-row-end: 4;
    grid-row-start: 2;
  }

  .grid-item-7 {
    grid-column-end: 3;
    grid-column-start: 1;
    grid-row-end: 4;
    grid-row-start: 4;
  }

  @media ${({ theme }) => theme.media.desktop} {
    .grid-item-1 {
      grid-column-end: 4;
      grid-column-start: 2;
      grid-row-end: 2;
      grid-row-start: 1;
    }

    .grid-item-2 {
      grid-column-end: 1;
      grid-column-start: 1;
      grid-row-end: 3;
      grid-row-start: 1;
    }

    .grid-item-3 {
      grid-column-end: 2;
      grid-column-start: 2;
      grid-row-end: 3;
      grid-row-start: 2;
    }

    .grid-item-4 {
      grid-column-end: 3;
      grid-column-start: 3;
      grid-row-end: 4;
      grid-row-start: 2;
    }

    .grid-item-7 {
      grid-column-end: 4;
      grid-column-start: 1;
      grid-row-end: 4;
      grid-row-start: 4;

      img {
        height: 50%;
      }
    }
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.palette.primaryPalette.white};
  margin: 40px auto;
  position: relative;
  text-align: center;

  @media ${({ theme }) => theme.media.largeDesktop} {
    color: ${({ theme }) => theme.palette.primaryPalette.blue};
  }
`;

export const Decor = styled.div`
  background-color: ${({ theme }) => theme.palette.primaryPalette.blue};
  height: 90px;
  left: -250px;
  position: absolute;
  top: 40px;
  transform: rotate(-10deg);
  width: 200vw;

  @media ${({ theme }) => theme.media.tablet} {
    top: -10px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    top: -20px;
  }

  @media ${({ theme }) => theme.media.largeDesktop} {
    display: none;
  }
`;
