import styled from "styled-components";
import { breakpoints } from "../../assets/sizes";

export const CardStyled = styled.div`
    display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
 
 
  //margin: auto 1rem;
  margin: 0px auto;
  text-align: center;
  font-family: arial;
  margin-top:20px;
  border-radius: 4px;

`

export const ImageStyled =styled.img`
    
    
    @media ${breakpoints.mobile}{
      margin-top: 5px;
      width: calc(var(--instructions-size-mobile)*0.6); 
        height: 'auto';
    }
    @media ${breakpoints.minTablet}{
      margin-top: 20px;
      width: calc(var(--instructions-size-tablet)*0.6); 
        height: 'auto';
    }
    @media ${breakpoints.desktop}{
      margin-top: 30px;
        width: calc(var(--instructions-size-desktop)*0.6); 
        height: 'auto';
    }
    
`
export const TextContainer = styled.div`

      width: 300px;
  height: auto;
  background-color: beige;
  border:2px solid;
  border-color: #d0cdcd;
  border-radius: 4px;
  
`