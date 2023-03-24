import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --blue: #036FC0 ;
    --dark-blue: #1B2033;
    --gray-blue: #1C2C44;    
    --light-blue: #00B6DE;
    --white: #fdfdfd;
    --mainFont: 'Inter', sans-serif;
  }
  * {
    margin: 0;
    padding: 0;
    font-family: var(--mainFont);
  }
  h1 {
    font-size: 48px;
  }
  h2 {
    font-size: 32px;
  }
  h3 {
    font-size: 24px;
  }
  h4 {
    font-size: 20px;
  }
  h5 {
    font-size: 16px;
  }
`;

export default GlobalStyles;