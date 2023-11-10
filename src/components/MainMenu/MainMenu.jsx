import React from 'react'
import {
    CloseButton,
    InstructionsBox,
    MenuContainer,
    ModalStart,
    OptionBox,
    TittleGame,
} from './MainMenu.styled'
import IntructionsContent from '../IntructionsContent/IntructionsContent'


//import { data } from "../../assets/data"
import { data } from '../../../public/images/data'

const MainMenu = ({ resetGame }) => {
    const startGame = () => {
        const mainMenu = document.getElementById('mainMenu')
        mainMenu.classList.add('hide')
    }
    const goToInstructions = () => {
        const instructionsBox = document.getElementById('instructions-box')
        instructionsBox.classList.add('show')
    }
    const closeInstructions = () => {
        const instructionsBox = document.getElementById('instructions-box')
        instructionsBox.classList.remove('show')
    }
    const startNewGame = () => {
        resetGame()
        const mainMenu = document.querySelector('#mainMenu')
        mainMenu.classList.add('hide')
    }

   
   
    return (
        <MenuContainer id="mainMenu">
            <ModalStart>
                <InstructionsBox id="instructions-box">
                    <IntructionsContent/>
                    <CloseButton onClick={closeInstructions}>
                        &#xd7;
                    </CloseButton>
                </InstructionsBox>

                <TittleGame>SUPER Tic-Tac-Toe</TittleGame>

                <OptionBox onClick={goToInstructions}>Instructions</OptionBox>
                <OptionBox onClick={startGame}>Continue Game</OptionBox>
                <OptionBox onClick={startNewGame}>Start New Game</OptionBox>
            </ModalStart>
        </MenuContainer>
    )
}

export default MainMenu
