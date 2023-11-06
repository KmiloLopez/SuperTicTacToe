import styled from "styled-components";

export const TittleGame = styled.h1`
    margin-bottom:45px;
`
 
export const MenuContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(76, 105, 68,.5);
width: 100vw;
height: 100vh;
position: absolute;
top: 0;

&.hide{
    display: none;
}

`
export const ModalStart = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: beige;
    width: 350px;
    height: 350px;
border-radius: 4px;
   
`
export const OptionBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
    width: 100%;
    border: 1px solid;
    border-color: black;
    
    &:hover{
        background-color: lightgreen;
        cursor: pointer;
    }
`
export const InstructionsBox = styled.div`
background-color: beige;
width: 350px;
height: 350px;
position: absolute;
display: none;
border-radius: 4px;
&.show{
    display: block;
}

`
export const CloseButton= styled.div`
    position: absolute;
    right: 25px;
    top:15px;
    font-size: 28px;   
    &:hover{
        background-color: lightgreen;
        cursor: pointer;
    }
`