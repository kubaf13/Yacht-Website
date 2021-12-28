import { createGlobalStyle } from 'styled-components';

import { Theme } from '@/styles/theme/theme.types';

interface StyleProps {
  theme: Theme;
}

const GlobalStyle = createGlobalStyle<StyleProps>`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html, body {
    font-size: 10px;
    font-family: 'Montserrat', -apple-system, Roboto, sans-serif, Arial;
    scroll-behavior: smooth;
  }
  
  p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.palette.primaryPalette.paragraph}
  }
  
  h1, h2, h3, h4, h5 {
    color: ${({ theme }) => theme.palette.primaryPalette.blue};
    font-weight: 700;
  }
  
  h1 {
    font-size: 3.5rem;
  }

  h2 {
    font-size: 2.8rem;
  }

  h3 {
    font-size: 2.4rem;
  }

  h4 {
    font-size: 2.1rem;
  }

  h5 {
    font-size: 1.8rem;
  }

  @media ${({ theme }) => theme.media.tablet}{
    h1 {
      font-size: 4.0rem;
    }

    h2 {
      font-size: 3.4rem;
    }

    h3 {
      font-size: 2.6rem;
    }

    h4 {
      font-size: 2.1rem;
    }

    h5 {
      font-size: 1.8rem;
    }
  }

  @media ${({ theme }) => theme.media.desktop}{
    h1 {
      font-size: 4.6rem;
    }
    
    h2 {
      font-size: 3.6rem;
    }
    
    h3 {
      font-size: 2.8rem;
    }

    h4 {
      font-size: 2.2rem;
    }

    h5 {
      font-size: 1.8rem;
    }
  }
  
`;

export default GlobalStyle;
