import React from "react";
import { BigBoardBoxStyle } from "./BigBoardBoxCreation.styled";
import MiniBoard from "../../MiniBoard/MiniBoard";

const BigBoardBoxCreation = ({ bigBoardIndex,restrictThis}) => {
 
  return (
    //clase restrictThis se agrega a todos lose elementos, menos donde queremos seguir con el siguiente turno
    <BigBoardBoxStyle className={restrictThis? "restrictthis":''}>
      <MiniBoard bigBoardIndex={bigBoardIndex} restrictThis={restrictThis} />
    </BigBoardBoxStyle>
  );
};

export default BigBoardBoxCreation;
