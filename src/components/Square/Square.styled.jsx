import styled from "styled-components";
import { breakpoints } from "../../assets/sizes";

export const StyledSquare = styled.div`
background-color: transparent;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
 

  @media ${breakpoints.maxMobile}{
    width:var(--inner-square-size-mobile);
    height:var(--inner-square-size-mobile);

    //show x mark
  .x&::before,
  .x&::after {
    position: absolute;
    content: "";
    width: calc(var(--mark-size-mobile) * 0.15);
    height: var(--mark-size-mobile);
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
    width: var(--mark-size-mobile);
    height: var(--mark-size-mobile);
    background-color: var(--circle-color);
  }
  &::after {
    width: calc(var(--mark-size-mobile) * 0.7);
    height: calc(var(--mark-size-mobile) * 0.7);
    background-color: var(--game-background-color);
  }


  .xx&:hover {
    &::after,
    &::before {
      position: absolute;
      content: "";
      width: calc(var(--mark-size-mobile) * 0.15);
      height: var(--mark-size-mobile);
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
  width: var(--mark-size-mobile);
    height: var(--mark-size-mobile);
    background-color:var(--hover-color);
 }
 .oo&:hover&::after{
  width: calc(var(--mark-size-mobile) * 0.7);
    height: calc(var(--mark-size-mobile) * 0.7);
    background-color: var(--game-background-color);
 }
&.restricted{
  cursor:not-allowed;
}
  }
  @media ${breakpoints.minTablet} {
    width:var(--inner-square-size-tablet);
    height:var(--inner-square-size-tablet);

    //show x mark
  .x&::before,
  .x&::after {
    position: absolute;
    content: "";
    width: calc(var(--mark-size-tablet) * 0.15);
    height: var(--mark-size-tablet);
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
    width: var(--mark-size-tablet);
    height: var(--mark-size-tablet);
    background-color: var(--circle-color);
  }
  &::after {
    width: calc(var(--mark-size-tablet) * 0.7);
    height: calc(var(--mark-size-tablet) * 0.7);
    background-color: var(--game-background-color);
  }


  .xx&:hover {
    &::after,
    &::before {
      position: absolute;
      content: "";
      width: calc(var(--mark-size-tablet) * 0.15);
      height: var(--mark-size-tablet);
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
  width: var(--mark-size-tablet);
    height: var(--mark-size-tablet);
    background-color:var(--hover-color);
 }
 .oo&:hover&::after{
  width: calc(var(--mark-size-tablet) * 0.7);
    height: calc(var(--mark-size-tablet) * 0.7);
    background-color: var(--game-background-color);
 }
&.restricted{
  cursor:not-allowed;
}
  }
  @media ${breakpoints.desktop}{
    width:var(--inner-square-size-desktop);
    height:var(--inner-square-size-desktop);

    //show x mark
  .x&::before,
  .x&::after {
    position: absolute;
    content: "";
    width: calc(var(--mark-size-desktop) * 0.15);
    height: var(--mark-size-desktop);
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
    width: var(--mark-size-desktop);
    height: var(--mark-size-desktop);
    background-color: var(--circle-color);
  }
  &::after {
    width: calc(var(--mark-size-desktop) * 0.7);
    height: calc(var(--mark-size-desktop) * 0.7);
    background-color: var(--game-background-color);
  }


  .xx&:hover {
    &::after,
    &::before {
      position: absolute;
      content: "";
      width: calc(var(--mark-size-desktop) * 0.15);
      height: var(--mark-size-desktop);
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
  width: var(--mark-size-desktop);
    height: var(--mark-size-desktop);
    background-color:var(--hover-color);
 }
 .oo&:hover&::after{
  width: calc(var(--mark-size-desktop) * 0.7);
    height: calc(var(--mark-size-desktop) * 0.7);
    background-color: var(--game-background-color);
 }
&.restricted{
  cursor:not-allowed;
}
  }
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


  
`;
