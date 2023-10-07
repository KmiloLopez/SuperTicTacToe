import styled from "styled-components";

export const MainBoard = styled.div`
  height: 100vh; /* 100% de la altura de la ventana */
  width: 100vw;
  display: grid;
  
 justify-content: center;
 align-content: center;
 justify-items: center;
 align-items: center; 
  grid-template-columns: repeat(
    3,
    auto
  ); /* Divide en 3 columnas iguales */
  
 
`;
