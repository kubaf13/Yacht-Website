import { LifePreserver } from '@styled-icons/bootstrap/LifePreserver';
import { PeopleTeam } from '@styled-icons/fluentui-system-regular/PeopleTeam';
import { Sailboat } from '@styled-icons/remix-fill/Sailboat';
import styled from 'styled-components';

export const Description = styled.p`
  display: block;

  @media ${({ theme }) => theme.media.desktop} {
    width: 50%;
  }
`;

export const Information = styled.div`
  padding: 10px 20px;
`;

export const Properties = styled.ul`
  color: white;
  display: flex;
  list-style-type: none;
  margin: 10px 0;
`;

export const SingleProperties = styled.li`
  align-items: center;
  background: ${({ theme }) => theme.palette.primaryPalette.blue};
  border-radius: 15px;
  display: flex;
  font-weight: 700;
  font-weight: 300;
  margin-right: 10px;
  padding: 5px 10px;
`;

export const BoatIcon = styled(Sailboat)`
  color: ${({ theme }) => theme.palette.primaryPalette.white};
  height: 20px;
  margin-right: 5px;
  width: 20px;
`;

export const PeopleIcon = styled(PeopleTeam)`
  color: ${({ theme }) => theme.palette.primaryPalette.white};
  height: 20px;
  margin-right: 5px;
  width: 20px;
`;

export const LifePreserverIcon = styled(LifePreserver)`
  color: ${({ theme }) => theme.palette.primaryPalette.white};
  height: 20px;
  margin-right: 5px;
  width: 20px;
`;
