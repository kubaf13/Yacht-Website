import styled from 'styled-components';

export const CardsSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.breakpoints.maxWidth}px;
`;
