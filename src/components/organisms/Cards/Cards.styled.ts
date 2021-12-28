import styled from 'styled-components';

export const CardsSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: ${({ theme }) => theme.breakpoints.maxWidth}px;
`;
