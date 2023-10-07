
import React from 'react';
import { StyledSquare } from './Square.styled'
import { useSelector } from 'react-redux';
const cell=document.getElementsByClassName('x')


//TODO: IF CLICK IN A CELL ADD CLASSNAME WITH THE TURN TO THAT CELL
const Square = ({ board, updateBoard, index, turn, classN,restrictThis }) => {
const {reset} = useSelector((state)=>state.reset)
  // const [markCell, setMarkCell] = useState(null)
  
    const handleClick =()=>{
        updateBoard(index);
        
        
    }
    if (reset===true){
      let count = 0;
      console.log('ENTRAMOS A Square', count+=1)
      // cell[0].classList.remove('x');
      //Square.classList.remove('x');
      //document.getElementsByClassName('x').classList.remove('x');
      //document.getElementsByClassName('o').classList.remove('o');
    }
    const classToAdd =()=>{
      if(reset===true){
        return '';
      }else{
        return (`${classN ? classN : ''} ${restrictThis ? 'restricted' : ''}`)
      }
      
    }
     
  return (//${shouldRemove?
  //${classN ? classN : ''} ${restrictThis ? 'restricted' : ''}
    <StyledSquare className={classToAdd()} onClick={handleClick}></StyledSquare>
  )
}

export default Square
