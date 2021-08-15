import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');
  
  *, *:before, *:after {
    box-sizing: border-box;
  }
  
  html, body {
    height: 100%;
    font-family: 'Kumbh Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    padding: 2em;
    margin: 0 auto;

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
