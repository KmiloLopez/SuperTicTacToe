import styled from "styled-components";

export const styledSquare = styled.div`
    border: 1px solid black;
    width: var(--square-size);
    height: var(--square-size);
    &:first-child, //para un primer hijo de estas caracteristicas hacemos las siguientes modificaciones
    &:nth-child(2),//para un segundo hijo de estas caracteristicas hacemos las siguientes modificaciones
    &:nth-child(3)
    {
        border-top: none;
    };
    &:first-child,  //o tambien(3n+1) cuando n=0 (1) n=1 (4) y n=2 (7)
    &:nth-child(4),
    &:nth-child(7){
        border-left: none;
    };
    &:nth-child(7),
    &:nth-child(8),
    &:nth-child(9){
        border-bottom: none;
    };
    &:nth-child(3n){//para los hijos que queden en estas posiciones siendo n un numero del 0 al infinito
        border-right: none;
    };
    cursor: pointer;
    `
