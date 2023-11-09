import styled from 'styled-components'
import { breakpoints } from '../assets/sizes'

export const MainBoardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    justify-content: center;
    align-items: center;
    align-content: center;
    justify-items: center;
    height: auto; /* before 100vh */
    width: 100vw;
`

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    //background-color: #c2a4de;
    border: 16px solid black;
    height: 100vh;
`
export const GameTittle = styled.h1`
    justify-content: center;
    margin: 10px auto;
    margin-bottom: 20px;
    padding-left: 30px;
   
    @media ${breakpoints.mobile}{
        font-size: 40px;
    }
    @media ${breakpoints.minTablet}{
        font-size: 80px;
    }
    @media ${breakpoints.desktop}{
        font-size: 88px;
    }
`
