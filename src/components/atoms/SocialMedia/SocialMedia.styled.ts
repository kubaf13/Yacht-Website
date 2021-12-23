import { Facebook } from '@styled-icons/remix-fill/Facebook';
import { SocialInstagram } from '@styled-icons/typicons/SocialInstagram';
import { SocialYoutubeCircular } from '@styled-icons/typicons/SocialYoutubeCircular';
import styled from 'styled-components';

export const YoutubeIcon = styled(SocialYoutubeCircular)`
  color: ${({ theme }) => theme.palette.primaryPalette.white};
  height: 30px;
  width: 30px;

  @media ${({ theme }) => theme.media.desktop} {
    height: 45px;
    width: 45px;
  }
`;

export const FacebookIcon = styled(Facebook)`
  color: ${({ theme }) => theme.palette.primaryPalette.white};
  height: 30px;
  width: 30px;

  @media ${({ theme }) => theme.media.desktop} {
    height: 45px;
    width: 45px;
  }
`;

export const InstagramIcon = styled(SocialInstagram)`
  color: ${({ theme }) => theme.palette.primaryPalette.white};
  height: 30px;
  width: 30px;

  @media ${({ theme }) => theme.media.desktop} {
    height: 45px;
    width: 45px;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.palette.primaryPalette.white};
  font-size: 1rem;

  @media ${({ theme }) => theme.media.desktop} {
    font-size: 1.3rem;
  }
`;

export const SocialWrapper = styled.div`
  align-items: center;
  display: flex;
  grid-area: socialMedia;
  justify-content: space-around;
  padding: 20px;

  @media ${({ theme }) => theme.media.tablet} {
    justify-content: space-evenly;
  }
  @media ${({ theme }) => theme.media.desktop} {
    max-width: 300px;
    padding: 5px;
    align-items: baseline;
  }
`;
