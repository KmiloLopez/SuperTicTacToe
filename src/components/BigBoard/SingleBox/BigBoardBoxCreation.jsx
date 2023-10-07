import React from "react";
import { BigBoardBoxStyle } from "./BigBoardBoxCreation.styled";
import App from "../../MiniBoard/MiniBoard";

const BigBoardBoxCreation = ({ index,restrictThis,  }) => {
  const handleClick = () => {
    console.log("clicked on index", index);
  };
  return (
    //clase restrictThis se agrega a todos lose elementos, menos donde queremos seguir con el siguiente turno
    <BigBoardBoxStyle className={restrictThis? "restrictthis":''}>
      <App bigBoardIndex={index} restrictThis={restrictThis} />
    </BigBoardBoxStyle>
  );
};

export default BigBoardBoxCreation;
