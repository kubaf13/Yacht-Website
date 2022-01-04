import styled from 'styled-components';

export const PageWrapper = styled.section`
  min-height: 90vh;
  position: relative;

  h1 {
    margin: 20px auto;
    text-align: center;
  }
`;
export const ContentWrapper = styled.article`
  display: flex;
  flex-direction: column-reverse;

  @media ${({ theme }) => theme.media.desktop} {
    flex-direction: row;
    flex-wrap: wrap;
  } ;
`;

export const InfoBlock = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @media ${({ theme }) => theme.media.desktop} {
    width: 50%;
  } ;
`;

export const YachtInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SingleYachtInfo = styled.div`
  margin: 10px auto;
  min-width: 300px;
`;

export const Heading = styled.p`
  color: ${({ theme }) => theme.palette.primaryPalette.lightGrey};
  display: flex;
  justify-content: flex-start;
  width: 100px;
`;

export const Value = styled.p`
  color: ${({ theme }) => theme.palette.primaryPalette.blue};
  font-size: 2.5rem;
  margin-top: 10px;
`;
export const ButtonsWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  min-height: 100px;
  width: 100%;

  @media ${({ theme }) => theme.media.desktop} {
    width: 50%;
  } ;
`;

export const AcceptButton = styled.button`
  background: ${({ theme }) => theme.palette.primaryPalette.blue};
  border: 1px solid transparent;
  color: ${({ theme }) => theme.palette.primaryPalette.white};
  font-size: 1.5rem;
  height: 40px;
  line-height: 15px;
  margin: 0 10px;
  min-width: 200px;
  opacity: 1;
  overflow: hidden;
  padding: 11.5px 20px;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: lowercase;
  transition: 0.5s;

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

export const ImageWrapper = styled.div`
  width: 100%;

  @media ${({ theme }) => theme.media.desktop} {
    width: 50%;
  } ;
`;
