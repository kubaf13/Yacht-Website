import styled from 'styled-components';

export const BookingWrapper = styled.section`
  margin-top: 50px;
  padding: 10px 20px;
`;

export const Columns = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 20px 0 0 10%;
  max-width: 550px;

  @media ${({ theme }) => theme.media.tablet} {
    margin: 20px 0 0 4%;
  }

  h5 {
    min-width: 110px;
  }
`;
