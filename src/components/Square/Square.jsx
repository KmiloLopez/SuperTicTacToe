
import React from 'react';
import { StyledSquare } from './Square.styled'
import { useSelector } from 'react-redux';


//TODO: IF CLICK IN A CELL ADD CLASSNAME WITH THE TURN TO THAT CELL
const Square = ({ updateBoard, index, classN,restrictThis,  }) => {
const {reset} = useSelector((state)=>state.reset)
 
    const handleClick =()=>{
        updateBoard(index);
    }
    if (reset===true){
      let count = 0;
      console.log('ENTRAMOS A Square', count+=1)

    }
    const classToAdd =()=>{
      if(reset===true){
        return '';
      }else{
        return (`${classN ? classN : ''} ${restrictThis ? 'restricted' : ''}`)
      }
      
    }
     
  return (
    <StyledSquare className={classToAdd()} onClick={handleClick}></StyledSquare>
  )
}

export default Square
