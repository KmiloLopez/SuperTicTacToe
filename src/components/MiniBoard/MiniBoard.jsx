import { useEffect, useState } from "react";

import { MainBoard } from "../MainBoard/MainBoard.styled";
import Square from "../Square/Square";

import confetti from "canvas-confetti";
//import Confetti from 'react-confetti'; Se utiliza como un componente
//
import { TURNS, WINNERCOMBOS } from "../../utils/constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { clearIndexMiniBoard, setIndexMiniBoard, setTurnforPlayer } from "../../store/indexSlice";
import { clearFinalBoard, setfinalBoardPosition } from "../../store/winnerSlice";
import IsLastSquare from "../IsLastScuare/IsLastScuare";


const MiniBoard = ({ bigBoardIndex, restrictThis, mainBoxes }) => {
 // const board =[...mainBoxes];
  const [board, setBoard] = useState(mainBoxes);
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);
  const [cellsTaken, setCellsTaken] = useState(1);
  const { turnPlayer } = useSelector((state) => state.index);
  const { finalBoard } = useSelector((state) => state.winner);
  const dispatch = useDispatch();
  const {reset} = useSelector((state)=>state.reset)

  //reseting game
   if(reset===true){
    console.log("reset en miniboard");
    
   }
   useEffect(()=>{
    setBoard(mainBoxes);
   },[]);
  //setBoard(Array(9).fill(null));
  //   setTurn(TURNS.X);
    // setWinner(null);
  //   setCellsTaken(1);
   

const resetGame = () => {
  setMainBoxes(Array(9).fill(null));
  setWinner(null);
  dispatch(clearIndexMiniBoard(11));
  dispatch(clearFinalBoard(Array(9).fill(null)));
  
};

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

  const updateBoard = (indexi) => {
    const newBoard = [...board]; //siempre se requiere crear un array nuevo para no modificar directamente el board, o los props(estaria mal hecho, los estados hay que considerarlos como inmutables para evitar problemas de renderizado)
    if (
      newBoard[indexi] === null &&
      winner === null &&
      restrictThis === false
    ) {
      dispatch(setTurnforPlayer());
      dispatch(setIndexMiniBoard(indexi));
      newBoard[indexi] = turnPlayer;

      //si en la posicion esta x asigne clase x
      //si en la posicion esta 0 asigne clase 0
      //si en la possicion esta null asing clase null
      setBoard(newBoard); //actualizacion de board con la nueva info
      setTurn(turn === TURNS.X ? TURNS.O : TURNS.X); //toggle x/o
      setCellsTaken((prev) => prev + 1);
      console.log(cellsTaken);
      //necesitamos comparar board con otro board y si conincide ese sera ganador
      const newScore = checkWinner(newBoard);
      if (newScore) {
        //asigna ganador en tablero grande
        const finalboardModif = [...finalBoard];
        finalboardModif[bigBoardIndex] = newScore;
        dispatch(setfinalBoardPosition(finalboardModif));
        //alert(`The winner is ${newScore}`) esta alerta saldra pero no se mostrar el tablero actualizado

        //setWinner(newScore); //actualizacion del estado ASINCRONO
        confetti();
      }
      if (cellsTaken === 9 && newScore == null) {
        setWinner(false); //si ya se llenaron las casillas asignamos false a winner
      }
    } else {
      console.log("cell already taken");
    }
  };
  return (
    <>
      
      <MainBoard>
        {board.map((element, index) => {
          if (element != null) {
            let classN = element; //each square gets its own class as the element content "x" or "o"

            return (
              <Square
                key={index}
                index={index}
                board={board}
                updateBoard={updateBoard}
                turn={turn}
                classN={classN}
                restrictThis={restrictThis}
                bigBoardIndex={bigBoardIndex}
              />
            );
          } else {
            let classN = turnPlayer + turnPlayer; ////SE PUEDE SIMPLIFICAR CODIGO
            return (
              <Square
                key={index}
                index={index}
                board={board}
                updateBoard={updateBoard}
                turn={turn}
                classN={classN}
                restrictThis={restrictThis}
                bigBoardIndex={bigBoardIndex}
              />
            );
          }
        })}
      </MainBoard>
      
 
      
    </>
  );
};

export default MiniBoard;
