import React from 'react'
import {
    ButtonR,
    DivText,
    Section,
    SquareWinner,
    TieText,
    WinnerText,
} from './WinnerModal.styled'

const WinnerModal = ({
    winner,
    setMainBoxes,
    setTurn,
    setWinner,
    resetGame,
    setCellsTaken,
    TURNS,
}) => {
    const handleClick = () => {
        //reset game
        resetGame()
    }
    return (
        <>
            {winner !== null ? (
                winner === false ? (
                    <Section>
                        <DivText>
                            
                            <TieText>
                                That's a TIE!
                            </TieText>
                            
                            <footer>
                                <ButtonR onClick={handleClick}>Restart</ButtonR>
                            </footer>
                        </DivText>
                    </Section>
                ) : (
                    <Section>
                        <DivText>
                            <WinnerText>
                                'WINNER:'
                            </WinnerText>
                            <header className="win">
                                {winner && (
                                    <SquareWinner>{winner}</SquareWinner>
                                )}
                            </header>
                            <footer>
                                <ButtonR onClick={handleClick}>Restart</ButtonR>
                            </footer>
                        </DivText>
                    </Section>
                )
            ) : (
                ''
            )}
        </>
    )
}

export default WinnerModal
