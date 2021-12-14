import styled from 'styled-components';

export const NavigationWrapper = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  list-style-type: none;
  position: relative;
  width: 100vw;

  @media ${({ theme }) => theme.media.tablet} {
    height: 60px;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const StyledLi = styled.li`
  margin: 20px 0;

  @media ${({ theme }) => theme.media.mobile} {
    margin: 40px 0;
  }

  @media ${({ theme }) => theme.media.tablet} {
    margin: 5px 20px;
  } ;
`;
