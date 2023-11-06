import styled from "styled-components";


export const ButtonOptions = styled.button`
padding:4px 8px;
margin: 200px 200px;
position: absolute;
background-color: var(--green-color);
transition: transform 0.5s;
&:hover{
    transform: translateY(-2px);
    background-color: var(--hover-color);
    color: black;
    cursor: pointer;
}
`