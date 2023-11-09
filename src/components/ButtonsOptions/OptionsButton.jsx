import React from 'react'
import { ButtonContainer, ButtonOptions } from './ButtonsOptions.styled'

const OptionsButton = () => {
    const showOptions = ()=>{
        const mainMenu =document.querySelector('#mainMenu');
        mainMenu.classList.remove('hide');

    }
  return (<ButtonContainer>

    <ButtonOptions onClick={(showOptions)}>Options</ButtonOptions>
  </ButtonContainer>
  )
}

export default OptionsButton