import { Calendar2EventFill } from '@styled-icons/bootstrap/Calendar2EventFill';
import { LifePreserver } from '@styled-icons/bootstrap/LifePreserver';
import { ArrowsAltH } from '@styled-icons/fa-solid/ArrowsAltH';
import { ArrowsAltV } from '@styled-icons/fa-solid/ArrowsAltV';
import { PeopleTeam } from '@styled-icons/fluentui-system-regular/PeopleTeam';
import { Speedometer } from '@styled-icons/ionicons-solid/Speedometer';
import { Sailboat } from '@styled-icons/remix-fill/Sailboat';
import styled from 'styled-components';

export const Description = styled.p`
  display: block;
  padding: 10px 20px;
`;

export const Information = styled.div`
  padding: 10px 20px;
`;

export const Properties = styled.ul`
  color: white;
  display: flex;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 20px 0;
`;

export const SingleProperties = styled.li`
  align-items: center;
  background: ${({ theme }) => theme.palette.primaryPalette.blue};
  border-radius: 15px;
  display: flex;
  font-weight: 700;
  font-weight: 300;
  margin: 10px 10px 0 0;
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

export const LengthIcon = styled(ArrowsAltH)`
  color: ${({ theme }) => theme.palette.primaryPalette.white};
  height: 20px;
  margin-right: 5px;
  width: 20px;
`;

export const DiveIcon = styled(ArrowsAltV)`
  color: ${({ theme }) => theme.palette.primaryPalette.white};
  height: 20px;
  margin-right: 5px;
  width: 20px;
`;

export const CalendarIcon = styled(Calendar2EventFill)`
  color: ${({ theme }) => theme.palette.primaryPalette.white};
  height: 20px;
  margin-right: 5px;
  width: 20px;
`;

export const Speed = styled(Speedometer)`
  color: ${({ theme }) => theme.palette.primaryPalette.white};
  height: 20px;
  margin-right: 5px;
  width: 20px;
`;
