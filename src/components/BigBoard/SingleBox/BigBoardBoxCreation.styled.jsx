import styled from "styled-components";


export const BigBoardBoxStyle = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid pink;
  width: var(--big-square-size);
  height: var(--big-square-size);
  &:first-child, //para un primer hijo de estas caracteristicas hacemos las siguientes modificaciones
    &:nth-child(2),//para un segundo hijo de estas caracteristicas hacemos las siguientes modificaciones
    &:nth-child(3) {
    border-top: none;
  }
  &:first-child,  //o tambien(3n+1) cuando n=0 (1) n=1 (4) y n=2 (7)
    &:nth-child(4),
    &:nth-child(7) {
    border-left: none;
  }
  &:nth-child(7),
  &:nth-child(8),
  &:nth-child(9) {
    border-bottom: none;
  }
  &:nth-child(3n) {
    //para los hijos que queden en estas posiciones siendo n un numero del 0 al infinito
    border-right: none;
  }
  &.restricted{
    cursor: not-allowed;
  }

//show x mark

`