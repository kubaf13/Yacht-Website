import { FacebookBox } from '@styled-icons/remix-fill/FacebookBox';
import { SocialInstagram } from '@styled-icons/typicons/SocialInstagram';
import { SocialYoutubeCircular } from '@styled-icons/typicons/SocialYoutubeCircular';
import styled from 'styled-components';

export const YoutubeIcon = styled(SocialYoutubeCircular)`
  color: ${({ theme }) => theme.palette.primaryPalette.white};
  height: 45px;
  width: 45px;
`;

export const FacebookIcon = styled(FacebookBox)`
  color: ${({ theme }) => theme.palette.primaryPalette.white};
  height: 45px;
  width: 45px;
`;

export const InstagramIcon = styled(SocialInstagram)`
  color: ${({ theme }) => theme.palette.primaryPalette.white};
  height: 45px;
  width: 45px;
`;

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;
