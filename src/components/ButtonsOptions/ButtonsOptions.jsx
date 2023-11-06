import React from 'react'
import { ButtonOptions } from './ButtonsOptions.styled'

const ButtonsOptions = () => {
    const showOptions = ()=>{
        const mainMenu =document.querySelector('#mainMenu');
        mainMenu.classList.remove('hide');

    }
  return (
    <ButtonOptions onClick={(showOptions)}>Options</ButtonOptions>
  )
}

export default ButtonsOptions