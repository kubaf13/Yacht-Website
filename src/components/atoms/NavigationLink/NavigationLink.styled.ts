import styled from 'styled-components';

export const StyledNavLink = styled.a`
  color: ${({ theme }) => theme.palette.primaryPalette.blue};
  font-size: 2rem;
  position: relative;
  text-decoration: none;
  text-transform: lowercase;
  transition: 0.5s ease-out;

  &:hover {
    color: ${({ theme }) => theme.palette.primaryPalette.lightBlue};
  }
`;
