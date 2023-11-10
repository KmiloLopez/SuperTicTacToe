import styled from 'styled-components'
import { breakpoints } from '../../assets/sizes'

export const GreenBackContainer = styled.div`
    position: absolute;

    z-index: -5;

    display: grid;
    grid-template-columns: repeat(3, auto);
    justify-content: center;
    align-items: center;
    align-content: center;
    justify-items: center;
    height: 100vh; /* 100% de la altura de la ventana */
    width: 100vw;
    @media ${breakpoints.mobile}{
        top:-175px;
    }
    @media ${breakpoints.minTablet}{
        top:-100px;
    }
    @media ${breakpoints.desktop}{
        top:-60px;
    }
    
`

export const SingleGreenBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;

    @media ${breakpoints.maxMobile} {
        
        width: var(--big-square-size-mobile);
        height: var(--big-square-size-mobile);
    }
    @media ${breakpoints.minTablet} {
        
        width: var(--big-square-size-tablet);
        height: var(--big-square-size-tablet);
    }
    @media ${breakpoints.desktop} {
      
        width: var(--big-square-size-desktop);
        height: var(--big-square-size-desktop);
    }

    &.restricted {
        animation: cambioColor 1.5s infinite alternate;
        //animation-delay: 3s;
        //animation-fill-mode: both;
    }
    @keyframes cambioColor {
        from {
            background-color: rgba(94, 255, 51, 0.5); /* Color inicial */
        }
        to {
            background-color: transparent;
        }
    }
`
export const PositionContainer = styled.div`
    
    
`