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
  min-height: 60vh;
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
  border: 1px solid ${({ theme }) => theme.palette.primaryPalette.blue};
  display: flex;
  flex-direction: column;
  min-width: 300px;
  z-index: 100;

  @media ${({ theme }) => theme.media.tablet} {
    min-width: 450px;
    justify-content: center;
  }

  h2 {
    margin-top: 20px;
  }
`;

export const Wrapper = styled.section`
  align-items: center;
  background-color: ${({ theme }) => theme.palette.primaryPalette.white};
  display: flex;
  height: 100vh;
  justify-content: center;
  margin-bottom: 20px;
  position: relative;
  width: 100%;

  @media ${({ theme }) => theme.media.tablet} {
    max-height: 700px;
  }
`;
export const BlueBelt = styled.div`
  background-color: ${({ theme }) => theme.palette.primaryPalette.blue};
  height: 50px;
  left: 0;
  position: absolute;
  top: 48%;
  width: 100%;
  z-index: 0;
`;
