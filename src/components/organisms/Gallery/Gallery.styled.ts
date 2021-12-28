import styled from 'styled-components';

export const GalleryWall = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(6, auto);
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
  .grid-item-7,
  .grid-item-8,
  .grid-item-9,
  .grid-item-10,
  .grid-item-11,
  .grid-item-12,
  .grid-item-13 {
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

    .grid-item-8 {
      grid-column-end: 3;
      grid-column-start: 1;
      grid-row-end: 4;
      grid-row-start: 4;
    }
    .grid-item-11 {
      grid-column-end: 2;
      grid-column-start: 2;
      grid-row-end: 6;
      grid-row-start: 5;
    }
    .grid-item-12 {
      grid-column-end: 3;
      grid-column-start: 3;
      grid-row-end: 6;
      grid-row-start: 5;
    }
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.palette.primaryPalette.blue};
  margin: 40px auto;
  text-align: center;
`;
