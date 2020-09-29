import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  body {
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Nanum Gothic', sans-serif;
  }

  * {
    box-sizing: inherit;
  }

  html,
  body {
    height: 100%;
  }
  
  #root {
    height: 100%;
  }
  
  #root {
    position: relative;
  }

  body {
    background-color: ${(props) => props.theme.primary};
  }
`;
export default GlobalStyle;
