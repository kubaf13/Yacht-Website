import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
  }
`;

export default GlobalStyle;
