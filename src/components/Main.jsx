import React, { useEffect } from "react";
import { useState } from "react";
import { MainBoardContainer } from "./Main.styled";
import GlobalStyle from "../GlobalStyles";
import BigBoardBoxCreation from "./BigBoard/SingleBox/BigBoardBoxCreation";
import { useDispatch, useSelector } from "react-redux";
import { WINNERCOMBOS } from "../utils/constants/constants";
import WinnerModal from "./WinnerModal/WinnerModal";
import { clearIndexMiniBoard } from "../store/indexSlice";
import { clearFinalBoard } from "../store/winnerSlice";
import { resetGameOver, setResetGame } from "../store/resetSice";


const Main = () => {
  const dispatch = useDispatch();
  const [mainBoxes, setMainBoxes] = useState(new Array(9).fill(null));
  console.log("This is MAINBOXES", mainBoxes);
  const [winner, setWinner] = useState(null);

  const miniBoardIndex = useSelector((state) => state.index.miniBoard);
  const {finalBoard} = useSelector((state) => state.winner);
  const {reset} = useSelector((state)=>state.reset)

  const checkWinner = (boardToCheck) => {
    //comparamos el nuevo tablero con los combos ganadores
    for (const combo of WINNERCOMBOS) {
      console.log("combos");
      const [a, b, c] = combo; // obtiene las posiciones y las asigna como variables a b c
      if (
        boardToCheck[a] && //verifica si tenemos algo en esa casilla
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[b] === boardToCheck[c]
      ) {
        //si todas coinciden entonces mostrara el contenido de la casilla en a,

        return boardToCheck[a]; // x u o
      }
    }
    return null;
  };
  useEffect(()=>{
    const winnerIs = checkWinner(finalBoard);
    console.log("the winner is",winnerIs);
    setWinner(winnerIs);
// verify winner in finalBoard based on winner combos

  },[finalBoard]);

  const resetGame=()=>{
    setMainBoxes(Array(9).fill(null));
    
    setWinner(null);
    dispatch(clearIndexMiniBoard(11));
    dispatch(clearFinalBoard(Array(9).fill(null)));
    //reset game test
    dispatch(setResetGame(true));
  }
 

  return (
    <>
      <GlobalStyle />
      <MainBoardContainer>
        {mainBoxes.map((_, index) => {
          //big board game setup
          let restrictThis = null;
          
          if(finalBoard[miniBoardIndex]){//si ya hay algo en la posicion no me deja marcar en esa pos pero si en cualquier otro lugar
            restrictThis =false;
            if (index === miniBoardIndex||finalBoard[index]) {//finalBoard[index] verifica que en esa casilla ya no haya un ganador//habilita casillas en la posicion correspondiente comparando el indice de los tableros pequenos con los grandes
              restrictThis = true;
            }
          }else{
            restrictThis =true;
            if (index === miniBoardIndex||miniBoardIndex===11) {//habilita casillas en la posicion correspondiente comparando el indice de los tableros pequenos con los grandes
              restrictThis = false;
            }
          }
          if (index>8){
            dispatch(resetGameOver(false));
          }
          return (
            <BigBoardBoxCreation
              index={index}
              key={index}
              setMainBoxes={setMainBoxes}
              restrictThis={restrictThis}
              
             
            />
          );
        })}
      </MainBoardContainer>
      <WinnerModal
        winner={winner}
        setMainBoxes={setMainBoxes}
        // setTurn={setTurn}
        setWinner={setWinner}
        resetGame={resetGame}
        // TURNS={TURNS}
        // setCellsTaken={setCellsTaken}
      />
    </>
  );
};

export default Main;
