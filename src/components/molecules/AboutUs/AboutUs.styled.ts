import styled from 'styled-components';

export const TextWrapper = styled.article`
  background: ${({ theme }) => theme.palette.primaryPalette.white};
  padding: 30px 20px;
  position: absolute;
  width: 90%;

  @media ${({ theme }) => theme.media.tablet} {
    max-width: ${({ theme }) => theme.breakpoints.maxWidth}px;
    background: rgba(255, 255, 255, 0.9);
    padding: 40px 20px;
  }
`;

export const Heading = styled.h2`
  margin: 10px 0;
`;

export const Paragraph = styled.p`
  font-size: 1.3rem;
  line-height: 2rem;

  @media ${({ theme }) => theme.media.tablet} {
    line-height: 2.7rem;
  }
`;

export const Wrapper = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

export const ImageWrapper = styled.div`
  @media ${({ theme }) => theme.media.tablet} {
    width: 100vw;

    img {
      height: auto;
      object-fit: cover;
      width: 100%;
    }
  }
`;
