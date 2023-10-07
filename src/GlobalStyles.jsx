import { createGlobalStyle } from 'styled-components';
import VerdanaBold from './assets/fonts/verdanab.ttf';
import Verdana from './assets/fonts/verdana.ttf';




const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Verdana';
  src: url(${Verdana}) format('truetype');
  font-weight: 400;
}

@font-face {
  font-family: 'Verdana';
  src: url(${VerdanaBold}) format('truetype');
  font-weight: 700;
}


//(props.darkMode ? '#DARKMODECOLORS' : '#NODARKMODECOLORS')
:root {
  --main-text-color:'#212121'; 
  --circle-color:#DE4621;
  --x-color:#21B9DE;
  --game-background-color:#ffffff;
  --hover-color:#d0cdcd;
  --big-square-size:150px;
  --square-size:40px;
  --mark-size:calc(var(--square-size)*.8);
}


*,// contenedor universal no contempla los pseudo elementos
*::before,//agregamos los pseudo elementos
*::after {
  box-sizing: border-box;//totalwidth = width - padding - margin
}

body {
  margin: 0;
}

ul{
  list-style: none;
    padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

input,
button {
  font: inherit;
  background-color: inherit;
  padding: 0;
  margin: 0;
}

`;

export default GlobalStyle;
