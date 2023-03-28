import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --blue: #036FC0 ;
    --dark-blue: #1B2033;
    --dark-gray: #252835;
    --gray-blue: #1C2C44;    
    --light-blue: #00B6DE;
    --white: #fdfdfd;
    --brown: #373737;
    --green-blue: #115678;
    --gray: #F4F4F4;
    --mainFont: 'Inter', sans-serif;

  }
  * {
    margin: 0;
    padding: 0;
    font-family: var(--mainFont);
    box-sizing: border-box;
  }
  h1 {
    font-size: 44px;
  }
  h2 {
    font-size: 32px;
  }
  h3 {
    font-size: 20px;
  }
  h4 {
    font-size: 16px;
  }
  h5 {
    font-size: 12px;
  }
`;

export default GlobalStyles;