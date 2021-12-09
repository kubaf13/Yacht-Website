import { createGlobalStyle } from 'styled-components';

import { Theme } from '@/styles/theme/theme';

interface StyleProps {
  theme: Theme;
}

const GlobalStyle = createGlobalStyle<StyleProps>`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    font-size: 10px;
  }
  
  p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.palette.secondaryPalette['500']}
  }
  
  h1,h2,h3,h4,h5 {
    color: ${({ theme }) => theme.palette.primaryPalette['500']}
  }
  
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
`;

export default GlobalStyle;
