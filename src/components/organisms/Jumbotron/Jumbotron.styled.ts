import styled from 'styled-components';

export const TextWrapper = styled.div`
  align-items: center;
  background: rgba(255, 255, 255, 0.94);
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  width: 100vw;
  z-index: 10;

  @media ${({ theme }) => theme.media.tablet} {
    height: 20vh;
  }

  @media ${({ theme }) => theme.media.desktop} {
    position: static;
    width: 500px;
    height: 400px;
    background: ${({ theme }) => theme.palette.primaryPalette.white};
    margin: 100px 0 auto;
  }

  @media ${({ theme }) => theme.media.largeDesktop} {
    margin: 100px 0 auto 10px;
    width: 700px;
    padding: 50px 50px;
  }
`;

export const Heading = styled.h1`
  font-weight: bold;
  margin: 10px 0;

  @media ${({ theme }) => theme.media.desktop} {
    font-size: 5rem;
    margin: 20px auto;
    font-weight: 800;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.4rem;
  line-height: 2.4rem;
  margin: 10px 0 20px;

  @media ${({ theme }) => theme.media.tablet} {
    padding: 30px 50px;
  }
`;

export const ImageWrapper = styled.div`
  overflow-x: hidden;
  text-align: center;
  width: 100vw;

  @media ${({ theme }) => theme.media.desktop} {
    position: absolute;
    z-index: 0;
    top: -50px;
    right: -150px;
  }

  @media ${({ theme }) => theme.media.largeDesktop} {
    top: 0;
    right: -30%;
  }

  img {
    height: auto;
    object-fit: cover;
    width: 100vw;

    @media ${({ theme }) => theme.media.desktop} {
      height: 500px;
    }

    @media ${({ theme }) => theme.media.largeDesktop} {
      height: 600px;
      object-fit: contain;
    }
  }
`;

export const JumbotronWrapper = styled.section`
  height: 100vh;
  position: relative;
  width: 100vw;

  @media ${({ theme }) => theme.media.tablet} {
    height: 800px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    overflow: hidden;
    margin: 0 auto;
    display: flex;
    align-items: center;
    max-height: 750px;
    max-width: ${({ theme }) => theme.breakpoints.maxWidth}px;
  } ;
`;
