import styled from 'styled-components';

export const DateWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  margin: 10px 0;
  max-width: 550px;
`;

export const Date = styled.p`
  font-size: 1.4rem;
`;

export const Sale = styled.div`
  display: block;
`;

export const Price = styled.p`
  font-size: 1.4rem;
`;

export const OldPrice = styled.p`
  color: ${({ theme }) => theme.palette.primaryPalette.grey};
  display: inline-block;
  font-size: 1.4rem;
  position: relative;

  ::after {
    background-color: ${({ theme }) => theme.palette.primaryPalette.red};
    content: '';
    height: 3px;
    left: 0;
    position: absolute;
    top: 40%;
    width: 100%;
  }
`;

export const NewPrice = styled.p`
  color: ${({ theme }) => theme.palette.primaryPalette.red};
  font-size: 1.4rem;
  font-weight: 600;
`;
