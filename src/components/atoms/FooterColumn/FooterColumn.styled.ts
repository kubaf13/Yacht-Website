import styled from 'styled-components';

export const ColumnWrapper = styled.div`
  color: ${({ theme }) => theme.palette.primaryPalette.white};
  display: flex;
  flex-direction: column;
  margin: 10px 5px;
`;

export const ColumnTitle = styled.a`
  color: ${({ theme }) => theme.palette.primaryPalette.white};
  font-size: 1.5rem;
  font-weight: 400;
  text-decoration: none;

  @media ${({ theme }) => theme.media.desktop} {
    font-size: 2rem;
  }
`;

export const ColumnList = styled.ul`
  display: none;

  @media ${({ theme }) => theme.media.desktop} {
    display: block;
    list-style-type: none;
  }
`;

export const ColumnLi = styled.li`
  margin: 10px 0;

  a {
    color: ${({ theme }) => theme.palette.primaryPalette.white};
    font-size: 1.1rem;
    font-weight: 200;
    text-decoration: none;
  }
`;
