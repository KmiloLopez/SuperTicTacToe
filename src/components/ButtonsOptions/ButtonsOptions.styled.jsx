import styled from "styled-components";


export const ButtonOptions = styled.button`

padding:4px 16px;
margin-left: 50px;
width: fit-content;
//position: absolute;
background-color: var(--green-color);
transition: transform 0.5s;
&:hover{
    transform: translateY(-2px);
    background-color: var(--hover-color);
    color: black;
    cursor: pointer;
}
`
export const ButtonContainer = styled.div`
    margin: 10px auto;
`