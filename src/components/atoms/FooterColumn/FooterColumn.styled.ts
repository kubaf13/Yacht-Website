import styled from 'styled-components';

export const ColumnWrapper = styled.div`
  color: ${({ theme }) => theme.palette.primaryPalette.white};
  display: flex;
  flex-direction: column;
`;

export const ColumnTitle = styled.a`
  color: ${({ theme }) => theme.palette.primaryPalette.white};
  font-size: 2rem;
  font-weight: 800;
  text-decoration: none;
`;

export const ColumnList = styled.ul`
  display: none;

  @media ${({ theme }) => theme.media.tablet} {
    display: block;
    list-style-type: none;
  }
`;

export const ColumnLi = styled.li`
  margin: 10px 0;

  a {
    color: ${({ theme }) => theme.palette.primaryPalette.white};
    font-size: 1.7rem;
    font-weight: 300;
    text-decoration: none;
  }
`;
