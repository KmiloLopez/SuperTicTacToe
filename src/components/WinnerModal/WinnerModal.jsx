import React from 'react'
import { ButtonR, DivText, Section, SquareWinner, WinnerText } from './WinnerModal.styled'




const WinnerModal = ({winner,setMainBoxes,setTurn,setWinner,resetGame,setCellsTaken, TURNS}) => {
    

    const handleClick=() => {
        //reset game
        resetGame();
       
        // setTurn(TURNS.X);
        
        //setCellsTaken(1);
        
       
        
    }
  return (
   <>
   {winner!==null && (//Si winner es diferente de null mostrara contenido, de otra forma no retornara nada.
    <Section>
        <DivText>
            <WinnerText>
                {
                    winner === false
                    ? 'IS A TIE'
                    : 'WINNER:'
                }
            </WinnerText>
            <header className="win">
                {winner && <SquareWinner>{winner}</SquareWinner>}
            </header>
            <footer>
                <ButtonR onClick={handleClick}>Restart</ButtonR>
            </footer>
        </DivText>
    </Section>
   )

   }
   </>
  )
}

export default WinnerModal