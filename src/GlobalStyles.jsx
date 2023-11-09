import { createGlobalStyle } from 'styled-components'
import VerdanaBold from './assets/fonts/verdanab.ttf'
import Verdana from './assets/fonts/verdana.ttf'

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
  --green-color: rgba(94, 255, 51, 0.5);
  --big-square-size:150px;
  --square-size:40px;
  --mark-size:calc(var(--square-size)*.8);

  --big-square-size-desktop:200px;
  --big-square-size-tablet:180px;
  --big-square-size-mobile:100px;

  --inner-square-size-desktop:55px;
  --inner-square-size-tablet:50px;
  --inner-square-size-mobile:28px;

  --mark-size-desktop:calc(var(--inner-square-size-desktop)*.8);
  --mark-size-tablet:calc(var(--inner-square-size-tablet)*.8);
  --mark-size-mobile:calc(var(--inner-square-size-mobile)*.8);
}


*,// contenedor universal no contempla los pseudo elementos
*::before,//agregamos los pseudo elementos
*::after {
  box-sizing: border-box;//totalwidth = width - padding - margin
}

body {
  margin: 0;
  font-family: 'Ceviche One',Verdana, sans-serif;
  overflow: hidden;//desaparece barra lateral e inferior
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

button {
  font-size: 16px;
}


//////////////////////////////////////////////////////////////////////////////////////////////////

/* Main container */

.main-container {
  width: 350px;
  height: 280px;
  margin: 0 auto;
}








.card {
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 350px;
  height: 300px;
  margin: auto 1rem;
  text-align: center;
  font-family: arial;
  margin-top:20px;
  border-radius: 4px;
  
}

 .text-container{
  width: 300px;
  height: 300px;
  background-color: beige;
  border:2px solid;
  border-color: #d0cdcd;
  border-radius: 4px;
  
 }

`

export default GlobalStyle
