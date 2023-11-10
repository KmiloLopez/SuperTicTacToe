import styled from 'styled-components'
import { breakpoints } from '../../assets/sizes'

export const TittleGame = styled.h1`
    margin-bottom: 45px;
`

export const MenuContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(76, 105, 68, 0.5);
    width: 100%;
    height: 100%;
    //width: 100vw;
    //height: 100vh;
    position: absolute;
   z-index: 2;

    &.hide {
        display: none;
    }

`
export const ModalStart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: beige;
    
    border-radius: 4px;
    @media ${breakpoints.maxMobile}{
        width: 300px;
    height: 300px;
  }
   
  @media ${breakpoints.minTablet}{
    width: 450px;
    height: 450px;
  }
  @media ${breakpoints.desktop}{
    width: 480px;
    height: 480px;
  }
`
export const OptionBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: 1px solid;
    border-color: black;

    &:hover {
        background-color: lightgreen;
        cursor: pointer;
    }
`
export const InstructionsBox = styled.div`
    background-color: beige;
    
    @media ${breakpoints.mobile} {
        width: var(--instructions-size-mobile);
        height: var(--instructions-size-mobile);
    }
    @media ${breakpoints.minTablet} {
        width: var(--instructions-size-tablet);
        height: var(--instructions-size-tablet);
    }
    @media ${breakpoints.desktop} {
        width:var(--instructions-size-desktop);
        height: var(--instructions-size-desktop);
    }

    position: absolute;
    display: none;
    border-radius: 4px;
    &.show {
        display: block;
    }
`
export const CloseButton = styled.div`
    position: absolute;
    right: 25px;
    top: 15px;
    font-size: 28px;
    &:hover {
        background-color: lightgreen;
        cursor: pointer;
    }
`
