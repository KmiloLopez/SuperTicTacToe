import styled from 'styled-components'

export const GreenBackContainer = styled.div`
   
    position: absolute;
    top: 0;
    z-index: -50000;

    display:grid;
    grid-template-columns: repeat(3,auto);
    justify-content: center;
    align-items: center;
    align-content: center;
    justify-items: center;
    height: 100vh; /* 100% de la altura de la ventana */
    width: 100vw;
`


export const SingleGreenBox = styled.div`


  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: var(--big-square-size);
  height: var(--big-square-size);

  &.restricted{
    animation: cambioColor 5s infinite alternate; 
    animation-delay: 5s; 
    animation-fill-mode: both;
    
  }
  @keyframes cambioColor {
  from {
    background-color: rgba(94, 255, 51, 0.5); /* Color inicial */
  }
  to {
    background-color: transparent; 
  }
}
  
`