import { Facebook } from '@styled-icons/remix-fill/Facebook';
import { SocialInstagram } from '@styled-icons/typicons/SocialInstagram';
import { SocialYoutubeCircular } from '@styled-icons/typicons/SocialYoutubeCircular';
import styled from 'styled-components';

export const YoutubeIcon = styled(SocialYoutubeCircular)`
  color: ${({ theme }) => theme.palette.primaryPalette.white};
  height: 45px;
  width: 45px;
`;

export const FacebookIcon = styled(Facebook)`
  color: ${({ theme }) => theme.palette.primaryPalette.white};
  height: 45px;
  width: 45px;
`;

export const InstagramIcon = styled(SocialInstagram)`
  color: ${({ theme }) => theme.palette.primaryPalette.white};
  height: 45px;
  width: 45px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.palette.primaryPalette.white};
`;

export const SocialWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  padding: 20px;

  @media ${({ theme }) => theme.media.tablet} {
    max-width: 300px;
    padding: 5px;
  }
`;
