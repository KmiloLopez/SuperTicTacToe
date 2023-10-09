import React from "react";
import { BigBoardBoxStyle } from "./BigBoardBoxCreation.styled";
import MiniBoard from "../../MiniBoard/MiniBoard";

const BigBoardBoxCreation = ({ bigBoardIndex,restrictThis, mainBoxes  }) => {
  const handleClick = () => {
    console.log("clicked on index", index);
  };
  return (
    //clase restrictThis se agrega a todos lose elementos, menos donde queremos seguir con el siguiente turno
    <BigBoardBoxStyle className={restrictThis? "restrictthis":''}>
      <MiniBoard bigBoardIndex={bigBoardIndex} restrictThis={restrictThis} mainBoxes={mainBoxes}/>
    </BigBoardBoxStyle>
  );
};

export default BigBoardBoxCreation;
