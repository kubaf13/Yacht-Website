import styled from 'styled-components';

export const StyledInput = styled.input`
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.palette.primaryPalette.blue};
  height: 50px;
  margin: 10px 0;
  min-width: 250px;
  outline: none;
  position: relative;
`;

export const FormField = styled.div``;

export const FormWrapper = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0 auto;
  min-height: 30vh;
  width: 80%;

  @media ${({ theme }) => theme.media.tablet} {
    min-height: 430px;
  }
`;

export const StyledFormButton = styled.button`
  background: ${({ theme }) => theme.palette.primaryPalette.blue};
  border: 2px solid transparent;
  color: ${({ theme }) => theme.palette.primaryPalette.white};
  cursor: pointer;
  display: block;
  font-size: 1.5rem;
  height: 40px;
  margin-top: 40px;
  opacity: 1;
  overflow: hidden;
  padding: 2.5px 10px;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: lowercase;
  transition: 0.5s ease-in-out;
  width: fit-content;

  &:hover,
  &:active {
    background: ${({ theme }) => theme.palette.primaryPalette.white};
    border: 2px solid ${({ theme }) => theme.palette.primaryPalette.blue};
    color: ${({ theme }) => theme.palette.primaryPalette.blue};
  }
`;

export const WhitePaper = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.palette.primaryPalette.white};
  border: 2px solid ${({ theme }) => theme.palette.primaryPalette.blue};
  display: flex;
  flex-direction: column;
  width: 90%;

  @media ${({ theme }) => theme.media.tablet} {
    max-width: 550px;
    justify-content: center;
  }

  h2 {
    margin-top: 20px;
  }
`;

export const Wrapper = styled.section`
  align-items: center;
  display: flex;
  height: fit-content;
  justify-content: center;
  margin: 50px auto;
  position: relative;
  width: 100%;

  @media ${({ theme }) => theme.media.tablet} {
    max-height: 700px;
  }
`;

export const Flag = styled.div`
  background: ${({ theme }) => theme.palette.primaryPalette.blue};
  height: 100px;
  position: absolute;
  width: 100vw;
  z-index: -10;
`;
