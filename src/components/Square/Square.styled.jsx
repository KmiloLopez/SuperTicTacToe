import styled from "styled-components";

export const StyledSquare = styled.div`
background-color: transparent;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: var(--square-size);
  height: var(--square-size);
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
  cursor: pointer;
//show x mark
  .x&::before,
  .x&::after {
    position: absolute;
    content: "";
    width: calc(var(--mark-size) * 0.15);
    height: var(--mark-size);
    background-color: var(--x-color);
  }
  //show o mark
  .o&::after,
  .o&::before {
    position: absolute;
      content: "";
      border-radius: 50%;
  }
  &::before {
    width: var(--mark-size);
    height: var(--mark-size);
    background-color: var(--circle-color);
  }
  &::after {
    width: calc(var(--mark-size) * 0.7);
    height: calc(var(--mark-size) * 0.7);
    background-color: var(--game-background-color);
  }


  .xx&:hover {
    &::after,
    &::before {
      position: absolute;
      content: "";
      width: calc(var(--mark-size) * 0.15);
      height: var(--mark-size);
      background-color: #d0cdcd;
    }
  }
  &::after {
    transform: rotate(-45deg);
  }
  &::before {
    transform: rotate(45deg);
  }
  .oo&:hover {
    &::after,
    &::before {
      position: absolute;
      content: "";
      border-radius: 50%;
    }
  }
 .oo&:hover&::before{
  width: var(--mark-size);
    height: var(--mark-size);
    background-color:var(--hover-color);
 }
 .oo&:hover&::after{
  width: calc(var(--mark-size) * 0.7);
    height: calc(var(--mark-size) * 0.7);
    background-color: var(--game-background-color);
 }
&.restricted{
  cursor:not-allowed;
}

  
`;
