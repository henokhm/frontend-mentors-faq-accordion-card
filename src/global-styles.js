import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;

    background: hsla(273, 75%, 66%, 1);

    background: linear-gradient(
        270deg,
        hsla(273, 75%, 66%, 1) 0%,
        hsla(240, 73%, 65%, 1) 100%
      )
      fixed;
  
    background: -moz-linear-gradient(
        270deg,
        hsla(273, 75%, 66%, 1) 0%,
        hsla(240, 73%, 65%, 1) 100%
      )
      fixed;
  
    background: -webkit-linear-gradient(
        270deg,
        hsla(273, 75%, 66%, 1) 0%,
        hsla(240, 73%, 65%, 1) 100%
      )
      fixed;
  
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#af67e9", endColorstr="#6565e7", GradientType=1 );
  
}`;
